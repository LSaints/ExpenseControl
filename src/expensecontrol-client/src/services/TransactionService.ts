import type { AxiosError } from "axios";
import type { ApiError } from "../types/ApiError";
import type { CreateTransactionType, TransactionType } from "../types/Transaction";
import { api } from "./Api";

// funções para chamdas http da API para os endpoints de Transactions
export const GetAllTransactions = async (): Promise<TransactionType[]> => {
    try {
        const response = await api.get<TransactionType[]>("/v1/transactions")
        return response.data as TransactionType[]
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao buscar categorias.");
    }
}

export const CreateTransaction = async (transaction: CreateTransactionType): Promise<void> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { userId, ...body} = transaction;
        const response = await api.post(`/v1/transactions/${transaction.userId}`, body)
        console.log(response)
    } catch (error) {
        const axiosError = error as AxiosError<ApiError>
        if (axiosError.response) {
            throw new Error(axiosError.response.data.message);
        }

        throw new Error("Erro ao criar usuário.");
    }
}