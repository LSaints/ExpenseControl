import { useState } from "react";
import { CategoryPurpose } from "../../types/Category";
import type { CategoryPurposeType } from "../../types/Category";

export const useCategoryForm = () => {
  const [description, setDescription] = useState("");
  const [purpose, setPurpose] = useState<CategoryPurposeType>(
    CategoryPurpose.Expense
  );

  return {
    description,
    purpose,
    setDescription,
    setPurpose
  };
};