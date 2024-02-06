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
    // eslint-disable-next-line no-lone-blocks
    return (
        <div className='dropdown text-center'>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                SELECT SYMBOL
            </button>
            <ul className="dropdown-menu">
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BTCUSDT")} >BTC/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ETHUSDT")}>ETH/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("YFIUSDT")}>YFI/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BNBUSDT")}>BNB/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BCHUSDT")}>BCH/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ETCUSDT")}>ETC/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("LTCUSDT")}>LTC/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("MKRUSDT")}>MKR/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XRPUSDT")}>XRP/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XMRUSDT")}>XMR/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("LINKUSDT")}>LINK/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("AAVEUSDT")}>AAVE/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("UNIUSDT")}>UNI/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("COMPUSDT")}>COMP/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("SOLUSDT")}>SOL/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ATOMUSDT")}>ATOM/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("AVAXUSDT")}>AVAX/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("SANDUSDT")}>SAND/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("OPUSDT")}>OP/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("XLMUSDT")}>XLM/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("BSVUSDT")}>BSV/USDT</a></li>
                    {/* eslint-disable-next-line */}
                    <li ><a className="dropdown-item" onClick={() => fetchTradeHistory("ICPUSDT")}>ICP/USDT</a></li>
                    {/* eslint-disable-next-line */}
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