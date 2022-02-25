import { ReactNode } from "react";
import { ToastProvider } from "./toast";

export function AppProvider({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
