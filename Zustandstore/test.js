import { create } from 'zustand'

const useTest = create((set) =>({
    counter : 0,
    inc : () => set((state) => ({counter:state.counter + 1})),
    dec : () => set((state) => ({counter:state.counter - 1})),
}));

export default useTest;