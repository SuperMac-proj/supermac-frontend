import { supabase } from '../lib/supabase';
import type {
  GetSubscriptionResponse,
  CreateCheckoutResponse,
  CancelSubscriptionResponse,
  PaddleSubscription,
} from '../types/paddle';

// API base URL from environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

/**
 * Get authorization header with Supabase session token
 */
async function getAuthHeaders(): Promise<HeadersInit> {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error('Not authenticated');
  }

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session.access_token}`,
  };
}

/**
 * Get current user's subscription information
 */
export async function getSubscription(): Promise<GetSubscriptionResponse> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/subscription`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch subscription: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching subscription:', error);
    // Return mock data for development
    return {
      subscription: null,
      customer: null,
    };
  }
}

/**
 * Create a checkout session for a new subscription
 * @param priceId - Paddle price ID for the plan
 * @param email - User email address
 */
export async function createCheckout(
  priceId: string,
  email?: string
): Promise<CreateCheckoutResponse> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/subscription/checkout`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ priceId, email }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create checkout: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}

/**
 * Update subscription to a different plan
 * @param subscriptionId - Current subscription ID
 * @param newPriceId - New Paddle price ID
 */
export async function updateSubscription(
  subscriptionId: string,
  newPriceId: string
): Promise<PaddleSubscription> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/subscription/${subscriptionId}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ priceId: newPriceId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update subscription: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }
}

/**
 * Cancel a subscription
 * @param subscriptionId - Subscription ID to cancel
 */
export async function cancelSubscription(
  subscriptionId: string
): Promise<CancelSubscriptionResponse> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/subscription/${subscriptionId}/cancel`, {
      method: 'POST',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to cancel subscription: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error canceling subscription:', error);
    throw error;
  }
}

/**
 * Resume a paused subscription
 * @param subscriptionId - Subscription ID to resume
 */
export async function resumeSubscription(
  subscriptionId: string
): Promise<PaddleSubscription> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(`${API_BASE_URL}/subscription/${subscriptionId}/resume`, {
      method: 'POST',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to resume subscription: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error resuming subscription:', error);
    throw error;
  }
}

/**
 * Get payment method update URL
 * @param subscriptionId - Subscription ID
 */
export async function getPaymentUpdateUrl(
  subscriptionId: string
): Promise<{ url: string }> {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(
      `${API_BASE_URL}/subscription/${subscriptionId}/payment-method`,
      {
        method: 'GET',
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get payment update URL: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting payment update URL:', error);
    throw error;
  }
}

/**
 * Mock subscription data for development/testing
 */
export function getMockSubscription(): GetSubscriptionResponse {
  return {
    subscription: {
      id: 'sub_mock_123',
      status: 'trialing',
      customer_id: 'ctm_mock_123',
      price_id: 'pri_monthly',
      product_id: 'pro_supermac',
      current_billing_period: {
        starts_at: new Date().toISOString(),
        ends_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      },
      next_billed_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      trial_dates: {
        starts_at: new Date().toISOString(),
        ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
    },
    customer: {
      id: 'ctm_mock_123',
      email: 'user@example.com',
      name: 'Test User',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  };
}
