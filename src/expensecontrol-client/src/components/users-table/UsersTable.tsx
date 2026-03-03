import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import type { UserType } from "../../types/User";
import { useUsersTable } from "./useUsersTable";

interface IUserTableProps {
    users: UserType[];
    onDelete: (id: string) => void;
    onEdit: (user: UserType) => void;
}

export const UsersTable = (props: IUserTableProps) => {

    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useUsersTable();

    return (
        <>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography fontWeight="bold">ID</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Nome</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Idade</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Despesas</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Receitas</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Saldo</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography fontWeight="bold">Ações</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow hover key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>{user.totalExpenses}</TableCell>
                                    <TableCell>{user.totalIncome}</TableCell>
                                    <TableCell>{user.balance}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            size="small"
                                            onClick={() => props.onEdit(user)}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            size="small"
                                            color="error"
                                            onClick={() => props.onDelete(user.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};