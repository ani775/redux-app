import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './State';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h2>Update Balance</h2>
            <button className='btn btn-primary mx-2' onClick={() => withdrawMoney(100)}>-</button>
            Deposit / Withdraw Money
            <button className='btn btn-primary mx-2' onClick={() => depositMoney(100)}>+</button>
        </div>
    );
};

export default Shop;
