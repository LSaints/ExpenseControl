import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllTransactions } from "../services/TransactionService";
import type { TransactionType } from "../types/Transaction";

export const useTransactions = () => {
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState("")
    const [transactions, setTransactions] = useState<TransactionType[]>([])


    const handleNavigate = () => {
        navigate("/transacoes/novo");
    };

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await GetAllTransactions();
            if (response == undefined) {
                setTransactions([]);
                return;
            }
            setTransactions(response);
        };

        fetchTransactions();
    }, []);


    const filteredTransactions = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchString.toLowerCase()));

    return { transactions, filteredTransactions, searchString, setSearchString, handleNavigate }
}