import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthUserType {
  credits: number;
  setCreditAmounts: (credit: number) => void;
}

export const useUserStore = create<AuthUserType>()(
  //   persist(
  devtools(
    (set) => ({
      credits: 70,
      setCreditAmounts: (credit: number) =>
        set({ credits: credit }, undefined, "user/setCreditAmounts"),
    }),
    { name: "UserStore" }
  )
  // {
  //   name: "user",
  //   storage: createJSONStorage(() => sessionStorage),
  // }
  //   )
);

// useAuthStore.persist.clearStorage();
