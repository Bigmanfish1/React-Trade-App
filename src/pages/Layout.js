import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav> 
                <ul className='nav justify-content-end'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/activetrades" className='nav-link'>Active Trades</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
