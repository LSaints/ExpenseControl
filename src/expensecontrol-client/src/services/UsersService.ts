import type { AxiosError } from "axios"
import type { CreateUserType, UserType } from "../types/User"
import { api } from "./Api"
import type { ApiError } from "../types/ApiError"

export const GetAllUsers = async (): Promise<UserType[]> => {
    try {
        const response = await api.get<UserType[]>("/v1/users")
        return response.data as UserType[]
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar usuários.");
    }
}

export const GetUser = async (id: string): Promise<UserType> => {
    try {
        const response = await api.get<UserType>(`/v1/users/${id}`)
        return response.data as UserType
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar usuário.");
    }
}

export const CreateUser = async (user: CreateUserType): Promise<UserType> => {
    try {
        const response = await api.post<UserType>("/v1/users", user)
        return response.data as UserType
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao criar usuário.");
    }
}

export const UpdateUser = async (id: string, user: CreateUserType): Promise<void> => {
    try {
        await api.put<void>(`/v1/users/${id}`, user)
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao editar usuário.");
    }
}


export const DeleteUser = async (id: string): Promise<void> => {
    try {
        await api.delete<void>(`/v1/users/${id}`)
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao remover usuário.");
    }
}