import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { CategoryPurposeLabels, type CategoriesTotalsType, type CategoryType } from "../../types/Category";
import { useCategoriesTable } from "./useCategoriesTable";

interface ICategoriesTableProps {
    categories: CategoryType[];
    totals: CategoriesTotalsType;
}

export const CategoriesTable = (props: ICategoriesTableProps) => {
    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useCategoriesTable();


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
                                <Typography fontWeight="bold">Descrição</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Finalidade</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Receitas</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Despesas</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography fontWeight="bold">Saldo</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.categories
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((category) => (
                                <TableRow hover key={category.id}>
                                    <TableCell>{category.id}</TableCell>
                                    <TableCell>{category.description}</TableCell>
                                    <TableCell>{CategoryPurposeLabels[category.purpose]}</TableCell>
                                    <TableCell>{props.totals.categories.filter((c) => c.id === category.id)[0].totalIncomes}</TableCell>
                                    <TableCell>{props.totals.categories.filter((c) => c.id === category.id)[0].totalExpenses}</TableCell>
                                    <TableCell>{props.totals.categories.filter((c) => c.id === category.id)[0].balance}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}