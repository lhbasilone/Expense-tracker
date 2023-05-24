import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'
const ExpenseChart = () => {
    const { transactions } = useGlobalState();

    if (transactions.length === 0) {
        return <p className='text-slate-300 text-xl font-bold w-full py-2 font-mono'>No hay transacciones disponibles.</p>;
    }

    const totalIncome = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    let totalExpensePercentage = 0;
    let totalIncomePercentage = 0;

    if (totalIncome !== 0) {
        totalExpensePercentage = Math.min(Math.round((totalExpense / totalIncome) * 100), 100);
        totalIncomePercentage = 100 - totalExpensePercentage;
    }

    return (
        <VictoryPie
            colorScale={['#f1341b', '#6aef1c' ]}
            data={[
                { x: 'Gastos', y: totalExpensePercentage },
                { x: 'Ingresos', y: totalIncomePercentage },
            ]}
            animate={{
                duration: 200,
            }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={
                <VictoryLabel
                    angle={45}
                    style={{
                        fill: 'white',
                    }}
                />
            }
        />
    );
};

export default ExpenseChart;
