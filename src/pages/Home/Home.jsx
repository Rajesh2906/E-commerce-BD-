import "./Home.css";
// import homeImg from '../../assets/homeImg.png'
import Header from "../../components/Atoms/Header";
import HomeCard from "../../components/Molecules/Cards/HomeCard";
import BrandCarousel from "../../components/Molecules/BrandCarousel/BrandCarousel";

const Home = () => {
    return (
        <div className="homePage">
            <Header/>
            <img className="homeImg" src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <BrandCarousel/>    
            <HomeCard/>    
        </div>
    );
}

export default Home;