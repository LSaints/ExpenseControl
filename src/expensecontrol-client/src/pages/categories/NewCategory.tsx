import { useState } from "react";
import { CategoryForm } from "../../components/category-form/CategoryForm"
import { Layout } from "../../layouts/Layout"
import { CreateCategory } from "../../services/CategoryService";
import type { CreateCategoryType } from "../../types/Category";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";


export const NewCategory = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (category: CreateCategoryType) => {
        try {
            await CreateCategory(category);
            navigate('/categorias');
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Erro inesperado.");
            }
        }
    }

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