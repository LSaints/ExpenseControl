import { BarChart } from '@mui/x-charts/BarChart';
import type { UserType } from '../../types/User';


interface IIconmeExpenseChartProps {
    users: UserType[]
}

export const IncomeExpenseChart = (props: IIconmeExpenseChartProps) => {
    return (
        <>
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: props.users.map((user) => user.name),
                    },
                ]}
                series={[
                    {
                        label: "Receitas",
                        data: props.users.map((user) => user.totalIncome),
                    },
                    {
                        label: "Despesas",
                        data: props.users.map((user) => user.totalExpenses),
                    },
                    {
                        label: "Saldo",
                        data: props.users.map((user) => user.balance),
                    },
                ]}
                height={300}
            />
        </>
    )
}