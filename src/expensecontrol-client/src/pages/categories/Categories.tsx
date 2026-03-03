import { ToolBar } from "../../components/tool-bar/ToolBar"
import { Layout } from "../../layouts/Layout"
import { CategoriesTable } from "../../components/categories-table/CategoriesTable";
import { useCategories } from "../../hooks/useCategories";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { formatCurrency } from "../../utils/Currency";

export const Categories = () => {
    const { categories, filteredCategories, totals, handleBtnClick, setSearchString } = useCategories();

    if (totals === undefined) return null;


    return (
        <Layout title="Categorias">
            <ToolBar onBtnClick={handleBtnClick} onChangeSearchText={setSearchString} />

            <Box
                sx={{ mt: 2 }}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={2}
            >
                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography>Despesas</Typography>
                        <Typography>{formatCurrency(totals.summary.totalExpenses)}</Typography>
                    </CardContent>
                </Card>

                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography>Receita</Typography>
                        <Typography>{formatCurrency(totals.summary.totalIncomes)}</Typography>
                    </CardContent>
                </Card>


                <Card sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography>Saldo</Typography>
                        <Typography>{formatCurrency(totals.summary.totalBalance)}</Typography>
                    </CardContent>
                </Card>
            </Box>


            <CategoriesTable categories={filteredCategories.length > 0 ? filteredCategories : categories} totals={totals} />
        </Layout>
    )
}