import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import type { UpdateUserType } from "../../types/User";
import { useEditUserForm } from "./useEditUserForm";

interface IEditUserFormProps {
    onSubmit: (user: UpdateUserType) => void;
}

export const EditUserForm = (props: IEditUserFormProps) => {

    const { name, age, setName, setAge } = useEditUserForm();
    
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
                Editar Usuário
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
                        Editar
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}