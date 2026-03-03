import { CategoryForm } from "../../components/category-form/CategoryForm"
import { useNewCategory } from "../../hooks/useNewCategory";
import { Layout } from "../../layouts/Layout"
import { Alert } from "@mui/material";


export const NewCategory = () => {
    const { errorMessage, handleSubmit } = useNewCategory();

    return (
        <Layout title="Nova Categoria">
            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            )}
            <CategoryForm onSubmit={handleSubmit} />
        </Layout>
    )
}