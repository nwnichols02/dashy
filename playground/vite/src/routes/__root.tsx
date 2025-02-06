import * as React from 'react'
import { Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import { Navigation, Branding } from '@toolpad/core/AppProvider';

export const Route = createRootRouteWithContext<{ navigation: Navigation, branding: Branding }>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <Outlet />
    )
}
