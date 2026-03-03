import { ToolBar } from "../../components/tool-bar/ToolBar";
import { UsersTable } from "../../components/users-table/UsersTable";
import { useUsers } from "../../hooks/useUsers";
import { Layout } from "../../layouts/Layout";


export const Users = () => {

    const { 
        users,
        filteredUsers, 
        setSearchString, 
        handleNavigate, 
        handleDeleteUser, 
        handleEditUser } = useUsers();

    return (
        <Layout title="Pessoas">
            <ToolBar onChangeSearchText={setSearchString} onBtnClick={handleNavigate} />
            <UsersTable
                users={filteredUsers.length > 0 ? filteredUsers : users}
                onDelete={handleDeleteUser}
                onEdit={handleEditUser} />
        </Layout>
    );
}