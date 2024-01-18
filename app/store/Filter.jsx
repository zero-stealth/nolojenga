import { create } from 'zustand';

export const useFilterStore = create((set) => ({
    showFilter: false,
    filterType: "House",
    toggleFilter: () => set((state) => ({ showFilter: !state.showFilter })),
    updateFilter: (newFilterType) => set((state) => ({ filterType: newFilterType })),
}));
