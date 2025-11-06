"use client";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authentication-store";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const setAuthenticatied = useAuthStore((state) => state.setAuthenticatied);

  // Send users to dashboard via mocked auth flow
  const handleLogin = () => {
    setAuthenticatied(true);
    router.push("/dashboard");
  };

  return (
    <>
      <Header hideElements={true} logoReduced={true} />
      <div
        data-testid="login-page"
        className="h-screen w-full flex items-center justify-center px-5"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-8 rounded-4xl overflow-hidden max-w-[864px] w-full p-10 md:p-32 lg:py-48 bg-background">
          <h1 className="text-[26px] md:text-3xl font-medium text-foreground">
            Log in or sign up in seconds
          </h1>
          <Button variant="outline" onClick={() => handleLogin()}>
            Mock login
          </Button>
        </div>
      </div>
    </>
  );
}
