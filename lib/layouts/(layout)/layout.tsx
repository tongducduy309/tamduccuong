"use client";

import { Header } from "@/lib/components/Header";


export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <div className="min-h-dvh bg-gray-50">
      <Header />
      <main className="rounded-2xl bg-white p-4 shadow-sm lg:min-h-[calc(100dvh-88px)]">
        {children}
      </main>
    </div>
  );
}
