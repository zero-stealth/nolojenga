import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
    isNotificationOn: false,
    openNotification: false,
    cancelNotification: false,
    toggleCancelNotification: () => set((state) => ({ cancelNotification: !state.cancelNotification })),
    toggleNotification: () => set((state) => ({ openNotification: !state.openNotification })),
    toggleNotificationOn: () => set((state) => ({ isNotificationOn: !state.isNotificationOn })),

}));

