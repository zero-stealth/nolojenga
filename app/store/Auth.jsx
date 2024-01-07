import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isAuth: false,
    AccountType: "Landlord",
    toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
    updateAccountType: () => set((state) => ({ AccountType: 'get from' })),
}));