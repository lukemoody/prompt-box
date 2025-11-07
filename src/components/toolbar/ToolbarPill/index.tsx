"use client";
import Link from "next/link";
import { Bell, Coins } from "lucide-react";
import { useUserStore } from "@/stores/user-store";
import { ToolbarPopover } from "@/components/toolbar/ToolbarPopover";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ToolbarPill = () => {
  const { credits } = useUserStore();

  return (
    <div className="fixed top-6 right-8 flex items-center justify-between py-2 px-4 z-20 w-[200px] bg-background/80 rounded-full">
      <ToolbarPopover
        trigger={<Bell />}
        triggerClassName="flex items-center justify-center rounded-full w-[40px] h-[40px]"
      >
        Notifications
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
        <Card className="border-background shadow-none p-0">
          <CardHeader className="px-0 pb-2! border-b border-b-gray-100">
            <CardTitle className="flex items-center justify-between">
              Your credit usage
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{credits}</span>
                <Coins />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="text-sm font-medium">Bonus Credits</div>
            <div className="text-xs">+{credits} credits, 9 days ago</div>
            <Link href="#" className="text-xs text-blue-700">
              See all credit history
            </Link>
          </CardContent>
          <CardFooter className="flex items-center justify-between px-0 pt-4! border-t border-t-gray-100">
            <Button variant="outline" size="sm">
              Buy credits
            </Button>
            <Button variant="outline" size="sm">
              Upgrade account
            </Button>
          </CardFooter>
        </Card>
      </ToolbarPopover>
      <ToolbarPopover
        trigger={"L"}
        triggerClassName="flex items-center justify-center rounded-full w-[40px] h-[40px] bg-ui-blue"
      >
        User profile
      </ToolbarPopover>
    </div>
  );
};
