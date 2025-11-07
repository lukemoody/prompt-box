"use client";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { NavItem } from "@/config/navigationList";

export const PlatformSidebar = ({
  navigation,
}: {
  navigation: Array<NavItem>;
}) => {
  const isMobile = useIsMobile();

  if (isMobile) return false;

  return (
    <div
      data-testid="platform-sidebar"
      className="fixed top-0 -left-3 z-10 p-6 h-full"
    >
      <Link href="/">
        <Image
          src="/logo-monogram.svg"
          alt="Sourceful"
          width={32}
          height={32}
          className="mx-auto mb-6"
        />
      </Link>
      {navigation && (
        <div className="space-y-6">
          {navigation.map((data, index) => (
            <SidebarItem key={index} title={data.title} icon={data.icon} />
          ))}
        </div>
      )}
    </div>
  );
};
