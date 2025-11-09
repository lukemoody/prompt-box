"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/stores/session-store";

export const PublicHeader = ({
  hideElements = false,
  logoReduced = false,
}: {
  hideElements?: boolean;
  logoReduced?: boolean;
}) => {
  const isAuthenticatied = useSessionStore(
    (state) => state.activeUser.isAuthenticatied
  );

  return (
    <header
      data-testid="public-header"
      className={cn(
        "fixed top-0 left-0 right-0 z-10 flex items-center justify-between max-w-[1408px] w-full mx-auto py-5 md:py-2 px-4 lg:p-6",
        "after:absolute after:-z-1 after:top-0 after:left-0 after:w-full after:h-full",
        "after:bg-white/30 after:lg:bg-transparent after:blur-sm",
        hideElements && "max-w-full py-5 xl:py-8! px-5 xl:px-10! h-auto"
      )}
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Sourceful"
          width={logoReduced ? 128 : 166}
          height={28}
        />
      </Link>
      {!hideElements && (
        <Button asChild variant="outline">
          {isAuthenticatied ? (
            <Link href="/dashboard">Go to dashboard</Link>
          ) : (
            <Link href="/login">Login or signup</Link>
          )}
        </Button>
      )}
    </header>
  );
};
