import { create } from 'zustand';

export const useComponentStore = create((set) => ({
  activeComponent: null,
  setActiveComponent: (newComponent) => set((state) => ({ activeComponent: newComponent })),
}));
