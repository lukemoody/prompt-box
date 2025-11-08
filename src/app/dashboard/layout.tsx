import type { Metadata } from "next";
import { PlatformSidebar } from "@/components/sidebar/platform-sidebar";
import { ToolbarPill } from "@/components/toolbar/toolbar-pill";
import { navigationData } from "@/config/navigationList";

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
    <>
      <ToolbarPill />
      <div
        data-testid="dashboard-page"
        className="h-screen w-full flex flex-row items-start justify-between px-4 lg:p-6"
      >
        <PlatformSidebar navigation={navigationData} />
        <div className="w-full pt-16 lg:pt-18">{children}</div>
      </div>
    </>
  );
}
