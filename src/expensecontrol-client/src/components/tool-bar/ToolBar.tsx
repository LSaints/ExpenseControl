import { Box, Button, Paper, TextField, useTheme } from "@mui/material"

interface IToolBarProps {
    searchText?: string
    onChangeSearchText?: (value: string) => void
    onBtnClick?: () => void
}

export const ToolBar = (props: IToolBarProps) => {
    const theme = useTheme();

    return(
        <Box height={theme.spacing(12)} gap={1} padding={1} paddingX={2} display={"flex"} alignItems={"center"} component={Paper}>
            <TextField size="medium" placeholder="Pesquisar" onChange={(e) => props.onChangeSearchText?.(e.target.value)}>
            </TextField>
            <Box flex={1} display={"flex"} justifyContent={"end"}>
                <Button variant="contained" onClick={props.onBtnClick}>
                    Novo
                </Button>
            </Box>
        </Box>
    )
}