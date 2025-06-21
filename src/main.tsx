import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { AppRoutes } from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppRoutes />
  </QueryClientProvider>
);
