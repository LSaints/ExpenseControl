export type UserType = {
    id: string;
    name: string;
    age: number;
    totalExpenses: number;
    totalIncome: number;
    balance: number;
}

export type CreateUserType = {
    name: string;
    age: number
}

export type UpdateUserType = {
    name: string;
    age: number
}