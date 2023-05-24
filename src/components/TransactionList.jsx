import { useGlobalState } from "../context/GlobalState";
import {TransactionsItem} from "./TransactionsItem";

const TransactionList = () => {
    const { transactions } = useGlobalState()


    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold w-full font-mono">Historial</h3>
            <ul>
            {transactions.map(transaction => (
                <TransactionsItem transaction={transaction} key={transaction.id}/>
            ))}
            </ul>
        </>
    )
}

export default TransactionList