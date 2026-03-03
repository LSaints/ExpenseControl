import { Alert } from "@mui/material";
import { EditUserForm } from "../../components/edit-user-form/EditUserForm"
import { useEditUser } from "../../hooks/useEdtiUser";
import { Layout } from "../../layouts/Layout"

export const EditUser = () => {
    const { errorMessage, handleSubmit } = useEditUser();

    return (
        <Layout title="Editar pessoa">
            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            )}
            <EditUserForm onSubmit={handleSubmit} />
        </Layout>
    )
}