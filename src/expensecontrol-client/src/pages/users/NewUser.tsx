import { UserForm } from "../../components/user-form/UserForm";
import { useNewUser } from "../../hooks/useNewUser";
import { Layout } from "../../layouts/Layout";
import { Alert } from "@mui/material";

export const NewUser = () => {
    const { errorMessage, handleSubmit } = useNewUser();
    
    return (
        <Layout title="Nova pessoa">
            {errorMessage && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                </Alert>
            )}
            <UserForm onSubmit={handleSubmit} />
        </Layout>
    );
}