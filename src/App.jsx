import {GlobalProvider} from "./context/GlobalState"
import Balance from "./components/Balance"
import TransactionForm from "./components/TransactionForm"
import './App.css'
import TransactionList from "./components/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"
import Footer from "./components/Footer"

const App = () => {
  return (
    <GlobalProvider>
      <div className="font-mono bg-zinc-900  text-white min-h-screen flex justify-center items-center">
        <div className="container mx-auto w-11/12 lg:w-4/6 xl:w-3/6 py-5 ">
          <div className="bg-zinc-800 p-10 rounded-3xl flex flex-col lg:flex-row gap-4 shadow-3xl shadow-indigo-400/50">
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold font-mono">Segui tus gastos!</h1>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div className="flex flex-col">
              <ExpenseChart/>
              <TransactionList/>
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
          <Footer/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
