import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import type { CreateUserType } from "../../types/User";
import { useUserForm } from "./useUserForm";

interface IUserFormProps {
    onSubmit: (user: CreateUserType) => void;
}

export const UserForm = (props: IUserFormProps) => {

    const { name, age, setName, setAge } = useUserForm();
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!name.trim() || age === "") return;

        props.onSubmit({
            name: name.trim(),
            age: Number(age)
        });

        setName("");
        setAge("");
    }

    return (
        <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6" mb={2}>
                Novo Usuário
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Idade"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        fullWidth
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                    >
                        Criar
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}