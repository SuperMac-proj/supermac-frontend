import { initializePaddle } from '@paddle/paddle-js';
import type { Paddle } from '@paddle/paddle-js';
import type { PaddleCheckoutOptions } from '../types/paddle';

// Paddle environment configuration
const PADDLE_ENVIRONMENT = import.meta.env.VITE_PADDLE_ENVIRONMENT || 'sandbox';
const PADDLE_CLIENT_TOKEN = import.meta.env.VITE_PADDLE_CLIENT_TOKEN || '';

// Paddle instance singleton
let paddleInstance: Paddle | null = null;

/**
 * Initialize Paddle SDK
 * Should be called once when the app starts
 */
export async function initPaddle(): Promise<Paddle | null> {
  if (paddleInstance) {
    return paddleInstance;
  }

  if (!PADDLE_CLIENT_TOKEN) {
    console.warn('Paddle client token is not configured');
    return null;
  }

  try {
    const paddle = await initializePaddle({
      environment: PADDLE_ENVIRONMENT as 'sandbox' | 'production',
      token: PADDLE_CLIENT_TOKEN,
    });

    if (!paddle) {
      console.error('Paddle initialization returned undefined');
      return null;
    }

    paddleInstance = paddle;
    console.log('Paddle initialized successfully');
    return paddleInstance;
  } catch (error) {
    console.error('Failed to initialize Paddle:', error);
    return null;
  }
}

/**
 * Get the Paddle instance
 * Initializes if not already initialized
 */
export async function getPaddleInstance(): Promise<Paddle | null> {
  if (paddleInstance) {
    return paddleInstance;
  }

  return await initPaddle();
}

/**
 * Open Paddle checkout
 * @param options - Checkout configuration options
 */
export async function openPaddleCheckout(options: PaddleCheckoutOptions): Promise<void> {
  const paddle = await getPaddleInstance();

  if (!paddle) {
    throw new Error('Paddle is not initialized');
  }

  try {
    const checkoutOptions: any = {
      items: options.items,
    };

    if (options.customData) {
      checkoutOptions.customData = options.customData;
    }

    if (options.customer?.email) {
      checkoutOptions.customer = {
        email: options.customer.email,
      };
    }

    paddle.Checkout.open(checkoutOptions);
  } catch (error) {
    console.error('Failed to open Paddle checkout:', error);
    throw error;
  }
}

/**
 * Update payment method
 * Opens the update payment method flow
 */
export async function updatePaymentMethod(subscriptionId: string): Promise<void> {
  const paddle = await getPaddleInstance();

  if (!paddle) {
    throw new Error('Paddle is not initialized');
  }

  try {
    // This will be implemented with backend API
    // For now, just log the action
    console.log('Update payment method for subscription:', subscriptionId);
    // paddle.Checkout.updatePaymentMethod({ subscriptionId });
  } catch (error) {
    console.error('Failed to update payment method:', error);
    throw error;
  }
}

/**
 * Get Paddle price IDs from environment
 * These should match the price IDs created in Paddle dashboard
 */
export const PADDLE_PRICE_IDS = {
  MONTHLY: import.meta.env.VITE_PADDLE_PRICE_ID_MONTHLY || '',
  YEARLY: import.meta.env.VITE_PADDLE_PRICE_ID_YEARLY || '',
  TRIAL: import.meta.env.VITE_PADDLE_PRICE_ID_TRIAL || '',
} as const;

/**
 * Helper to check if Paddle is properly configured
 */
export function isPaddleConfigured(): boolean {
  return !!(
    PADDLE_CLIENT_TOKEN &&
    (PADDLE_PRICE_IDS.MONTHLY || PADDLE_PRICE_IDS.YEARLY)
  );
}

/**
 * Format price for display
 */
export function formatPaddlePrice(amount: string, currency: string = 'USD'): string {
  const numAmount = parseFloat(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(numAmount);
}

/**
 * Get subscription status display text
 */
export function getSubscriptionStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    active: 'Active',
    trialing: 'Trial Period',
    past_due: 'Payment Overdue',
    paused: 'Paused',
    deleted: 'Canceled',
    canceled: 'Canceled',
  };

  return statusMap[status] || status;
}
