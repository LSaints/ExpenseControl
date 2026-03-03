import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";
import { CategoryPurpose, type CategoryPurposeType, type CreateCategoryType } from "../../types/Category";

interface INewCategoryProps {
  onSubmit: (category: CreateCategoryType) => void;
}

export const CategoryForm = (props: INewCategoryProps) => {

  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState<CategoryPurposeType>(CategoryPurpose.Expense);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.onSubmit({
      description: description.trim(),
      purpose
    })
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400 }}
    >
      <Stack spacing={2}>

        <Typography variant="h6">
          Nova Categoria
        </Typography>

        <TextField
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
        />

        <TextField
          select
          label="Tipo"
          value={purpose}
          onChange={(e) => setPurpose(Number(e.target.value) as CategoryPurposeType)}
          fullWidth
        >
          <MenuItem value={CategoryPurpose.Expense}>
            Despesa
          </MenuItem>

          <MenuItem value={CategoryPurpose.Income}>
            Receita
          </MenuItem>

          <MenuItem value={CategoryPurpose.Both}>
            Ambos
          </MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
        >
          Salvar
        </Button>

      </Stack>
    </Box>
  );
};