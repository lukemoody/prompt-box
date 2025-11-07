import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface AuthStoreType {
  isAuthenticatied: boolean;
  setAuthenticatied: (auth: boolean) => void;
  getAuthentication: () => boolean;
}

export const useAuthStore = create<AuthStoreType>()(
  persist(
    devtools(
      (set) => ({
        isAuthenticatied: false,
        setAuthenticatied: (auth: boolean) =>
          set({ isAuthenticatied: auth }, undefined, "auth/setAuthenticatied"),
        getAuthentication: () => {
          if (typeof window === "undefined") return false;
          // read from sessionStorage directly
          const stored = sessionStorage.getItem("session");
          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              return parsed.state?.isAuthenticated ?? false;
            } catch {
              return false;
            }
          }
        },
      }),
      { name: "AuthStore" }
    ),
    {
      name: "session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// useAuthStore.persist.clearStorage();
