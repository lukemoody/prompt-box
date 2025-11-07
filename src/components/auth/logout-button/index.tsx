import { redirect } from "next/navigation";
import { useSessionStore } from "@/stores/session-store";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  const clearSession = useSessionStore((state) => state.clearSession);

  const handleLogout = () => {
    try {
      clearSession();
      useSessionStore.persist.clearStorage();
    } catch (error) {
      console.error(error);
    } finally {
      redirect("/");
    }
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleLogout}>
      Log out
    </Button>
  );
};
