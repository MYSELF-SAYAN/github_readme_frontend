import { create } from "zustand";
import { useAuth } from "@clerk/nextjs";
type Store = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
};
const { userId } = useAuth();
export const useStore = create<Store>()((set) => ({
  userId: userId ?? null,
  setUserId: (userId) => set(() => ({ userId })),
}));
