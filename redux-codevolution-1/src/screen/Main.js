import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy, add, inputRefill } from '../service/reducerBuyCake';

const myStyle = {
    cakeNumber: {
        fontSize: "large"
    },
    main: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    items: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    }
}

function Main() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.cakeValue);
    const refill = useSelector((state) => state.counter.refillValue);

    return (
        <div style={myStyle.main}>
            <div style={myStyle.items}>
                <h4>Cake Store</h4>
                <span id="cake-number" style={myStyle.cakeNumber}>{count} left</span>
                <button className='button-buy' onClick={() => dispatch(buy())} value={refill}>Buy a Cake</button>
            </div>
            <div style={myStyle.items}>
                <h4>Cake Depot</h4>
                <input type="number" onChange={(event) => dispatch(inputRefill(parseInt(event.target.value)))} value={refill}></input>
                <button className='button-add' onClick={() => dispatch(add())}>Refill Cake</button>
            </div>
        </div>
    );
}

export default Main;