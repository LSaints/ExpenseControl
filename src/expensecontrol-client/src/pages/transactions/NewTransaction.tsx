import { useNavigate } from "react-router-dom"
import { NewTransactionForm } from "../../components/new-transaction-form/NewTransactionForm"
import { Layout } from "../../layouts/Layout"
import { CreateTransaction } from "../../services/TransactionService"
import { useState } from "react"
import type { CreateTransactionType } from "../../types/Transaction"
import { Alert } from "@mui/material"

export const NewTransaction = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const handleSubmit = async (transaction: CreateTransactionType) => {
        try {
            await CreateTransaction(transaction);
            navigate("/transacoes");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Erro inesperado.");
            }
        }
    }

    return (
        <Layout title="Nova transação">
            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            )}
            <NewTransactionForm onSubmit={handleSubmit} />
        </Layout>
    )
}