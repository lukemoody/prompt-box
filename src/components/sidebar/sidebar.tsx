import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div data-testid="sidebar">
      <Link href="/">
        <Image
          src="/logo-monogram.svg"
          alt="Sourceful"
          width={32}
          height={32}
        />
      </Link>

      <div>SIDEBARD</div>
    </div>
  );
};
