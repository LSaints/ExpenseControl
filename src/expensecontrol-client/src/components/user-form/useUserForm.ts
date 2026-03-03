import { useState } from "react";

export const useUserForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | "">("");


    return { name, age, setName, setAge }
}