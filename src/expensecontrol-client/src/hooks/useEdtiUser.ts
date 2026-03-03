import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "../services/UsersService";
import type { UpdateUserType } from "../types/User";
import { useState } from "react";

export const useEditUser = () => {
    const { id } = useParams();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (user: UpdateUserType) => {
        try {
            if (!id) return;

            await UpdateUser(id, user);
            navigate("/pessoas");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Erro inesperado.");
            }
        }
    }

    return { errorMessage, handleSubmit }
}