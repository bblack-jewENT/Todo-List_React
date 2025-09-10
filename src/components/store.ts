import { create } from "zustand";

type CounterStore = {
    count: number;
}

export const usuCounterStore = create<CounterStore>(() => {
    count: 0,
})
