import "./Home.css";
import { useNavigate } from 'react-router-dom';
import homeImg from '../../assets/home-img-used.png'

import Header from "../../components/Atoms/Header";
const Home = () => {
    const navigate = useNavigate();
    const validateSignIn = () => {
        navigate("/E-commerce-BD-/SignIn");
    }

    return (
        <div>
            <Header validateSignIn={validateSignIn}/>
            <img className="homeImg" src={homeImg}/>
            <div className="brandSlider">Brand Logo Slider here</div>          
        </div>
    );
}

export default Home;