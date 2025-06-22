// src/hooks/useSidebar.ts
import { useState } from "react";

export function useSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return {
    sidebarOpen,
    toggleSidebar,
    closeSidebar,
  };
}
