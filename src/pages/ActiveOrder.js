function ActiveOrder(props){
    const date = new Date(props.order.time);
    const year = date.getFullYear();
    const month = date.getMonth()+1; // Month is 0-indexed, so we add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return (
        <>
            <div className="col-6 sm-6">
                <div className="card mb-4">
                    <div className="card-header text-primary">
                        <h2>{props.order.symbol}</h2>
                    </div>
                    <div className="card-body" style={{ height: "250px", overflow: "auto" }}>
                        <h3 className="card-title text-center text-warning">{props.order.origType}</h3>
                        <div className="card-text">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Entry Price: ${props.order.avgPrice}</li>
                                <li className="list-group-item">Trade Amount: ${props.order.cumQuote}</li>
                                <li className="list-group-item">Time: {`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-footer">
                        {props.order.side === "BUY" ? <div className="card-header bg-success text-white">BUY</div> : <div className="card-header bg-danger text-white">SELL</div>}
                    </div>
                </div>

            </div>
        </>


    );
}

export default ActiveOrder;