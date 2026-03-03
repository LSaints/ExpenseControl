import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom";

interface IListItemLinkProps {
    to: string,
    icon: string,
    label: string
}

export const ListItemLink = (props: IListItemLinkProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.to);
    }
    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Icon>{props.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItemButton>
    )
}