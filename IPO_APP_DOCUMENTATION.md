# IPO Real Estate Mobile App

A comprehensive Tanzanian real estate marketplace mobile application built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Onboarding & Authentication
- Splash screen with animated logo
- Multi-step onboarding flow
- Login with email and password
- Sign up with user type selection (Property Seeker / Agent)
- Phone number verification
- OTP verification

### Home Screen
- Search bar for properties
- Quick filters (Buy, Rent, Land, Apartments, Short Stay, Commercial)
- Featured properties showcase
- Popular locations in Tanzania (Dar es Salaam, Zanzibar, Arusha, Dodoma, Mwanza, Moshi)
- Recently added listings
- Top Madalali (agents) carousel

### Search & Discovery
- Advanced search functionality
- Comprehensive filters:
  - Location
  - Property type
  - Listing type (Buy/Rent)
  - Price range
  - Bedrooms & bathrooms
  - Land size
- Sort options (Newest, Price, Most viewed)
- List and Map view toggle
- Real-time filtering

### Property Details
- Image gallery with navigation
- Complete property information
- Price display with type badge
- Key details (Bedrooms, Bathrooms, Size, Parking)
- Property description
- Amenities list
- Furnished status
- Agent contact card
- Direct Call and WhatsApp buttons
- Location map preview
- Save to favorites
- Share property

### Agent Profiles
- Agent photo with verification badge
- Rating display
- Contact information (Phone, Email, WhatsApp)
- Agency details
- Active property listings
- Direct contact actions

### Messages
- Conversation list
- Property reference in chat
- Real-time messaging interface
- Agent profile quick access
- Message timestamps

### Saved Properties
- Grid view of saved properties
- Quick save/unsave toggle
- Empty state with call-to-action

### Profile Management
- User profile display
- Quick actions (Saved items, Add Listing)
- Menu sections:
  - My Profile
  - Saved Properties
  - My Listings
  - Messages
  - Settings
  - Help & Support
- Edit profile functionality
- Logout option

### Add Property (For Agents)
- Image upload
- Property details form
- Property type selection
- Listing type (Sale/Rent)
- Location selection
- Price input
- Amenities
- Description
- Furnished checkbox
- Publish functionality

## 🎨 Design System

### Colors
- **Primary Gradient**: #6BCB77 → #2F6BFF (Green to Blue)
- **Background**: #F6F8FB
- **Cards**: #FFFFFF
- **Accent**: #FFB020 (Orange for prices)
- **Text**: 
  - Primary: #1A1A1A
  - Secondary: #6B7280

### Components
- Rounded corners (16px for cards, 12px for buttons)
- Soft shadows
- 8pt spacing grid
- Mobile-first responsive design

## 📱 App Structure

```
/src/app
├── components/
│   ├── AgentCard.tsx
│   ├── BottomNav.tsx
│   ├── MobileWrapper.tsx
│   └── PropertyCard.tsx
├── data/
│   └── mockData.ts
├── screens/
│   ├── AddProperty.tsx
│   ├── AgentProfile.tsx
│   ├── EditProfile.tsx
│   ├── Login.tsx
│   ├── MainApp.tsx
│   ├── Onboarding.tsx
│   ├── OTPVerification.tsx
│   ├── PhoneVerification.tsx
│   ├── PropertyDetails.tsx
│   ├── Signup.tsx
│   └── Splash.tsx
├── tabs/
│   ├── HomeTab.tsx
│   ├── MessagesTab.tsx
│   ├── ProfileTab.tsx
│   ├── SavedTab.tsx
│   └── SearchTab.tsx
├── App.tsx
└── routes.tsx
```

## 🚀 Key Technologies

- **React 18** with TypeScript
- **React Router 7** for navigation
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Vite** for building

## 💡 Mock Data

The app includes comprehensive mock data:
- **6 Properties** (houses, apartments, villas, land, commercial, short-stay)
- **3 Verified Agents** with contact details
- **6 Popular Locations** across Tanzania
- **1 Sample Conversation** in messages

## 🎯 User Flows

### Property Seeker Flow
1. Onboarding → Login/Signup
2. Browse properties on Home
3. Use Search with filters
4. View property details
5. Contact agent via Call/WhatsApp
6. Save favorites
7. Message agents

### Agent/Madalali Flow
1. Sign up as Agent
2. Complete verification
3. Add property listings
4. Manage listings in profile
5. Respond to messages
6. Update profile

## 📲 Mobile Optimizations

- Maximum width container (md breakpoint)
- Safe area padding for notched devices
- Bottom navigation with 5 tabs
- Touch-friendly button sizes
- Smooth scrolling
- Fixed headers and footers
- Optimized images

## 🌐 Localization

The app is tailored for Tanzania:
- Tanzanian Shilling (TZS) currency
- Major Tanzanian cities
- Local terminology ("Madalali" for agents)
- Phone number format (+255)

## 🔄 State Management

- React hooks (useState, useEffect)
- Component-level state
- Props drilling for shared data
- Local storage ready

## 🎨 UI Features

- Gradient backgrounds
- Card-based layouts
- Icon-driven navigation
- Empty states
- Loading states ready
- Responsive images
- Smooth transitions
- Hover effects

## 📝 Future Enhancements

- Backend integration with Supabase
- Real-time messaging
- Push notifications
- Map integration (Google Maps)
- Payment gateway
- Property comparison
- Advanced analytics
- Social sharing
- In-app camera
- Document upload
- Multi-language support

## 🧪 Testing

Ready for:
- Unit testing components
- Integration testing flows
- E2E testing with Playwright
- Mobile device testing

## 🚢 Deployment

The app is production-ready and can be deployed to:
- Vercel
- Netlify
- Firebase Hosting
- AWS Amplify

---

Built with ❤️ for the Tanzanian real estate market
