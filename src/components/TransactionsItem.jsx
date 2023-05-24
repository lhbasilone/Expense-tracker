import React from 'react'
import { useGlobalState } from '../context/GlobalState';

export const TransactionsItem = ({transaction}) => {
    const { deleteTransaction } = useGlobalState()
  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
    <p className='text-sm'>{transaction.description}</p>
    <div>
        <span>${transaction.amount}</span>
        <button class="ml-auto bg-red-600 hover:bg-red-700 active:bg-red-800 text-white w-4 h-5 rounded-md flex items-center justify-center" onClick={() => {deleteTransaction(transaction.id);}}>X</button>
    </div>
</li>
  )
}

export default TransactionsItem