import { redirect } from "next/navigation";
import { useSessionStore } from "@/stores/session-store";
import { usePromptStore } from "@/stores/prompt-store";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  const clearSession = useSessionStore((state) => state.clearSession);
  const clearPrompt = usePromptStore((state) => state.clearPrompt);

  const handleLogout = () => {
    try {
      clearSession();
      clearPrompt();
      useSessionStore.persist.clearStorage();
    } catch (error) {
      console.error(error);
    } finally {
      redirect("/");
    }
  };

  return (
    <Button variant="link" size="sm" onClick={handleLogout}>
      <LogOut />
      Log out
    </Button>
  );
};
