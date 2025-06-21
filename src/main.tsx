import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "./theme/ThemeContext"; // ajuste caminho conforme seu projeto

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GlobalStyle />
      <App>
        <AppRoutes />
      </App>
    </ThemeProvider>
  </QueryClientProvider>
);
