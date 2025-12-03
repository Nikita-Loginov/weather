import { createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { RootLayout as RootLayoutMain } from "../layouts/root-layout/root-layout";

const RootLayout = () => (
  <>
    <RootLayoutMain />

    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
