import "./Home.css";
import homeImg from '../../assets/home-img-used.png'
import Header from "../../components/Atoms/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <img className="homeImg" src={homeImg}/>
            <div className="brandSlider">Brand Logo Slider here</div>          
        </div>
    );
}

export default Home;