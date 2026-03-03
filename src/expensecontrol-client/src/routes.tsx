import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Categories } from "./pages/categories/Categories";
import { Users } from "./pages/users/Users";
import { Transactions } from "./pages/transactions/Transactions";
import { NewUser } from "./pages/users/NewUser";
import { EditUser } from "./pages/users/EditUser";
import { NewCategory } from "./pages/categories/NewCategory";
import { NewTransaction } from "./pages/transactions/NewTransaction";

// Rotas da aplicação e seus componentes/páginas para renderizar
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Home />} />
            
            <Route path="/categorias" element={<Categories />} />
            <Route path="/categorias/novo" element={<NewCategory />} />

            <Route path="/pessoas" element={<Users />} />
            <Route path="/pessoas/novo" element={<NewUser />} />
            <Route path="/pessoas/:id" element={<EditUser />} />
            
            <Route path="/transacoes" element={<Transactions />} />
            <Route path="/transacoes/novo" element={<NewTransaction />} />

            <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
    )

}