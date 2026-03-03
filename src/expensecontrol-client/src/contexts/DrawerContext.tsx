import { useState } from "react";
import { DrawerContext } from "../hooks/useDrawerContext";

interface IDrawerContextProps {
    children: React.ReactNode;
}

export const DrawerProvider = (props: IDrawerContextProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = () => {
        setIsDrawerOpen(isDrawerOpen => !isDrawerOpen);
    }

    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {props.children}
        </DrawerContext.Provider>
    )
}