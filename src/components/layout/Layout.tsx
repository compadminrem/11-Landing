import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function Layout({ children }: { children: ReactNode }) { return <div id="top" className="min-h-screen overflow-hidden"><Header /><main>{children}</main><Footer /></div>; }
