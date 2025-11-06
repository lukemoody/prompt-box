import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { NavItem } from "@/data/navigationList";

export const Sidebar = ({ navigation }: { navigation: Array<NavItem> }) => {
  return (
    <div data-testid="sidebar" className="fixed top-0 -left-3 z-10 p-6 h-full">
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
