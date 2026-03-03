import { PieChart } from "@mui/x-charts"
import type { CategoriesTotalsType } from "../../types/Category"

interface ICategoryChartsProps {
    totals: CategoriesTotalsType | undefined
}


export const CategoryCharts = (props: ICategoryChartsProps) => {
    if (!props.totals) return null

    return (
        <>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: props.totals.summary.totalIncomes, label: "Receitas" },
                            { id: 1, value: props.totals.summary.totalExpenses, label: "Despesas" },
                        ],
                    },
                ]}
                height={300}
            />
            
        </>
    )
}