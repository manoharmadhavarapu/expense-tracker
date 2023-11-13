import React, { useState } from 'react';
import './add-form.css';
import { categories } from '../../constants/add-expenses';
import {useDispatch} from 'react-redux'
import { addExpense } from '../../redux/reducers/expenseReducerSlice';
import SuccessModal from './success-modal';

const AddForm = () => {

    const dispatch = useDispatch();

    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount('')
            return;
        }
        setAmount(val)
    }

    const handleCategory = (cat) => {
        setCategory(cat);
        setCategoryOpen(false)
    }

    const handleSubmit=()=>{
        console.log('clicked');
        if(title===''||amount===''||!category){
            console.log('data not found');
            return
        }

        const data = {
            title,
            amount,
            category,
            createdAt : new Date()
        }

        dispatch(addExpense(data))
        // dispatch({type:"ADD_EXPENSE",payload:data});
        setModalOpen(true)
    }

    return (
        <div className='add-form'>
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                <label>Title</label>
                <input
                    placeholder='Give a name of your expenditure'
                    value={title}
                    onChange={(e) => handleTitle(e)}
                    className='amount-input'
                />
            </div>
            <div className='form-item'>
                <label>Amount ₹</label>
                <input
                    placeholder='Enter Amount'
                    value={amount}
                    onChange={(e) => handleAmount(e)}
                />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category? category.title : 'Category'}</label>
                        <i class="fi fi-rr-angle-down"></i>
                    </div>
                    {
                        categoryOpen && <div className='category-container'>
                            {
                                cat.map(cat => (
                                    <div className='category-item'
                                        style={{ borderRight: `5px solid ${cat.color}` }}
                                        key={cat.id}
                                        onClick={() => handleCategory(cat)}
                                    >
                                        <label>{cat.title}</label>
                                        <img src={cat.icon} alt={cat.title} />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>

            <div className='form-add-button'>
                <div onClick={()=>handleSubmit()}>
                    <label>Add</label>
                    <i className="fi fi-rs-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm