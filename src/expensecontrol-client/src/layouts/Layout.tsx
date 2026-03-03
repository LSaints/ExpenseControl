import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { useDrawerContext } from "../hooks/useDrawerContext";

interface ILayoutProps {
    children: React.ReactNode;
    title: string
}

export const Layout = (props: ILayoutProps) => {
    const theme = useTheme();
    const { toggleDrawerOpen  } = useDrawerContext();

    return(
        <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
            <Box padding={1} display={"flex"} alignItems={"center"} height={theme.spacing(12)} gap={1}>
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant="h5" whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
                    {props.title}
                </Typography>
            </Box>
            <Box flex={1} overflow={"auto"}>
                {props.children}
            </Box>
        </Box>
    );
}