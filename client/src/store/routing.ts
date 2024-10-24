import { create } from "zustand";
import { Routes, RoutingType } from "@root/global-types";

type State = RoutingType;
type Actions = {
  setRoute: (route: RoutingType["route"]) => void;
};

export const useRoutingStore = create<State & Actions>((set) => ({
  route: Routes.Root,
  setRoute: (route) => set({ route }),
}));
