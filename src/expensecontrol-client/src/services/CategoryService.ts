import type { AxiosError } from "axios";
import type { ApiError } from "../types/ApiError";
import type { CategoriesTotalsType, CategoryType, CreateCategoryType } from "../types/Category";
import { api } from "./Api";

// funções para chamdas http da API para os endpoints de Categories
export const GetAllCategories = async (): Promise<CategoryType[]> => {
    try {
        const response = await api.get<CategoryType[]>("/v1/categories")
        return response.data as CategoryType[]
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar categorias.");
    }
}

export const GetAllCategoriesTotals = async (): Promise<CategoriesTotalsType> => {
    try {
        const response = await api.get<CategoriesTotalsType>("/v1/categories/totals")
        return response.data as CategoriesTotalsType
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar categorias.");
    }
}

export const CreateCategory = async (category: CreateCategoryType): Promise<void> => {
    try {
        await api.post<CategoryType>("/v1/categories", category)
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar categorias.");
    }
}

export const GetCategoriesTotals = async (): Promise<CategoriesTotalsType> => {
    try {
        const response = await api.post<CategoriesTotalsType>("/v1/categories/totals")
        return response.data as CategoriesTotalsType
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar categorias.");
    }
}