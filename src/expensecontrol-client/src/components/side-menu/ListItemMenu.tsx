import { List } from "@mui/material"
import { ListItemLink } from "./ListItemLink";

export const ListItemMenu = () => {

    return (
        <List component={"nav"}>
            <ListItemLink to={"/pagina-inicial"} icon={"home"} label={"Página inicial"} />
            <ListItemLink to={"/pessoas"} icon={"people"} label={"pessoas"} />
            <ListItemLink to={"/categorias"} icon={"category"} label={"categorias"} />
            <ListItemLink to={"/transacoes"} icon={"currency_exchange"} label={"transações"} />
        </List>
    )
}