import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUser } from "../../services/UsersService";

export const useEditUserForm = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | "">("");

    useEffect(() => {
        const fetchUser = async () => {
            if (!id) return;

            const user = await GetUser(id);
            setName(user.name);
            setAge(user.age);
        }
        
        fetchUser();
    }, [id])
    return { name, age, setName, setAge }
}