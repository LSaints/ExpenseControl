import { useEffect, useState } from 'react';
import { IncomeExpenseChart } from '../../components/income-expense-chart/IncomeExpenseChart';
import { Layout } from '../../layouts/Layout';
import type { UserType } from '../../types/User';
import { GetAllUsers } from '../../services/UsersService';
import { GetAllCategories, GetAllCategoriesTotals } from '../../services/CategoryService';
import type { CategoriesTotalsType } from '../../types/Category';
import { CategoryCharts } from '../../components/categories-charts/CategoryCharts';

export const Home = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [totals, setTotals] = useState<CategoriesTotalsType | undefined>();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await GetAllUsers();
            setUsers(response)
        }

        const fetchTotals = async () => {
            const response = await GetAllCategoriesTotals();
            setTotals(response)
        }

        fetchTotals();
        fetchUsers();
    }, [])

    return (
        <Layout title="Home">
            <IncomeExpenseChart users={users} />
            <CategoryCharts totals={totals} />
        </Layout>
    )
}