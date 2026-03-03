import { useEffect, useState } from "react";
import type { CategoriesTotalsType, CategoryType } from "../types/Category";
import { useNavigate } from "react-router-dom";
import { GetAllCategories, GetAllCategoriesTotals } from "../services/CategoryService";

export const useCategories = () => {
    const [searchString, setSearchString] = useState("");
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [totals, setTotals] = useState<CategoriesTotalsType | undefined>();
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

        const fetchTotals = async () => {
            const response = await GetAllCategoriesTotals();
            if (response == undefined) {
                setCategories([]);
                return;
            }
            setTotals(response);
        };

        fetchTotals();
        fetchCategories();
    }, []);

    const filteredCategories = categories.filter((category) =>
        category.description.toLowerCase().includes(searchString.toLowerCase()));

    return { categories, filteredCategories, searchString, totals, setSearchString, handleBtnClick }
}