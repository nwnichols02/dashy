'use client';
import * as React from 'react';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { AppProvider, type AppProviderProps, Navigate, Router } from '../AppProvider/AppProvider';

// Define the Navigation and Branding types
type NavigationItem = {
    kind?: 'header';
    title: string;
    icon?: React.ReactNode;
    segment?: string;
};

type Navigation = NavigationItem[];

type Branding = {
    title: string;
};

// Extend the props interface to include navigation and branding
interface TanStackRouterAppProviderProps extends AppProviderProps {
    navigation: Navigation;
    branding: Branding;
}

function TanStackRouterAppProvider({
    navigation,
    branding,
    ...props
}: TanStackRouterAppProviderProps) {
    const router = useRouter();
    const navigate = useNavigate();
    const searchParams = router.state.location.search;
    const pathname = router.state.location.pathname;

    const navigateImpl = React.useCallback<Navigate>(
        (url) => {
            console.log('navigateImpl', url);
            navigate({ to: url });
        },
        [navigate]


    );

    const routerImpl = React.useMemo<Router>(
        () => ({
            pathname,
            searchParams: (searchParams),
            navigate: navigateImpl,
        }),
        [pathname, searchParams, navigateImpl]
    );


    return (
        <AppProvider
            router={routerImpl}
            navigation={navigation}
            branding={branding}
            {...props}
        />
    );
}

export {
    TanStackRouterAppProvider,
    /** TODO: Old usage, remove export from v0.14.0 */
    /** @deprecated Import `ReactRouterAppProvider` instead. */
    TanStackRouterAppProvider as AppProvider,
};
