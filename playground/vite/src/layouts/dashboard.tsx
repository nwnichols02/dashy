import * as React from 'react';
import { Outlet } from '@tanstack/react-router';
// import { DashboardLayout } from '@toolpad/core/src/DashboardLayout/DashboardLayout';
// import { PageContainer } from '@toolpad/core';
import { DashboardLayout, PageContainer } from '@toolpad/core';

export default function Layout() {
  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
