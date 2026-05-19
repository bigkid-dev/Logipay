import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/index.jsx";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `
LogiPay provides a unified payment and store infrastructure for African businesses. Our APIs allow you to accept payments, manage online stores, and sell directly on social media — all through a single integration.

**Base URL:** \`https://api.logipay.africa/v1\`

**Key Features:**
- Cards, bank transfers, USSD, mobile money
- Social commerce (WhatsApp, Instagram, TikTok)
- Built-in storefront API
- Escrow & split payments
- Webhooks for real-time events

**Supported Countries:** Nigeria, Ghana, Kenya, South Africa

All responses are in JSON. All requests must use HTTPS.
    `,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content: `
**Step 1: Create a merchant account**
Sign up at dashboard.logipay.africa

**Step 2: Get your API keys**
Navigate to Developers → API Keys
- \`LOGIPAY_PUBLIC_KEY\` (client-side)
- \`LOGIPAY_SECRET_KEY\` (server-side, keep secret)

**Step 3: Install SDK**

\`\`\`bash
npm install logipay-sdk
# or
yarn add logipay-sdk
\`\`\`

**Step 4: Initialize**

\`\`\`javascript
// Frontend (browser)
const logipay = new LogiPay({
  publicKey: 'pk_live_xxxx',
  env: 'production'
});

// Backend (Node.js)
const logipay = require('logipay-sdk')('sk_live_xxxx');
\`\`\`

**Step 5: Make your first payment** → See "Making Payments" below.
    `,
  },
  {
    id: "authentication",
    title: "Authentication",
    content: `
All API requests require authentication using your secret key.

**Via Authorization Header (recommended):**

\`\`\`bash
curl https://api.logipay.africa/v1/payments \\
  -H "Authorization: Bearer sk_live_xxxx" \\
  -H "Content-Type: application/json"
\`\`\`

**Via API Key header:**

\`\`\`bash
-H "LOGIPAY-SECRET-KEY: sk_live_xxxx"
\`\`\`

**Public endpoints** (initialize payment, get banks) use your public key:

\`\`\`bash
-H "LOGIPAY-PUBLIC-KEY: pk_live_xxxx"
\`\`\`

> ⚠️ Never expose your secret key on client-side. Use it only on your backend servers.
    `,
  },
  {
    id: "initialize-payment",
    title: "Initialize Payment",
    content: `
**Endpoint:** \`POST /v1/payments/initialize\`

Use this endpoint to create a new payment session. LogiPay returns an authorization URL that you redirect the customer to.

**Request Body:**

\`\`\`json
{
  "amount": 5000,
  "currency": "NGN",
  "email": "customer@example.com",
  "reference": "ORDER_12345",
  "callback_url": "https://yourstore.com/thankyou",
  "metadata": {
    "order_id": "12345",
    "customer_name": "John Doe"
  }
}
\`\`\`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| amount | integer | Yes | Amount in kobo/cent (e.g., 5000 = ₦50.00) |
| currency | string | Yes | NGN, GHS, KES, ZAR |
| email | string | Yes | Customer's email address |
| reference | string | Yes | Unique transaction reference (max 50 chars) |
| callback_url | string | Yes | URL to redirect after payment |
| metadata | object | No | Additional data (order ID, product info, etc.) |

**Response (200 OK):**

\`\`\`json
{
  "status": true,
  "message": "Payment initialized successfully",
  "data": {
    "authorization_url": "https://checkout.logipay.africa/pay/ref_xxxx",
    "reference": "ORDER_12345",
    "access_code": "ref_xxxx"
  }
}
\`\`\`

**Error Response:**

\`\`\`json
{
  "status": false,
  "message": "Invalid amount. Amount must be greater than 0",
  "error_code": "INVALID_AMOUNT"
}
\`\`\`
    `,
  },
  {
    id: "verify-payment",
    title: "Verify Payment",
    content: `
**Endpoint:** \`GET /v1/payments/verify/{reference}\`

Check the status of a payment after the customer completes checkout.

**Request:**

\`\`\`bash
curl https://api.logipay.africa/v1/payments/verify/ORDER_12345 \\
  -H "Authorization: Bearer sk_live_xxxx"
\`\`\`

**Response (200 OK - Successful):**

\`\`\`json
{
  "status": true,
  "data": {
    "reference": "ORDER_12345",
    "amount": 5000,
    "currency": "NGN",
    "status": "success",
    "paid_at": "2025-01-15T10:30:00Z",
    "payment_method": "card",
    "card_details": {
      "last4": "4242",
      "brand": "Visa"
    },
    "metadata": {
      "order_id": "12345"
    }
  }
}
\`\`\`

**Response (Pending or Failed):**

\`\`\`json
{
  "status": true,
  "data": {
    "reference": "ORDER_12345",
    "amount": 5000,
    "currency": "NGN",
    "status": "pending",
    "message": "Awaiting customer confirmation"
  }
}
\`\`\`

**Payment Statuses:**

| Status | Description |
|--------|-------------|
| success | Payment completed successfully |
| pending | Awaiting confirmation (bank transfer) |
| failed | Payment failed |
| abandoned | Customer didn't complete payment |
    `,
  },
  {
    id: "list-banks",
    title: "List Banks",
    content: `
**Endpoint:** \`GET /v1/banks\`

Get a list of supported banks for transfers and USSD payments.

**Request:**

\`\`\`bash
curl https://api.logipay.africa/v1/banks \\
  -H "LOGIPAY-PUBLIC-KEY: pk_live_xxxx"
\`\`\`

**Response:**

\`\`\`json
{
  "status": true,
  "data": [
    {
      "code": "001",
      "name": "Access Bank",
      "type": "commercial",
      "usd": false
    },
    {
      "code": "002",
      "name": "Guaranty Trust Bank",
      "type": "commercial",
      "usd": false
    },
    {
      "code": "003",
      "name": "First Bank of Nigeria",
      "type": "commercial",
      "usd": false
    }
  ]
}
\`\`\`
    `,
  },
  {
    id: "social-payments",
    title: "Social Payments",
    content: `
Sell directly on social media without building a checkout page.

**WhatsApp Pay Link:**

\`\`\`javascript
POST /v1/social/whatsapp/link

{
  "amount": 25000,
  "currency": "NGN",
  "product_name": "African Print Dress",
  "product_image": "https://yourstore.com/dress.jpg",
  "customer_phone": "2348012345678"
}
\`\`\`

**Response:**

\`\`\`json
{
  "status": true,
  "data": {
    "whatsapp_link": "https://wa.me/pay/xxxx",
    "qr_code": "https://api.logipay.africa/qr/xxxx.png",
    "short_url": "logipay.africa/p/xxxx"
  }
}
\`\`\`

**Instagram/TikTok Catalog Sync:**

\`\`\`javascript
POST /v1/social/catalog/sync

{
  "platform": "instagram",
  "products": [
    {
      "id": "prod_001",
      "name": "Handmade Beaded Bag",
      "price": 15000,
      "image_url": "https://yourstore.com/bag.jpg",
      "deep_link": "https://yourstore.com/product/bag"
    }
  ]
}
\`\`\`

**DM Checkout Link:**

\`\`\`bash
GET /v1/social/checkout-link/{product_id}

// Returns:
{
  "checkout_url": "https://logipay.africa/checkout/prod_001",
  "whatsapp_message": "Pay for Handmade Beaded Bag: https://logipay.africa/p/xxxx"
}
\`\`\`
    `,
  },
  {
    id: "webhooks",
    title: "Webhooks",
    content: `
LogiPay sends HTTP POST requests to your registered URLs when events happen.

**Register a webhook:**

\`\`\`bash
POST /v1/webhooks

{
  "url": "https://yourdomain.com/logipay-webhook",
  "events": ["payment.success", "payment.failed", "refund.processed"],
  "secret": "your_verification_secret"
}
\`\`\`

**Event Types:**

| Event | Description |
|-------|-------------|
| \`payment.success\` | Payment completed successfully |
| \`payment.failed\` | Payment failed |
| \`refund.processed\` | Refund has been processed |
| \`transfer.success\` | Bank transfer completed |
| \`subscription.renewed\` | Subscription auto-renewed |

**Webhook Payload Example:**

\`\`\`json
{
  "event": "payment.success",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "reference": "ORDER_12345",
    "amount": 5000,
    "currency": "NGN",
    "customer_email": "customer@example.com"
  }
}
\`\`\`

**Verifying Webhooks:**

To verify a webhook is from LogiPay, check the signature header:

\`\`\`javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  return signature === expected;
}
\`\`\`
    `,
  },
  {
    id: "refunds",
    title: "Refunds",
    content: `
**Endpoint:** \`POST /v1/refunds\`

Process a full or partial refund for a successful payment.

**Request:**

\`\`\`json
{
  "reference": "ORDER_12345",
  "amount": 5000,
  "reason": "Customer requested refund"
}
\`\`\`

**Response:**

\`\`\`json
{
  "status": true,
  "data": {
    "refund_id": "ref_xxxx",
    "reference": "ORDER_12345",
    "amount": 5000,
    "status": "processed",
    "created_at": "2025-01-15T12:00:00Z"
  }
}
\`\`\`

**Note:** Refunds take 2-5 business days to reflect in the customer's account depending on their bank.
    `,
  },
  {
    id: "store-api",
    title: "Store API",
    content: `
Create and manage online stores programmatically.

**Create a product:**

\`\`\`javascript
POST /v1/store/products

{
  "name": "Handmade Beaded Bag",
  "description": "Beautiful African beadwork bag",
  "price": 15000,
  "currency": "NGN",
  "images": ["https://yourstore.com/bag1.jpg", "https://yourstore.com/bag2.jpg"],
  "inventory": 10,
  "category": "accessories"
}
\`\`\`

**Response:**

\`\`\`json
{
  "status": true,
  "data": {
    "product_id": "prod_xxxx",
    "checkout_url": "https://checkout.logipay.africa/p/prod_xxxx",
    "embed_code": "<script src='https://checkout.logipay.africa/embed.js' data-product='prod_xxxx'></script>"
  }
}
\`\`\`

**List all products:**

\`\`\`bash
GET /v1/store/products?page=1&limit=20
\`\`\`

**Get single product:**

\`\`\`bash
GET /v1/store/products/{product_id}
\`\`\`

**Update inventory:**

\`\`\`javascript
PATCH /v1/store/products/{product_id}

{
  "inventory": 5
}
\`\`\`
    `,
  },
  {
    id: "split-payments",
    title: "Split Payments (Escrow)",
    content: `
Split a single payment between multiple recipients — perfect for marketplaces.

**Initialize split payment:**

\`\`\`javascript
POST /v1/payments/split

{
  "amount": 50000,
  "currency": "NGN",
  "email": "customer@example.com",
  "subaccounts": [
    {
      "account_id": "merchant_001",
      "amount": 45000,
      "percentage": 90
    },
    {
      "account_id": "platform_001",
      "amount": 5000,
      "percentage": 10
    }
  ],
  "reference": "ORDER_SPLIT_12345"
}
\`\`\`

**Response:**

\`\`\`json
{
  "status": true,
  "data": {
    "authorization_url": "https://checkout.logipay.africa/pay/split_xxxx",
    "reference": "ORDER_SPLIT_12345",
    "subaccount_splits": [
      { "account_id": "merchant_001", "share": 45000 },
      { "account_id": "platform_001", "share": 5000 }
    ]
  }
}
\`\`\`

**Hold in escrow (release later):**

\`\`\`javascript
POST /v1/escrow/hold

{
  "reference": "ORDER_SPLIT_12345",
  "hold_duration_days": 7
}
\`\`\`

**Release escrow:**

\`\`\`javascript
POST /v1/escrow/release

{
  "reference": "ORDER_SPLIT_12345",
  "subaccount_id": "merchant_001"
}
\`\`\`
    `,
  },
  {
    id: "sdk-mobile",
    title: "Mobile SDKs",
    content: `
Integrate LogiPay directly into your iOS and Android apps.

**iOS (Swift):**

\`\`\`swift
import LogiPaySDK

let config = LPConfig(publicKey: "pk_live_xxxx")
LogiPay.initialize(with: config)

let payment = LPPayment(
  amount: 5000,
  currency: "NGN",
  email: "customer@example.com",
  reference: "ORDER_12345"
)

LogiPay.presentCheckout(payment, from: self) { result in
  switch result {
  case .success(let transaction):
    print("Payment successful: \\(transaction.reference)")
  case .failure(let error):
    print("Payment failed: \\(error)")
  }
}
\`\`\`

**Android (Kotlin):**

\`\`\`kotlin
val config = LPConfig.Builder("pk_live_xxxx").build()
LogiPay.initialize(config)

val payment = LPPayment(
  amount = 5000,
  currency = "NGN",
  email = "customer@example.com",
  reference = "ORDER_12345"
)

LogiPay.startCheckout(activity, payment) { result ->
  when (result) {
    is LPResult.Success -> Log.d("Payment success", result.data.reference)
    is LPResult.Error -> Log.e("Payment failed", result.error.message)
  }
}
\`\`\`

**Flutter:**

\`\`\`dart
final logipay = LogiPay(publicKey: 'pk_live_xxxx');

final response = await logipay.initializePayment(
  amount: 5000,
  currency: 'NGN',
  email: 'customer@example.com',
  reference: 'ORDER_12345',
);

if (response.success) {
  await logipay.openCheckout(response.authorizationUrl);
}
\`\`\`
    `,
  },
  {
    id: "rate-limits",
    title: "Rate Limits",
    content: `
To ensure platform stability, we enforce rate limits on API requests.

**Rate Limits by Endpoint:**

| Endpoint | Rate Limit |
|----------|------------|
| POST /v1/payments/initialize | 10 requests/second |
| GET /v1/payments/verify | 20 requests/second |
| POST /v1/refunds | 5 requests/second |
| GET /v1/banks | 30 requests/second |
| POST /v1/social/* | 5 requests/second |

**Rate Limit Headers:**

Every response includes these headers:

\`\`\`
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1705315200
\`\`\`

**When exceeded:**

\`\`\`json
{
  "status": false,
  "message": "Rate limit exceeded. Please try again in 60 seconds.",
  "error_code": "RATE_LIMIT_EXCEEDED",
  "retry_after": 60
}
\`\`\`

To increase your rate limit, contact enterprise@logipay.africa.
    `,
  },
  {
    id: "errors",
    title: "Error Codes",
    content: `
**Common Error Codes and Their Meanings:**

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| \`INVALID_API_KEY\` | 401 | API key is missing or invalid |
| \`INVALID_AMOUNT\` | 400 | Amount must be greater than 0 |
| \`DUPLICATE_REFERENCE\` | 409 | Transaction reference already used |
| \`INSUFFICIENT_FUNDS\` | 400 | Merchant wallet balance insufficient |
| \`TRANSACTION_NOT_FOUND\` | 404 | No transaction found with that reference |
| \`PAYMENT_FAILED\` | 400 | Payment could not be processed |
| \`WEBHOOK_VERIFICATION_FAILED\` | 401 | Webhook signature doesn't match |
| \`BANK_NOT_SUPPORTED\` | 400 | Bank code not supported in this region |
| \`ESCROW_RELEASE_FAILED\` | 400 | Cannot release escrow before hold period |

**Handling Errors:**

\`\`\`javascript
try {
  const response = await logipay.initializePayment(data);
} catch (error) {
  switch (error.error_code) {
    case 'INVALID_API_KEY':
      // Re-check your API keys
      break;
    case 'DUPLICATE_REFERENCE':
      // Generate a new reference
      break;
    case 'INSUFFICIENT_FUNDS':
      // Fund your wallet
      break;
    default:
      console.log('Unknown error:', error.message);
  }
}
\`\`\`
    `,
  },
  {
    id: "sandbox",
    title: "Sandbox Testing",
    content: `
Test your integration without real money using our sandbox environment.

**Sandbox Base URL:** \`https://sandbox-api.logipay.africa/v1\`

**Sandbox Test Cards:**

| Card Number | Brand | Status |
|-------------|-------|--------|
| 4242 4242 4242 4242 | Visa | Success |
| 4111 1111 1111 1111 | Visa | Requires OTP |
| 4000 0000 0000 0002 | Visa | Failed (insufficient funds) |

**Sandbox Test Banks (Transfer):**

| Bank Code | Bank Name | Behavior |
|-----------|-----------|----------|
| 001 | Test Bank | Instant success |
| 002 | Slow Bank | Pending for 5 minutes |
| 003 | Fail Bank | Always fails |

**OTP Test Codes:**

| Scenario | OTP Code |
|----------|----------|
| Approve payment | 123456 |
| Reject payment | 000000 |
| Request resend | 999999 |

**Reset Sandbox Data:**

\`\`\`bash
POST /v1/sandbox/reset

// Clears all test transactions and resets wallet balance to ₦1,000,000
\`\`\`

Use the sandbox to simulate webhooks by adding \`?simulate=webhook\` to any request.
    `,
  },
  {
    id: "support",
    title: "Support & Contact",
    content: `
**Developer Support Channels:**

- **Email:** developers@logipay.africa
- **Slack Community:** logipay-community.slack.com
- **GitHub:** github.com/logipay
- **API Status:** status.logipay.africa

**Office Hours:** Monday–Friday, 9 AM – 6 PM WAT

**Escalation:** For urgent production issues, call our developer hotline: +234 800 LOGIPAY

**Response Times:**

| Priority | Response Time |
|----------|---------------|
| Critical (production down) | 1 hour |
| High (feature broken) | 4 hours |
| Normal (question/integration) | 24 hours |
| Low (feature request) | 5 business days |

We're here to help you build. Join our Slack community to connect with other developers using LogiPay.
    `,
  },
];

export default function DocsPage() {
  const [active, setActive] = useState("overview");

  // Helper to render content with markdown-like formatting
  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith("```")) {
        const lang = line.slice(3);
        let codeContent = "";
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeContent += lines[i] + "\n";
          i++;
        }
        i++; // skip closing ```
        elements.push(
          <pre
            key={i}
            className="bg-slate-900 dark:bg-navy-950 text-slate-100 p-4 rounded-xl overflow-x-auto my-4 text-xs font-mono"
          >
            <code>{codeContent.trim()}</code>
          </pre>,
        );
        continue;
      }

      // Headers (## **text**)
      if (line.startsWith("**") && line.endsWith("**") && line.length < 60) {
        elements.push(
          <h3
            key={i}
            className="font-display font-semibold text-brand-navy dark:text-white text-base mt-6 mb-3"
          >
            {line.replace(/\*\*/g, "")}
          </h3>,
        );
        i++;
        continue;
      }

      // Bullet points
      if (line.startsWith("- ")) {
        const bullets = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          bullets.push(
            <li
              key={i}
              className="ml-4 mb-1 text-slate-600 dark:text-slate-400 text-sm"
            >
              {lines[i].slice(2)}
            </li>,
          );
          i++;
        }
        elements.push(
          <ul key={i} className="list-disc mb-4">
            {bullets}
          </ul>,
        );
        continue;
      }

      // Tables (simple pipe format)
      if (line.includes("|") && line.includes("---")) {
        const tableRows = [];
        while (i < lines.length && lines[i].includes("|")) {
          if (!lines[i].includes("---")) {
            const cells = lines[i]
              .split("|")
              .filter((c) => c.trim())
              .map((c) => c.trim());
            tableRows.push(
              <tr key={i}>
                {cells.map((cell, idx) => (
                  <td
                    key={idx}
                    className="border border-slate-200 dark:border-white/10 px-4 py-2 text-sm"
                  >
                    {cell}
                  </td>
                ))}
              </tr>,
            );
          }
          i++;
        }
        elements.push(
          <div key={i} className="overflow-x-auto my-4">
            <table className="w-full border border-slate-200 dark:border-white/10 rounded-lg">
              <tbody>{tableRows}</tbody>
            </table>
          </div>,
        );
        continue;
      }

      // Regular paragraph
      if (line.trim()) {
        // Handle inline `code`
        let formattedLine = line.replace(
          /`([^`]+)`/g,
          '<code class="bg-slate-100 dark:bg-navy-800 px-1.5 py-0.5 rounded text-brand-orange text-xs font-mono">$1</code>',
        );
        // Handle inline > note
        if (line.startsWith("> ")) {
          elements.push(
            <div
              key={i}
              className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-brand-orange p-4 my-4 rounded-r-xl"
            >
              <p
                className="text-slate-700 dark:text-slate-300 text-sm"
                dangerouslySetInnerHTML={{ __html: formattedLine.slice(2) }}
              />
            </div>,
          );
        } else {
          elements.push(
            <p
              key={i}
              className="text-slate-600 dark:text-slate-400 font-body text-sm leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: formattedLine }}
            />,
          );
        }
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="page-wrapper">
      <section className="section-padding bg-white dark:bg-navy-900">
        <div className="container-max">
          {/* Hero */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="orange" className="text-xs">
                Developer Docs
              </Badge>
              <span className="text-xs text-slate-400">v1.0.0</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-brand-navy dark:text-white mb-3">
              LogiPay API Documentation
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">
              Build seamless payment experiences. Integrate once — accept cards,
              transfers, USSD, mobile money, and social payments.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-slate-50 dark:bg-navy-800 rounded-2xl p-5 border border-slate-100 dark:border-white/5">
                <p className="font-display font-semibold text-brand-navy dark:text-white text-sm mb-4">
                  Contents
                </p>
                <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(s.id);
                        document
                          .getElementById(s.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`block px-3 py-2 rounded-lg text-xs font-body transition-colors ${active === s.id ? "bg-brand-orange text-white font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700"}`}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display font-bold text-brand-navy dark:text-white text-xl mb-4 pb-3 border-b border-slate-100 dark:border-white/10">
                    {s.title}
                  </h2>
                  <div>{renderContent(s.content)}</div>
                </div>
              ))}

              {/* Footer note */}
              <div className="pt-8 mt-8 border-t border-slate-100 dark:border-white/10 text-center">
                <p className="text-slate-400 text-xs">
                  LogiPay Technologies Ltd — Making payments as simple as
                  possible.
                  <br />
                  Need help?{" "}
                  <a
                    href="mailto:developers@logipay.africa"
                    className="text-brand-orange hover:underline"
                  >
                    developers@logipay.africa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
