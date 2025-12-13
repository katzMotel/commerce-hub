# Basecamp Supply

A full-stack e-commerce application for outdoor gear, featuring real Shopify product integration, Stripe payments, and a modern React/Next.js frontend.

## 🎯 Project Overview

Basecamp Supply is a fictional outdoor gear store built to demonstrate full-stack e-commerce development skills. The project integrates with Shopify's Storefront API for product data and Stripe for payment processing, showcasing real-world API integration and state management patterns.

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS v3
- Redux Toolkit (state management)
- Framer Motion (animations)

**Backend/Services:**
- Shopify Storefront API (GraphQL)
- Stripe Checkout
- Vercel (deployment)

**Development:**
- ESLint
- Prettier
- Git/GitHub

## ✨ Features

### Core Functionality
- **Product Catalog**: Browse products with real Shopify data
- **Search & Filtering**: Real-time search with sort and price range filters
- **Shopping Cart**: Add/remove items, update quantities with Redux state management
- **Stripe Checkout**: Secure payment processing with test mode
- **Responsive Design**: Mobile-first design with dark mode support

### Design & UX
- **Custom Theme**: Forest green/warm orange outdoor aesthetic
- **Typography**: Bebas Neue headings + Open Sans body
- **Background Effects**: Layered mountain illustrations, canvas textures
- **Smooth Animations**: Scroll-aware header, drawer transitions
- **Toast Notifications**: User feedback for cart actions
- **Loading States**: Skeleton screens during data fetching

### Pages
- **Homepage**: Hero section with personal photography, product grid
- **About**: Brand story and values
- **Product Details**: Individual product pages with image galleries
- **Checkout Success**: Order confirmation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Shopify store (for Storefront API access)
- Stripe account (test mode)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/basecamp-supply.git
cd basecamp-supply
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain | Yes |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Shopify Storefront API token | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (test) | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key (test) | Yes |

## 📸 Screenshots

[Add screenshots here after deployment]

## 🎓 What I Learned

- **State Management**: Implementing Redux Toolkit with Next.js App Router
- **API Integration**: Working with GraphQL (Shopify) and REST (Stripe)
- **TypeScript**: Type-safe development with complex data structures
- **Design Systems**: Building cohesive UI with Tailwind and custom design tokens
- **Performance**: Next.js Image optimization, lazy loading, route prefetching

## 🔮 Future Enhancements

- User authentication and saved carts
- Product reviews and ratings
- Wishlist functionality
- Order history tracking
- Email confirmations

## 👨‍💻 Author

**Dylan Giddens**
- GitHub: [@yourusername](https://github.com/yourusername)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

## 📄 License

This project is for portfolio demonstration purposes.

---

**Note**: This is a fictional store built for educational purposes. Product data comes from Shopify's demo API, and payments use Stripe's test mode.