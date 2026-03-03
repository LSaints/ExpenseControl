import { ToolBar } from "../../components/tool-bar/ToolBar"
import { Layout } from "../../layouts/Layout"
import { CategoriesTable } from "../../components/categories-table/CategoriesTable";
import { useCategories } from "../../hooks/useCategories";

export const Categories = () => {
    const { categories, filteredCategories, handleBtnClick, setSearchString } = useCategories();

    return (
        <Layout title="Categorias">
            <ToolBar onBtnClick={handleBtnClick} onChangeSearchText={setSearchString}/>
            <CategoriesTable categories={filteredCategories.length > 0 ? filteredCategories : categories} />
        </Layout>
    )
}