import { ReactNode } from "react";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="p-10 border-2  overflow-auto  w-full">{children}</div>
    </div>
  );
}
