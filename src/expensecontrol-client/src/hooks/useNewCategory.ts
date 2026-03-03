import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CreateCategoryType } from "../types/Category";
import { CreateCategory } from "../services/CategoryService";

export const useNewCategory = () => {
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

    return { errorMessage, handleSubmit };
}