// tipo da resposta e requisições de Trasaction e seu Enum de TypeTransaction
export const TypeTransaction = {
    Expense: 0,
    Income: 1,
} as const;


export type TypeTransactionType =
  (typeof TypeTransaction)[keyof typeof TypeTransaction];

export const TransactionTypeLabels = {
  [TypeTransaction.Expense]: "Despesa",
  [TypeTransaction.Income]: "Receita",
};

export type TransactionType = {
    id: string;
    userId: string;
    categoryId: string;
    description: string;
    amount: number;
    type: TypeTransactionType;
}

export type CreateTransactionType = {
    userId: string;
    categoryId: string,
    description: string,
    amount: number,
    type: TypeTransactionType,
}