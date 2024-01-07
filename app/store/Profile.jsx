import { create } from 'zustand';

export const useProfileStore = create((set) => ({
    showProfile: false,
    toggleProfile: () => set((state) => ({ showProfile: !state.showProfile })),
}));

