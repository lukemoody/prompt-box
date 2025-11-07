import Link from "next/link";

interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <Link
      data-testid="sidebar-item"
      href="#"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="flex items-center justify-center rounded-full w-10 h-10 transition hover:bg-[#dcdcdc]">
        {icon}
      </div>
      <span className="text-xs font-regular">{title}</span>
    </Link>
  );
};
