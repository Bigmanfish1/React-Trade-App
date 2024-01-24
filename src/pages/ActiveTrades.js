import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import ActiveOrder from './ActiveOrder';

function ViewActiveTrades(props) {
    const fetchActiveTrades = (symbol) => {
        alert("Here are the active trades for " + symbol);
    }
    return (
        <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={() => fetchActiveTrades(props.symbol)}>View Active Trades</button>
    );
}



function Trade(props) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        var baseUrl = "https://fapi.binance.com";
        var endPoint = "/fapi/v1/openOrders";
        var query = "recvWindow=20000&timestamp=" + Date.now();
        var keys = {
            'apiKey': process.env.REACT_APP_API_KEY,
            'secret': process.env.REACT_APP_SECRET_KEY
        }
        var signature = CryptoJS.HmacSHA256(query, keys['secret']).toString(CryptoJS.enc.Hex);
        var req1 = new XMLHttpRequest();
        var url = baseUrl + endPoint + '?' + query + '&signature=' + signature;

        req1.open("GET", url, true);
        req1.setRequestHeader("X-MBX-APIKEY", keys['apiKey']);
        req1.onreadystatechange = function () {
            if (req1.readyState === 4 && req1.status === 200) {
                const data = JSON.parse(req1.responseText);
                setOrders(data);
            }
        }
        req1.send();
    }, []);
    if(orders.length === 0) {return (
    <>
        <h2 className="display-2 text-center text-warning">No Current Active Trades...</h2>
    </>
    );}
    else{
        return (
            <>
                <h1 className='secondHeading 2text-info'>Here are the following active trades your bot has placed...</h1>
                <div className="row text-center">
                    {
                        orders.map((order) => <ActiveOrder key={order.orderId} order={order} />)
                    }
                </div>
            </>);
    }
    
}

const ActiveTrades = () => {
    return (
        <div>
            <Trade outcome="Success" />
        </div>
    )
}

export default ActiveTrades;