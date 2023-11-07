import "./Header.css"

const Header = (props) => {
    const {validateSignIn} = props;
    return (
        < nav className="navbar navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">BD</a>

            <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={()=>validateSignIn()}>
                Sign In
            </button>
        </nav >
    );
}
export default Header;