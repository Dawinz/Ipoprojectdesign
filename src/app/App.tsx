import { RouterProvider } from 'react-router';
import { router } from './routes';
import { MobileWrapper } from './components/MobileWrapper';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <MobileWrapper>
        <RouterProvider router={router} />
      </MobileWrapper>
    </AuthProvider>
  );
}