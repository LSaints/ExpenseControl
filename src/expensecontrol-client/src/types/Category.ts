export const CategoryPurpose = {
  Expense: 0,
  Income: 1,
  Both: 2
} as const;

export type CategoryPurposeType =
  (typeof CategoryPurpose)[keyof typeof CategoryPurpose];


export const CategoryPurposeLabels = {
  [CategoryPurpose.Expense]: "Despesa",
  [CategoryPurpose.Income]: "Receita",
  [CategoryPurpose.Both]: "Ambos"
};


export type CategoryType = {
    id: string;
    description: string;
    purpose: CategoryPurposeType;
}

export type CreateCategoryType = {
    description: string;
    purpose: CategoryPurposeType;
}

export type CategoriesTotalsType = {
    categories: CategoryType[];
    summary: {
        totalExpenses: number;
        totalIncomes: number;
        totalBalance: number;
    };
}