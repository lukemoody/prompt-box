import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface ActiveUserState {
  credits: number;
  isAuthenticatied: boolean;
  username: string | null;
  email: string | null;
}

interface SessionStoreType {
  activeUser: ActiveUserState;
  setAuthenticatied: (auth: boolean) => void;
  setProfile: (value: string) => void;
  setEmailAddress: (value: string) => void;
  setAvailableCredits: (value: number) => void;
  updateCreditsBalance: (credit: number) => void;
  getAuthentication: () => boolean;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStoreType>()(
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
        setEmailAddress: (value: string) =>
          set(
            (state) => ({
              activeUser: { ...state.activeUser, email: value },
            }),
            undefined,
            "session/setEmailAddress"
          ),
        setAvailableCredits: (value: number) =>
          set(
            (state) => ({
              activeUser: { ...state.activeUser, credits: value },
            }),
            undefined,
            "session/setAvailableCredits"
          ),
        updateCreditsBalance: (credit: number) =>
          set(
            (state) => ({
              activeUser: {
                ...state.activeUser,
                credits: state.activeUser.credits - credit,
              },
            }),
            undefined,
            "session/updateCreditsBalance"
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
                email: null,
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
