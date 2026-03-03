import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { TransactionTypeLabels, type TransactionType } from "../../types/Transaction";
import { useTransactionsTable } from "./useTransactionTable";

interface ITransactionTableProps {
    transactions: TransactionType[]
}

export const TransactionsTable = (props: ITransactionTableProps) => {
    const { page, rowsPerPage, users, categories, handleChangePage, handleChangeRowsPerPage  } = useTransactionsTable();

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
                                <Typography fontWeight="bold">Pessoa</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Descrição</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Categoria</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Tipo</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Valor</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.transactions
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((transaction) => (
                                <TableRow hover key={transaction.id}>
                                    <TableCell>{transaction.id}</TableCell>
                                    <TableCell>{users.find((user) => user.id === transaction.userId)?.name}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell>{categories.find((category) => category.id === transaction.categoryId)?.description}</TableCell>
                                    <TableCell>{TransactionTypeLabels[transaction.type]}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.transactions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}