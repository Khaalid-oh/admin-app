import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/app/[dashboard]/components/sidebar/SideBar";

export const metadata: Metadata = {
  title: "1M Circle | Dashboard",
  description: "Exclusive Job Seeker Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-white">
      <Sidebar />
      {children}
    </div>
  );
}
