import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar/sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Dashboard | Sourceful | AI packaging design",
  description: "Design packaging your customers love by chatting with AI.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-testid="dashboard-page"
      className="h-screen w-full flex flex-row items-start justify-between p-6"
    >
      <div className="w-full md:w-1/12">
        <Sidebar />
      </div>
      <div className="w-full md:w-11/12 pt-16 lg:pt-18">{children}</div>
    </div>
  );
}
