import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "../routes/routeTree.gen";

import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "@/features/theme/ui/theme-provider/theme-provider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const AppProvider = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  );
};
