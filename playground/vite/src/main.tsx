import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import App from './App';
// import Layout from './layouts/dashboard';
// import DashboardPage from './pages';
// import OrdersPage from './pages/orders';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Navigation, Branding } from '@toolpad/core/AppProvider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { routeTree } from './routeTree.gen';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',

  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

export const BRANDING: Branding = {
  title: 'My Toolpad Core App',
};


export const router = createRouter({
  routeTree,
  context: {
    navigation: NAVIGATION,
    branding: BRANDING
  },
  defaultPendingMs: 200,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

