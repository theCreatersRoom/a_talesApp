import {create} from 'zustand';

interface LoadingState {
  loading: boolean;
  setLoader: (val: boolean) => void;
}

export const useLoadingStore = create<LoadingState>(set => ({
  loading: false,
  setLoader: val => set({loading: val}),
}));
