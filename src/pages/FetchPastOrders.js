import { useEffect, useState } from "react";
import CryptoJS from 'crypto-js';
import Order from "./Order";

function FetchPastOrders(props) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        var baseUrl = "https://fapi.binance.com";
        var endPoint = "/fapi/v1/allOrders";
        var query = "symbol=" + props.symbol + "&timestamp=" + Date.now();
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
    }, [props.symbol]);
    if (orders.length === 0) {
        return (
            <>
                <br />
                <h1 className="display-1 text-center text-success">{props.symbol}</h1>
                <br/>
                <h3 className="display-3 text-center text-danger">No trades have been placed for this symbol...</h3>
            </>
        );
    }
    else {
        return (
            <div className="container-fluid">
                <br />
                <h1 className="display-1 text-center text-success">{props.symbol}</h1>
                <div className="row text-center">
                    {
                        orders.map((order) => <Order key={order.orderId} order={order} />)
                    }
                </div>
            </div>
        );
    }

}

export default FetchPastOrders;