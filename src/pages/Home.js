import { useState} from 'react';
import FetchPastOrders from './FetchPastOrders';

function SymbolForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTradeHistory, setShowTradeHistory] = useState(false);
    const [selectedSymbol, setSelectedSymbol] = useState('');

    const fetchTradeHistory = (symbol) => {
        setShowTradeHistory(true);
        setSelectedSymbol(symbol);
        console.log("Here are the trades for " + symbol);
        
    }
    return (
        <div className='dropdown text-center'>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                SELECT SYMBOL
            </button>
            <ul className="dropdown-menu">
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BTCUSDT")}>BTC/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ETHUSDT")}>ETH/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("YFIUSDT")}>YFI/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BNBUSDT")}>BNB/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BCHUSDT")}>BCH/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ETCUSDT")}>ETC/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("LTCUSDT")}>LTC/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("MKRUSDT")}>MKR/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XRPUSDT")}>XRP/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XMRUSDT")}>XMR/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("LINKUSDT")}>LINK/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("AAVEUSDT")}>AAVE/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("UNIUSDT")}>UNI/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("COMPUSDT")}>COMP/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("SOLUSDT")}>SOL/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ATOMUSDT")}>ATOM/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("AVAXUSDT")}>AVAX/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("SANDUSDT")}>SAND/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("OPUSDT")}>OP/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XLMUSDT")}>XLM/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BSVUSDT")}>BSV/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ICPUSDT")}>ICP/USDT</a></li>
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("NEARUSDT")}>NEAR/USDT</a></li>
            </ul>

            {showTradeHistory && (
                <FetchPastOrders symbol={selectedSymbol} />
            )}
        </div>
    );
}

const Home = () => {
    return (
        <>
            <h1 className='text-center'>SEARCH THE BOT TRADING HISTORY OF A PARTICULAR SYMBOL!</h1>
            <br />
            <SymbolForm />
        </>


    );
}

export default Home;