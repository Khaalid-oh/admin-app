import type { Metadata } from "next";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: "1M Circle | Dashboard",
  description: "Exclusive Job Seeker Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex w-full bg-white">{children}</div>;
}
