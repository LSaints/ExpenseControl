import { Button, Paper, Stack, TextField, Typography, MenuItem } from "@mui/material";
import { useNewTransactionForm } from "./useNewTransactionForm";
import { TypeTransaction, type CreateTransactionType, type TypeTransactionType } from "../../types/Transaction";




interface ITransactionFormProps {
    onSubmit: (transaction: CreateTransactionType) => void;
}

export const NewTransactionForm = ({ onSubmit }: ITransactionFormProps) => {

    const {
        userId,
        users,
        categories,
        categoryId,
        description,
        amount,
        type,
        setUserId,
        setCategoryId,
        setDescription,
        setAmount,
        setType,
        resetForm
    } = useNewTransactionForm();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!userId.trim() || !description.trim() || amount === "") {
            return;
        }

        const transaction: CreateTransactionType = {
            userId: userId.trim(),
            categoryId: categoryId.trim(),
            description: description.trim(),
            amount: Number(amount),
            type
        };

        onSubmit(transaction);
        resetForm();
    };

    return (
        <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6" mb={2}>
                Nova Transação
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>

                    <TextField
                        select
                        label="Usuário"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        fullWidth
                        required
                    >
                        {users.map((user) => (
                            <MenuItem key={user.id} value={user.id}>
                                {user.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        select
                        label="Categoria"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        fullWidth
                        required
                    >
                        {categories.map((user) => (
                            <MenuItem key={user.id} value={user.id}>
                                {user.description}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Valor"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                        fullWidth
                        required
                    />

                    <TextField
                        select
                        label="Tipo"
                        value={type}
                        onChange={(e) => setType(Number(e.target.value) as TypeTransactionType)}
                        fullWidth
                    >
                        <MenuItem value={TypeTransaction.Expense}>
                            Despesa
                        </MenuItem>

                        <MenuItem value={TypeTransaction.Income}>
                            Receita
                        </MenuItem>
                    </TextField>

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
};