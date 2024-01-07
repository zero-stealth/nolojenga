import { create } from 'zustand';

export const useShowStore = create((set) => ({
    show: true,
    toggleShow: () => set((state) => ({ show: !state.show })),
}));

