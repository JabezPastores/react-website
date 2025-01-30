import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="navbar">
            <p onClick={() => navigate('/home')}>TRG INVENTORY</p>
            <p className="navbar-item" onClick={() => navigate('/Inventory')}>Inventory</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navbar;