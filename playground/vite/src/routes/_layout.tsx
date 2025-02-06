import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DashboardLayout, PageContainer } from '@toolpad/core';
import App from '../App';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <App>
      <DashboardLayout>
        <PageContainer>

          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </App>
  )
}
