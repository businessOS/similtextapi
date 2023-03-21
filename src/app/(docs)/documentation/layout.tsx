import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return <section className="pt-24">{children}</section>
}