import React from 'react';
import './expense-list.css';
import Card from './card';
import { useSelector } from 'react-redux';

const ExpenseList = () => {

    const expense = useSelector(state => state.expenses)
    console.log(expense);

    const filteredList = expense.expenseList.filter(item=>item.title.toLowerCase().includes(expense.query.toLowerCase()))

    return (
        <div className='expense-list'>

            {filteredList.length > 0 ?
                filteredList.map(item => {
                    return (
                        <Card item={item} />
                    )
                })
                :
                <div className='empty-state'>
                    <img src={require('../../assets/images/empty.png')} alt='empty list' className='empty-image' />
                    <label>Uh Oh! Your expense list is empty</label>
                </div>
            }

        </div>

    )
}

export default ExpenseList