import { createBrowserRouter } from "react-router";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./screens/Onboarding";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { PhoneVerification } from "./screens/PhoneVerification";
import { OTPVerification } from "./screens/OTPVerification";
import { MainApp } from "./screens/MainApp";
import { PropertyDetails } from "./screens/PropertyDetails";
import { AgentProfile } from "./screens/AgentProfile";
import { AddProperty } from "./screens/AddProperty";
import { EditProfile } from "./screens/EditProfile";
import { AgentPropertiesScreen } from "./screens/AgentPropertiesScreen";
import { AgentAnalyticsScreen } from "./screens/AgentAnalyticsScreen";
import { AdminDashboardScreen } from "./screens/AdminDashboardScreen";
import { AdminUsersScreen } from "./screens/AdminUsersScreen";
import { AdminPropertiesScreen } from "./screens/AdminPropertiesScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/phone-verification",
    Component: PhoneVerification,
  },
  {
    path: "/otp-verification",
    Component: OTPVerification,
  },
  {
    path: "/app",
    Component: MainApp,
  },
  {
    path: "/property/:id",
    Component: PropertyDetails,
  },
  {
    path: "/agent/:id",
    Component: AgentProfile,
  },
  {
    path: "/add-property",
    Component: AddProperty,
  },
  {
    path: "/edit-profile",
    Component: EditProfile,
  },
  {
    path: "/agent/properties",
    Component: AgentPropertiesScreen,
  },
  {
    path: "/agent/analytics",
    Component: AgentAnalyticsScreen,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboardScreen,
  },
  {
    path: "/admin/users",
    Component: AdminUsersScreen,
  },
  {
    path: "/admin/properties",
    Component: AdminPropertiesScreen,
  },
]);
