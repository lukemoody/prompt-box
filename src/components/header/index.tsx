"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/stores/session-store";

export const Header = ({
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
      data-testid="header"
      className={cn(
        "absolute top-0 left-0 right-0 z-10 flex items-center justify-between max-w-[1408px] w-full mx-auto py-5 md:py-2 px-5 md:px-0",
        hideElements && "max-w-full py-8! px-10! h-auto"
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

// 128 x 28
