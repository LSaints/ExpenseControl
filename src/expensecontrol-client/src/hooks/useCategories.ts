import { useEffect, useState } from "react";
import type { CategoryType } from "../types/Category";
import { useNavigate } from "react-router-dom";
import { GetAllCategories } from "../services/CategoryService";

export const useCategories = () => {
    const [searchString, setSearchString] = useState("");
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/categorias/novo');
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await GetAllCategories();
            if (response == undefined) {
                setCategories([]);
                return;
            }
            setCategories(response);
        };

        fetchCategories();
    }, []);

    const filteredCategories = categories.filter((category) =>
        category.description.toLowerCase().includes(searchString.toLowerCase()));

    return { categories, filteredCategories, searchString, setSearchString, handleBtnClick }
}