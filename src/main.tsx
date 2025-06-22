import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { ThemeProvider } from "./shared/theme/ThemeContext"; // ajuste caminho conforme seu projeto
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <App>
          <AppRoutes />
        </App>
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
