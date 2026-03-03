import { createContext, useContext } from "react";

interface IContextDrawerData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

export const DrawerContext = createContext({} as IContextDrawerData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}