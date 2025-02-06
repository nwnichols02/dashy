import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router';
import { TanStackRouterAppProvider } from '@toolpad/core/tanstack-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import { AppProvider } from '@toolpad/core/AppProvider';
import { BRANDING, NAVIGATION, router } from './main';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      router={router}
    >
      {/* <Outlet /> */}
      {children}

    </AppProvider>
  );
}
