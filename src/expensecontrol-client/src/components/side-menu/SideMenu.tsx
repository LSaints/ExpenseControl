import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material"

import { useDrawerContext } from "../../hooks/useDrawerContext";
import { ListItemMenu } from "./ListItemMenu";

interface ISideMenuProps {
    children: React.ReactNode
}

export const SideMenu = (props: ISideMenuProps ) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();


    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height={"100%"} display={"flex"} flexDirection={"column"}>
                    <ListItemMenu />
                </Box>
            </Drawer>

            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
                {props.children}
            </Box>
        </>
    )
}