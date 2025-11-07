import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface AuthStoreType {
  activeUser: {
    credits: number;
    isAuthenticatied: boolean;
    username: string | null;
  };
  setAuthenticatied: (auth: boolean) => void;
  setProfile: (value: string) => void;
  setAvailableCredits: (value: number) => void;
  // TODO: Update credits func
  getAuthentication: () => boolean;
  clearSession: () => void;
}

export const useSessionStore = create<AuthStoreType>()(
  persist(
    devtools(
      (set) => ({
        activeUser: {
          credits: 0,
          isAuthenticatied: false,
          username: null,
        },
        setAuthenticatied: (auth: boolean) =>
          set(
            (state) => ({
              activeUser: { ...state.activeUser, isAuthenticatied: auth },
            }),
            undefined,
            "session/setAuthenticatied"
          ),
        setProfile: (value: string) =>
          set(
            (state) => ({
              activeUser: { ...state.activeUser, username: value },
            }),
            undefined,
            "session/setProfile"
          ),
        setAvailableCredits: (value: number) =>
          set(
            (state) => ({
              activeUser: { ...state.activeUser, credits: value },
            }),
            undefined,
            "session/setAvailableCredits"
          ),
        getAuthentication: () => {
          if (typeof window === "undefined") return false;
          // read from sessionStorage directly
          const stored = sessionStorage.getItem("session");

          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              return parsed.state?.activeUser?.isAuthenticatied;
            } catch {
              return false;
            }
          }
          return false;
        },
        clearSession: () =>
          set(
            () => ({
              activeUser: {
                credits: 0,
                isAuthenticatied: false,
                username: null,
              },
            }),
            undefined,
            "session/clearSession"
          ),
      }),
      { name: "SessionStore" }
    ),
    {
      name: "session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
