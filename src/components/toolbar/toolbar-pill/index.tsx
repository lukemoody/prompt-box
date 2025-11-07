"use client";
import Link from "next/link";
import {
  Bell,
  CalendarCog,
  Coins,
  Heart,
  MessageCircleQuestionMark,
  History,
  CreditCard,
  Tag,
} from "lucide-react";
import { useSessionStore } from "@/stores/session-store";
import { useIsMobile } from "@/hooks/use-mobile";
import { ToolbarPopover } from "@/components/toolbar/toolbar-popover";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { LogoutButton } from "@/components/auth/logout-button";

// TODO: Need mobile state for this. Will be different so maybe seperate component?

export const ToolbarPill = () => {
  const isMobile = useIsMobile();
  const { activeUser } = useSessionStore();
  const { credits, email, username } = activeUser;

  if (isMobile) return false;

  return (
    <div
      data-testid="toolbar-pill"
      className="fixed top-6 right-8 flex items-center justify-between py-2 px-4 z-20 w-[200px] bg-background/80 rounded-full"
    >
      <ToolbarPopover
        trigger={<Bell />}
        triggerClassName="flex items-center justify-center rounded-full w-[40px] h-[40px]"
      >
        <Card className="border-transparent shadow-none p-0">
          <CardHeader className="px-0 pb-2! border-b border-b-gray-200">
            <CardTitle className="flex items-center justify-between text-[23px]">
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="text-xs font-regular tracking-normal">
              You don&apos;t have any notifications yet.
            </div>
            <Link href="#" className="text-xs text-blue-700">
              See all notifications
            </Link>
          </CardContent>
        </Card>
      </ToolbarPopover>
      <ToolbarPopover
        trigger={
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{credits}</span>
            <Coins />
          </div>
        }
        triggerClassName="flex items-center justify-center rounded-full w-auto h-[40px] px-3"
      >
        <Card className="border-transparent shadow-none p-0">
          <CardHeader className="px-0 pb-2! border-b border-b-gray-200">
            <CardTitle className="flex items-center justify-between text-[23px]">
              Your credit usage
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{credits}</span>
                <Coins />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="flex items-start justify-start gap-3">
              <Heart />
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Bonus Credits</div>
                  <div className="text-xs text-ui-grey font-regular tracking-normal">
                    +{credits} credits, 9 days ago
                  </div>
                </div>
                <Link href="#" className="text-xs text-blue-700">
                  See all credit history
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full grid grid-cols-2 gap-8 px-0 pt-4! border-t border-t-gray-200">
            <Button variant="secondary" size="sm">
              Buy credits
            </Button>
            <Button variant="secondary" size="sm">
              Upgrade account
            </Button>
          </CardFooter>
        </Card>
      </ToolbarPopover>
      <ToolbarPopover
        trigger={username ? username[0] : <Spinner />}
        triggerClassName="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-ui-blue"
      >
        <Card className="border-transparent shadow-none p-0">
          <CardHeader className="px-0 pb-2! border-b border-b-gray-200">
            <CardTitle className="flex items-center justify-start gap-4">
              {/* Hi {username} 👋 */}
              <div className="flex items-center justify-center rounded-full w-[64px] h-[64px] bg-ui-blue">
                {username ? username[0] : <Spinner />}
              </div>
              <div>
                <div className="text-2xl font-medium">{username}</div>
                <div className="text-sm text-ui-grey font-regular tracking-normal">
                  {email}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Button variant="ghost" className="w-full">
              <CalendarCog />
              Manage account
            </Button>
            <Button variant="ghost" className="w-full">
              <Tag />
              Pricing
            </Button>
            <Button variant="ghost" className="w-full">
              <CreditCard />
              Billing
            </Button>
            <Button variant="ghost" className="w-full">
              <History />
              Credit history
            </Button>
            <Button variant="ghost" className="w-full">
              <MessageCircleQuestionMark />
              Help center
            </Button>
          </CardContent>
          <CardFooter className="w-full grid grid-cols-2 gap-8 px-0 pt-4! border-t border-t-gray-200">
            <LogoutButton />
          </CardFooter>
        </Card>
      </ToolbarPopover>
    </div>
  );
};
