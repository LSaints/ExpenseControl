import { useEffect, useState } from "react";
import type { UserType } from "../../types/User";
import type { CategoryType } from "../../types/Category";
import { GetAllUsers } from "../../services/UsersService";
import { GetAllCategories } from "../../services/CategoryService";

export const useTransactionsTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [users, setUsers] = useState<UserType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);


    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await GetAllUsers();
            setUsers(users);
        }

        const fetchCategories = async () => {
            const categories = await GetAllCategories();
            setCategories(categories);
        }

        fetchUsers();
        fetchCategories();

    }, [])

    return { page, rowsPerPage, users, categories, handleChangePage, handleChangeRowsPerPage }
}