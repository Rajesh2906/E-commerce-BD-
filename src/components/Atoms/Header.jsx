import { useNavigate } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();
    const validateSignIn = () => {
        navigate("/E-commerce-BD-/SignIn");
    }

    return (
        < nav className="navbar navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">BD</a>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => validateSignIn()}>
                Sign In
            </button>
        </nav >
    );
}
export default Header;