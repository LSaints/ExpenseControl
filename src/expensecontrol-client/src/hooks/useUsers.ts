import { useEffect, useState } from "react";
import { DeleteUser, GetAllUsers } from "../services/UsersService";
import { useNavigate } from "react-router-dom";
import type { UserType } from "../types/User";

export const useUsers = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserType[]>([]);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await GetAllUsers();
            if (response == undefined) {
                setUsers([]);
                return;
            }
            setUsers(response);
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchString.toLowerCase()));

    const handleDeleteUser = async (id: string) => {
        try {
            await DeleteUser(id);
            setUsers(prev => prev.filter(user => user.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditUser = (user: UserType) => {
        navigate(`/pessoas/${user.id}`);
    };

    const handleNavigate = () => {
        navigate("/pessoas/novo");
    };

    return {
        users,
        searchString,
        filteredUsers,
        handleDeleteUser,
        handleEditUser,
        handleNavigate,
        setSearchString
    }
}