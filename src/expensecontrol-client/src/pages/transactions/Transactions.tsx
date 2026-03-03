import { ToolBar } from "../../components/tool-bar/ToolBar"
import { Layout } from "../../layouts/Layout"
import { TransactionsTable } from "../../components/transactions-table/TransactionsTable";
import { useTransactions } from "../../hooks/useTransactions";

export const Transactions = () => {

    const { 
        transactions, 
        filteredTransactions, 
        handleNavigate, 
        setSearchString 
    } = useTransactions();
    
    return (
        <Layout title="Transações">
            <ToolBar onChangeSearchText={setSearchString} onBtnClick={handleNavigate} />
            <TransactionsTable transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
        </Layout>
    )
}