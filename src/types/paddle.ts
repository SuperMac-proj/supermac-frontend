// Paddle subscription status types
export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'paused'
  | 'deleted'
  | 'canceled';

// Paddle product/price types
export interface PaddlePrice {
  id: string;
  product_id: string;
  description: string;
  unit_price: {
    amount: string;
    currency_code: string;
  };
  billing_cycle?: {
    interval: 'day' | 'week' | 'month' | 'year';
    frequency: number;
  };
}

export interface PaddleProduct {
  id: string;
  name: string;
  description?: string;
  prices: PaddlePrice[];
}

// Paddle subscription types
export interface PaddleSubscription {
  id: string;
  status: SubscriptionStatus;
  customer_id: string;
  price_id: string;
  product_id: string;
  current_billing_period?: {
    starts_at: string;
    ends_at: string;
  };
  next_billed_at?: string;
  created_at: string;
  updated_at: string;
  canceled_at?: string;
  paused_at?: string;
  trial_dates?: {
    starts_at: string;
    ends_at: string;
  };
}

// Paddle transaction types
export interface PaddleTransaction {
  id: string;
  status: 'draft' | 'ready' | 'billed' | 'paid' | 'completed' | 'canceled' | 'past_due';
  customer_id: string;
  subscription_id?: string;
  items: Array<{
    price_id: string;
    quantity: number;
  }>;
  details: {
    totals: {
      subtotal: string;
      total: string;
      tax: string;
      currency_code: string;
    };
  };
  created_at: string;
  billed_at?: string;
  checkout?: {
    url?: string;
  };
}

// Paddle customer types
export interface PaddleCustomer {
  id: string;
  email: string;
  name?: string;
  created_at: string;
  updated_at: string;
}

// Paddle checkout types
export interface PaddleCheckoutOptions {
  items: Array<{
    priceId: string;
    quantity: number;
  }>;
  customData?: {
    userId?: string;
    [key: string]: any;
  };
  customer?: {
    email?: string;
  };
}

// Frontend subscription state
export interface SubscriptionState {
  subscription: PaddleSubscription | null;
  customer: PaddleCustomer | null;
  loading: boolean;
  error: string | null;
}

// API response types
export interface GetSubscriptionResponse {
  subscription: PaddleSubscription | null;
  customer: PaddleCustomer | null;
}

export interface CreateCheckoutResponse {
  checkout_url: string;
  transaction_id: string;
}

export interface CancelSubscriptionResponse {
  subscription: PaddleSubscription;
  message: string;
}

// Paddle webhook event types (for reference)
export type PaddleWebhookEvent =
  | 'subscription.created'
  | 'subscription.updated'
  | 'subscription.canceled'
  | 'subscription.paused'
  | 'subscription.resumed'
  | 'transaction.completed'
  | 'transaction.paid'
  | 'customer.created'
  | 'customer.updated';
