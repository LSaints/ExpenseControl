import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { CategoryPurposeLabels, type CategoryType } from "../../types/Category";
import { useCategoriesTable } from "./useCategoriesTable";

interface ICategoriesTableProps {
    categories: CategoryType[];
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
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.categories
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((categories) => (
                                <TableRow hover key={categories.id}>
                                    <TableCell>{categories.id}</TableCell>
                                    <TableCell>{categories.description}</TableCell>
                                    <TableCell>{CategoryPurposeLabels[categories.purpose]}</TableCell>
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