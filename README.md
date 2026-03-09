# IPO Real Estate - Tanzanian Property Mobile App

![IPO Real Estate](https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop)

A comprehensive, mobile-first real estate application designed specifically for the Tanzanian property market. Built with React, TypeScript, and Tailwind CSS, this app provides a complete property browsing, listing, and management solution with role-based access control.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [User Roles](#user-roles)
- [Key Functionalities](#key-functionalities)
- [Design System](#design-system)
- [Routing](#routing)
- [Authentication](#authentication)
- [Components](#components)
- [Data Management](#data-management)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## 🎯 Overview

IPO Real Estate is a mobile-first web application that connects property buyers, sellers, and real estate agents in Tanzania. The app features a beautiful, intuitive interface optimized for iPhone 14 dimensions and includes realistic Tanzanian property data from major cities including Dar es Salaam, Arusha, Mwanza, and more.

### Key Highlights

- **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- **Role-Based Access**: Three distinct user roles (Customer, Agent, Admin) with specialized features
- **Rich Property Data**: Realistic Tanzanian property listings with local currency (TZS) and locations
- **Complete User Flow**: From onboarding to property transactions
- **Professional UI**: Modern design with IPO brand colors and clean aesthetics

## ✨ Features

### For All Users
- 🔐 Secure authentication with phone/OTP verification
- 🏠 Browse properties with advanced search and filters
- 💾 Save favorite properties for later viewing
- 💬 Real-time messaging with agents
- 🔔 Push notifications for updates
- 🌍 Location-based property search
- 📱 Progressive Web App (PWA) ready

### For Customers
- 🔍 Advanced property search with multiple filters
- ❤️ Wishlist management
- 📊 Property comparison tools
- 💳 Payment methods management
- 📜 Search history tracking
- 🎫 Inquiry management

### For Agents
- ➕ Add and manage property listings
- 📊 Analytics dashboard with performance metrics
- 💼 Property portfolio management
- 📅 Schedule management for viewings
- 💰 Earnings tracking
- ⭐ Reviews and ratings
- 📈 View statistics (impressions, inquiries, conversions)

### For Administrators
- 👥 User management system
- 🏘️ Property approval and moderation
- ✅ Agent verification process
- 📊 System-wide analytics and reporting
- 🛡️ System health monitoring
- 📝 Audit logs and compliance
- 🔧 System settings and configuration

## 🛠 Technology Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe development
- **React Router 7.1.3** - Client-side routing
- **Tailwind CSS 4.0** - Utility-first CSS framework

### UI Components & Icons
- **Lucide React** - Professional icon library
- **Custom Icon Components** - Branded icons for property features

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **PostCSS** - CSS processing

### Design Specifications
- **Target Device**: iPhone 14 (390px width)
- **Color Scheme**: 
  - Primary Gradient: `#6BCB77` (green) to `#2F6BFF` (blue)
  - Background: `#F6F8FB` (light gray)
  - Cards: `#FFFFFF` (white)
  - Text: `#1F2937` (dark gray)

## 📁 Project Structure

```
ipo-real-estate/
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── icons/
│   │   │   │   └── CustomIcons.tsx  # Custom icon components
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── PropertyCard.tsx     # Property listing card
│   │   │   ├── FilterSheet.tsx      # Advanced filters
│   │   │   ├── PropertyFilters.tsx  # Quick filters
│   │   │   └── SearchBar.tsx        # Search input component
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.tsx      # Authentication state management
│   │   │
│   │   ├── data/
│   │   │   └── mockData.ts          # Tanzanian property mock data
│   │   │
│   │   ├── screens/
│   │   │   ├── onboarding/
│   │   │   │   ├── SplashScreen.tsx
│   │   │   │   ├── OnboardingScreen.tsx
│   │   │   │   ├── LoginScreen.tsx
│   │   │   │   ├── SignupScreen.tsx
│   │   │   │   ├── PhoneVerificationScreen.tsx
│   │   │   │   └── OTPVerificationScreen.tsx
│   │   │   │
│   │   │   ├── PropertyDetailScreen.tsx
│   │   │   ├── AgentProfileScreen.tsx
│   │   │   ├── EditProfileScreen.tsx
│   │   │   ├── AddPropertyScreen.tsx
│   │   │   │
│   │   │   ├── agent/
│   │   │   │   ├── AgentPropertiesScreen.tsx
│   │   │   │   └── AgentAnalyticsScreen.tsx
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── AdminDashboardScreen.tsx
│   │   │       ├── AdminUsersScreen.tsx
│   │   │       └── AdminPropertiesScreen.tsx
│   │   │
│   │   ├── tabs/
│   │   │   ├── HomeTab.tsx          # Main property feed
│   │   │   ├── SearchTab.tsx        # Advanced search
│   │   │   ├── SavedTab.tsx         # Saved properties
│   │   │   ├── MessagesTab.tsx      # Messaging
│   │   │   └── ProfileTab.tsx       # User profile & settings
│   │   │
│   │   ├── App.tsx                  # App entry point
│   │   └── routes.tsx               # React Router configuration
│   │
│   ├── styles/
│   │   ├── index.css                # Global styles & Tailwind imports
│   │   ├── fonts.css                # Font imports
│   │   └── theme.css                # Design tokens & theme variables
│   │
│   └── main.tsx                     # React DOM entry point
│
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ipo-real-estate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 👥 User Roles

The application supports three distinct user roles, each with specialized features and permissions:

### 1. Customer Role 🛍️

**Access Level**: Standard user

**Primary Features**:
- Browse and search properties
- Save favorite listings
- Contact agents via messaging
- View property details and agent profiles
- Track inquiry history
- Manage notifications and preferences

**Dashboard Items**:
- Edit Profile
- Saved Properties (with count badge)
- My Inquiries (with count badge)
- Search History
- Notifications
- Payment Methods
- Settings
- Help & Support

**Use Case**: End users looking to buy, rent, or invest in properties

---

### 2. Agent Role 🏢

**Access Level**: Business user with listing privileges

**Primary Features**:
- All customer features
- Add and edit property listings
- Analytics dashboard with performance metrics
- Property portfolio management
- Viewing schedule management
- Earnings and commission tracking
- Reviews and ratings management

**Dashboard Items**:
- Edit Profile
- My Properties (with property count)
- Add New Property (highlighted)
- Messages (with unread count)
- Analytics Dashboard
- Reviews
- Earnings
- Schedule
- Settings

**Analytics Include**:
- Total views across all properties
- Inquiry count
- Properties sold
- Total earnings in TZS
- Top performing properties
- Recent activity feed

**Use Case**: Real estate agents and agencies listing and managing properties

---

### 3. Admin Role ⚡

**Access Level**: System administrator

**Primary Features**:
- Full system oversight
- User management (create, edit, suspend, delete)
- Property moderation and approval
- Agent verification process
- System-wide analytics and reporting
- Platform health monitoring
- Audit logs and compliance tools

**Dashboard Items**:
- Dashboard Overview
- User Management
- Property Management
- Agent Verification (with pending count)
- Reports
- System Analytics
- System Settings
- Audit Logs

**Admin Analytics**:
- Total users (1,247)
- Active agents (124)
- Total properties (856)
- Platform revenue (TZS 2.4B)
- System health metrics
- Database status
- API performance
- Storage usage

**Use Case**: Platform administrators managing the entire system

---

### Role Switching

Users can switch between roles using the **Role Switcher Modal**:

1. Click "Switch Role" button in the Profile tab
2. Select desired role from the modal
3. App immediately updates to show role-specific features
4. Profile badge updates to reflect current role

**Design Features**:
- Active role highlighted with blue gradient background
- Inactive roles shown with white cards
- Each role has distinct icon (User, Home, Shield)
- Smooth transitions without page reload
- Visual confirmation with checkmark icon

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-blue: #2F6BFF;
--primary-green: #6BCB77;

/* Gradients */
--gradient-primary: linear-gradient(to bottom right, #2F6BFF, #4B7FFF, #6BCB77);
--gradient-blue: linear-gradient(135deg, #3B82F6, #2563EB);
--gradient-purple: linear-gradient(135deg, #A855F7, #9333EA);
--gradient-gray: linear-gradient(135deg, #374151, #1F2937);

/* Backgrounds */
--bg-primary: #F6F8FB;
--bg-card: #FFFFFF;

/* Text */
--text-primary: #111827;
--text-secondary: #6B7280;
--text-muted: #9CA3AF;

/* Status Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### Typography

- **Headings**: Bold, using system font stack
- **Body**: Regular weight, 14px base size
- **Captions**: 12px for secondary information
- **Font Stack**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Spacing

- **Base Unit**: 4px
- **Common Spacing**: 4px, 8px, 12px, 16px, 20px, 24px, 32px
- **Section Padding**: 20px (5 in Tailwind)
- **Card Padding**: 16px (4 in Tailwind)

### Border Radius

- **Small**: 8px (rounded-lg)
- **Medium**: 12px (rounded-xl)
- **Large**: 16px (rounded-2xl)
- **Extra Large**: 24px (rounded-3xl)

### Shadows

```css
/* Card Shadow */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Elevated Shadow */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Large Shadow */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
```

### Icons

All icons use **Lucide React** for consistency:
- Standard size: 20px (w-5 h-5)
- Small size: 16px (w-4 h-4)
- Large size: 24px (w-6 h-6)

Custom property icons located in `/src/app/components/icons/CustomIcons.tsx`

## 🗺️ Routing

The app uses **React Router v7** in Data Mode for optimal performance and type safety.

### Route Structure

```typescript
// Main Routes
/                           // Splash Screen
/onboarding                 // Onboarding slides
/login                      // Login screen
/signup                     // Signup screen
/phone-verification         // Phone verification
/otp-verification           // OTP input

// Main App (with bottom navigation)
/app                        // Home tab (property feed)
/app/search                 // Search tab
/app/saved                  // Saved properties
/app/messages               // Messages
/app/profile                // Profile & settings

// Property & Agent
/property/:id               // Property details
/agent/:id                  // Agent profile
/edit-profile               // Edit user profile
/add-property               // Add new listing (agents only)

// Agent Routes
/agent/properties           // Manage listings
/agent/analytics            // Performance dashboard

// Admin Routes
/admin/dashboard            // Admin overview
/admin/users                // User management
/admin/properties           // Property moderation
```

### Route Configuration

Routes are defined in `/src/app/routes.tsx`:

```typescript
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  // Onboarding flow
  { path: "/", element: <SplashScreen /> },
  { path: "/onboarding", element: <OnboardingScreen /> },
  // ... more routes
  
  // Main app with bottom nav
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeTab /> },
      { path: "search", element: <SearchTab /> },
      // ... nested routes
    ]
  }
]);
```

### Protected Routes

Authentication is handled by the `AuthContext`. Screens that require authentication should check the `user` object:

```typescript
const { user, role } = useAuth();

if (!user) {
  navigate('/login');
  return null;
}
```

## 🔐 Authentication

### Authentication Context

Located in `/src/app/context/AuthContext.tsx`

**Features**:
- User state management
- Role management (customer/agent/admin)
- Login/logout functionality
- Persistent authentication (localStorage)

**Usage**:

```typescript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, role, login, logout, setRole } = useAuth();
  
  // Check authentication
  if (!user) return <LoginPrompt />;
  
  // Check role
  if (role === 'agent') {
    // Show agent features
  }
}
```

### Authentication Flow

1. **Splash Screen** → Auto-navigates after 2 seconds
2. **Onboarding** → 3 slides explaining app features
3. **Login/Signup** → User chooses authentication method
4. **Phone Verification** → Enter phone number
5. **OTP Verification** → Enter 6-digit code
6. **Main App** → Access granted to home screen

### Mock Users

The app includes pre-configured users for testing:

```typescript
// Customer
Email: john.doe@example.com
Password: password123

// Agent
Email: sarah.agent@example.com
Password: agent123

// Admin (can be set via role switcher)
```

## 🧩 Components

### Core Components

#### PropertyCard
**Location**: `/src/app/components/PropertyCard.tsx`

Displays property information in a card format.

**Props**:
```typescript
interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  type: string;
  featured?: boolean;
  verified?: boolean;
}
```

**Features**:
- Property image with fallback
- Save/favorite button
- Featured and verified badges
- Property specs (beds, baths, area)
- Price in TZS
- Click to view details

---

#### SearchBar
**Location**: `/src/app/components/SearchBar.tsx`

Search input with suggestions and history.

**Features**:
- Real-time search
- Search suggestions
- Recent searches
- Clear search
- Voice search ready

---

#### FilterSheet
**Location**: `/src/app/components/FilterSheet.tsx`

Advanced filtering modal.

**Filter Options**:
- Property type (House, Apartment, Villa, Land, Commercial)
- Price range (min/max in TZS)
- Bedrooms (1-5+)
- Bathrooms (1-4+)
- Area range (sq. meters)
- Location/City
- Amenities (Pool, Gym, Parking, Security, Garden)
- Property condition (New, Good, Fair, Needs Renovation)

---

#### CustomIcons
**Location**: `/src/app/components/icons/CustomIcons.tsx`

Branded icon components for property features.

**Available Icons**:
- BedIcon
- BathIcon
- AreaIcon
- LocationIcon
- HeartIcon
- StarIcon
- VerifiedIcon
- SearchIcon
- MessageIcon
- HomeIcon
- UserIcon
- SettingsIcon

### Layout Components

#### Bottom Navigation
5-tab navigation bar with active state indicators:
1. **Home** - Property feed
2. **Search** - Advanced search
3. **Saved** - Saved properties
4. **Messages** - Chat with agents
5. **Profile** - User settings

#### Header Components
- Gradient headers with back navigation
- Title and subtitle
- Action buttons (add, filter, etc.)
- Notification badges

## 📊 Data Management

### Mock Data Structure

**Location**: `/src/app/data/mockData.ts`

#### Properties

```typescript
interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  price: string;
  priceNumeric: number;
  beds: number;
  baths: number;
  area: number;
  type: 'house' | 'apartment' | 'villa' | 'land' | 'commercial';
  images: string[];
  description: string;
  features: string[];
  agent: {
    id: string;
    name: string;
    photo: string;
    phone: string;
    rating: number;
    verified: boolean;
  };
  featured?: boolean;
  verified?: boolean;
  listed: string;
  status: 'sale' | 'rent';
  coordinates?: { lat: number; lng: number };
}
```

#### Tanzanian Locations

Properties include realistic locations:
- **Dar es Salaam**: Masaki, Oyster Bay, Mikocheni, Msasani, Upanga
- **Arusha**: City Center, Njiro, Kijenge, Ngaramtoni
- **Mwanza**: Isamilo, Nyamagana, Buzuruga
- **Dodoma**: Hombolo, Kikuyu, Makole
- **Zanzibar**: Stone Town, Nungwi, Paje

#### Users

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  verified: boolean;
  joinDate: string;
  role?: 'customer' | 'agent' | 'admin';
  // Agent-specific
  properties?: number;
  rating?: number;
  bio?: string;
  specialties?: string[];
  languages?: string[];
}
```

### Data Fetching

Currently using mock data with simulated delays:

```typescript
// Simulated API call
const fetchProperties = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(properties), 500);
  });
};
```

**Future**: Replace with real API calls to backend service.

## 🔄 State Management

### Local State
- **useState**: Component-level state
- **useEffect**: Side effects and lifecycle

### Context API
- **AuthContext**: Global authentication state
- **Future**: Add PropertyContext, MessageContext

### Routing State
- **useNavigate**: Programmatic navigation
- **useParams**: Route parameters
- **useLocation**: Current route information

## 🎯 Key Functionalities

### Property Search & Filtering

**Location**: SearchTab.tsx, FilterSheet.tsx

1. **Quick Filters**: Tabs for All, House, Apartment, Villa, Land
2. **Advanced Filters**: 
   - Price range with TZS currency
   - Property specifications (beds, baths, area)
   - Location selection
   - Amenities checklist
   - Property condition

3. **Search Features**:
   - Text search by name or location
   - Sort by: Newest, Price (Low-High), Price (High-Low), Most Popular
   - Filter combinations
   - Clear all filters

### Property Details

**Location**: PropertyDetailScreen.tsx

**Sections**:
1. Image gallery with swipeable carousel
2. Property overview (price, location, specs)
3. Description
4. Features and amenities
5. Location map (mock)
6. Agent information card
7. Similar properties
8. Action buttons (Save, Share, Contact)

### Messaging System

**Location**: MessagesTab.tsx

**Features**:
- Chat list with agent profiles
- Unread message badges
- Last message preview
- Timestamp display
- Search conversations
- Mock real-time updates

### Agent Management

**Location**: agent/AgentPropertiesScreen.tsx, agent/AgentAnalyticsScreen.tsx

**Property Management**:
- List all agent properties
- Edit, view, delete actions
- Status indicators (Active, Pending, Sold)
- Quick stats

**Analytics Dashboard**:
- Performance metrics
- View statistics
- Inquiry tracking
- Top performing properties
- Recent activity feed

### Admin Panel

**Location**: admin/*Screen.tsx

**User Management**:
- User list with roles
- Search and filter users
- User statistics
- Actions: View, Edit, Suspend, Delete

**Property Moderation**:
- Review pending properties
- Approve or reject listings
- Flag inappropriate content
- Property statistics

**System Dashboard**:
- Platform overview
- Quick actions with badges
- System health monitoring
- Recent activity

## 🚀 Future Enhancements

### Phase 1: Backend Integration
- [ ] Connect to real API
- [ ] Implement actual authentication (JWT)
- [ ] Real-time messaging with WebSocket
- [ ] Image upload for properties
- [ ] Payment gateway integration (Mpesa, Tigopesa, Airtel Money)

### Phase 2: Enhanced Features
- [ ] Google Maps integration
- [ ] Virtual property tours (360° photos)
- [ ] Property comparison tool
- [ ] Advanced analytics with charts
- [ ] Email notifications
- [ ] SMS notifications for OTP

### Phase 3: Social Features
- [ ] User reviews and ratings
- [ ] Share properties on social media
- [ ] Refer a friend program
- [ ] Agent certification badges
- [ ] Community forums

### Phase 4: Advanced Tools
- [ ] Mortgage calculator
- [ ] Property valuation tool
- [ ] Market trends and insights
- [ ] Investment ROI calculator
- [ ] Legal document templates

### Phase 5: Platform Expansion
- [ ] iOS native app
- [ ] Android native app
- [ ] Desktop version
- [ ] API for third-party integrations
- [ ] White-label solution for agencies

## 🧪 Testing

### Manual Testing Checklist

- [ ] All routes navigate correctly
- [ ] Role switching works smoothly
- [ ] Property search and filters function
- [ ] Save/unsave properties
- [ ] Agent profile displays correctly
- [ ] Admin dashboard shows all features
- [ ] Forms validate input
- [ ] Images load with fallbacks
- [ ] Responsive on mobile devices
- [ ] No console errors

### Future Automated Testing
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright
- Performance testing with Lighthouse

## 🤝 Contributing

This is a demonstration project. For production use, consider:

1. **Security**: Implement proper authentication and authorization
2. **Performance**: Add lazy loading, code splitting, image optimization
3. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
4. **SEO**: Meta tags, structured data, sitemap
5. **Analytics**: Google Analytics, Mixpanel, or similar
6. **Error Handling**: Error boundaries, fallback UI, logging
7. **Internationalization**: Support for Swahili and English

## 📄 License

This project is a demonstration application. For production use, ensure you have appropriate licenses for all dependencies and assets.

## 🙏 Credits

- **Design**: IPO Real Estate Brand Guidelines
- **Icons**: Lucide React (https://lucide.dev)
- **Images**: Unsplash (placeholder images)
- **Framework**: React + Vite
- **Styling**: Tailwind CSS

---

## 📞 Support

For questions or issues, please refer to the documentation or contact the development team.

**Built with ❤️ for the Tanzanian real estate market**

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Target Platform**: Mobile Web (Progressive Web App)  
**Optimized For**: iPhone 14 (390px width)
