import { useEffect, useState } from "react";
import { TypeTransaction, type TypeTransactionType } from "../../types/Transaction";
import type { UserType } from "../../types/User";
import { GetAllUsers } from "../../services/UsersService";
import type { CategoryType } from "../../types/Category";
import { GetAllCategories } from "../../services/CategoryService";

export const useNewTransactionForm = () => {
    const [userId, setUserId] = useState("");
    const [categoryId, setCategoryId] = useState<string>("");
    const [users, setUsers] = useState<UserType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [type, setType] = useState<TypeTransactionType>(TypeTransaction.Expense);

    const resetForm = () => {
        setUserId("");
        setDescription("");
        setAmount("");
        setType(TypeTransaction.Expense);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await GetAllUsers();
            setUsers(response);
        }

        const fetchCategories = async () => {
            const response = await GetAllCategories();
            setCategories(response);
        }

        fetchCategories()


        fetchUsers();
    },[])

    return {
        userId,
        categoryId,
        users,
        categories,
        description,
        amount,
        type,
        setUserId,
        setCategories,
        setCategoryId,
        setDescription,
        setAmount,
        setType,
        resetForm
    };
}