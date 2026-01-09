# Paddle Integration Setup Guide

This guide will help you set up Paddle payment integration for your frontend application.

## Prerequisites

- A Paddle account (sign up at https://paddle.com)
- Access to Paddle Dashboard
- Backend API ready to handle Paddle webhooks (optional for now)

## Step 1: Get Paddle Credentials

1. Log in to your [Paddle Dashboard](https://vendors.paddle.com/)
2. Go to **Developer Tools > Authentication**
3. Copy your **Client-side Token**
4. Add it to your `.env` file as `VITE_PADDLE_CLIENT_TOKEN`

## Step 2: Create Products and Prices

### Create a Product

1. In Paddle Dashboard, go to **Catalog > Products**
2. Click **Create Product**
3. Fill in product details:
   - Name: "SuperMac Pro"
   - Description: "Premium clipboard and snippet manager for macOS"
   - Tax category: Select appropriate category

### Create Price Plans

Create three price plans for your product:

#### 1. Free Trial (7 days)
1. Go to **Catalog > Prices**
2. Click **Create Price**
3. Select your product
4. Configure:
   - Name: "7-Day Free Trial"
   - Billing cycle: One-time or trial period
   - Price: $0.00 or set trial period
5. Copy the Price ID and add to `.env` as `VITE_PADDLE_PRICE_ID_TRIAL`

#### 2. Monthly Plan
1. Create a new price
2. Configure:
   - Name: "Pro Monthly"
   - Billing cycle: Monthly
   - Price: $7.99 USD
3. Copy the Price ID and add to `.env` as `VITE_PADDLE_PRICE_ID_MONTHLY`

#### 3. Yearly Plan
1. Create a new price
2. Configure:
   - Name: "Pro Yearly"
   - Billing cycle: Yearly
   - Price: $79.99 USD
3. Copy the Price ID and add to `.env` as `VITE_PADDLE_PRICE_ID_YEARLY`

## Step 3: Configure Environment Variables

Update your `.env` file with the following values:

```bash
# Paddle Configuration
VITE_PADDLE_ENVIRONMENT=sandbox  # Use 'production' when going live
VITE_PADDLE_CLIENT_TOKEN=your_actual_client_token
VITE_PADDLE_PRICE_ID_MONTHLY=pri_xxxxx
VITE_PADDLE_PRICE_ID_YEARLY=pri_xxxxx
VITE_PADDLE_PRICE_ID_TRIAL=pri_xxxxx
```

## Step 4: Test in Sandbox Mode

1. Make sure `VITE_PADDLE_ENVIRONMENT=sandbox` in your `.env`
2. Run your development server: `npm run dev`
3. Go to the Pricing page
4. Click on any plan button
5. A Paddle checkout overlay should appear
6. Use Paddle's [test card numbers](https://developer.paddle.com/concepts/payment-methods/credit-debit-card) to test payments

### Test Card Numbers

- **Successful payment**: 4242 4242 4242 4242
- **Declined payment**: 4000 0000 0000 0002
- Use any future expiry date and any 3-digit CVV

## Step 5: Backend Integration (Coming Next)

The frontend is now ready, but you'll need a backend to:

1. **Handle Paddle Webhooks**: Receive notifications about subscription events
2. **Store Subscription Data**: Save subscription information in your database
3. **Manage User Access**: Check if users have active subscriptions

### Required Backend Endpoints

Your backend should implement these endpoints:

```
GET    /api/subscription              - Get current user's subscription
POST   /api/subscription/checkout     - Create checkout session
PATCH  /api/subscription/:id          - Update subscription
POST   /api/subscription/:id/cancel   - Cancel subscription
POST   /api/subscription/:id/resume   - Resume subscription
POST   /api/webhooks/paddle           - Handle Paddle webhooks
```

### Webhook Events to Handle

- `subscription.created` - New subscription created
- `subscription.updated` - Subscription updated
- `subscription.canceled` - Subscription canceled
- `transaction.completed` - Payment completed
- `transaction.paid` - Payment received

## Step 6: Going to Production

When you're ready to go live:

1. Switch to production mode in Paddle Dashboard
2. Get your **production** client token
3. Create **production** prices (same configuration as sandbox)
4. Update `.env`:
   ```bash
   VITE_PADDLE_ENVIRONMENT=production
   VITE_PADDLE_CLIENT_TOKEN=your_production_token
   VITE_PADDLE_PRICE_ID_MONTHLY=pri_production_xxxxx
   VITE_PADDLE_PRICE_ID_YEARLY=pri_production_xxxxx
   VITE_PADDLE_PRICE_ID_TRIAL=pri_production_xxxxx
   ```
5. Deploy your application

## Files Created

The following files have been created for Paddle integration:

- `src/types/paddle.ts` - TypeScript type definitions
- `src/lib/paddle.ts` - Paddle SDK initialization and helper functions
- `src/services/subscription.ts` - API client for subscription management
- `src/pages/MyPage.tsx` - Updated with subscription UI
- `src/pages/PricingPage.tsx` - Updated with Paddle checkout integration

## Troubleshooting

### Checkout overlay doesn't appear

- Check that `VITE_PADDLE_CLIENT_TOKEN` is set correctly
- Open browser console to check for errors
- Verify you're using the correct environment (sandbox/production)

### "Paddle is not initialized" error

- Make sure environment variables are set
- Restart your development server after changing `.env`
- Check browser console for initialization errors

### Payment doesn't complete

- In sandbox mode, use test card numbers
- Check Paddle Dashboard > Events to see if events are being received
- Verify price IDs match your Paddle configuration

## Resources

- [Paddle Documentation](https://developer.paddle.com/)
- [Paddle.js SDK Reference](https://developer.paddle.com/paddlejs/overview)
- [Paddle Sandbox Testing](https://developer.paddle.com/concepts/sell/sandbox)
- [Paddle Webhooks Guide](https://developer.paddle.com/webhooks/overview)

## Support

If you encounter issues:
1. Check Paddle Dashboard > Events for webhook deliveries
2. Review browser console for JavaScript errors
3. Contact Paddle Support if payment processing issues occur
