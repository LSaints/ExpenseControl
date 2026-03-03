import { useState } from "react";
import type { CreateUserType } from "../types/User";
import { CreateUser } from "../services/UsersService";
import { useNavigate } from "react-router-dom";

export const useNewUser = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (user: CreateUserType) => {
        try {
            await CreateUser(user);
            navigate("/pessoas");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Erro inesperado.");
            }
        }
    }

    return { errorMessage, handleSubmit}
}