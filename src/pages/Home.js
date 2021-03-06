import React, {useEffect} from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Home = (props) => {
    useEffect(() => {
        window.scrollTo({left: 0, top: 0, behavior: "auto"});

        const serviceSection = document.querySelector('#services'),
            picture = serviceSection.querySelector('picture'),
            options = {
                root: null,
                threshold: 0,
                rootMargin: "250px"
            },
            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (window.getComputedStyle(picture).display === 'none' && entry.isIntersecting && window.innerWidth > 740) {
                        picture.style.display = 'unset';
                        observer.unobserve(entry.target);
                    }
                })
            }, options);

        observer.observe(serviceSection);
    }, []);

    return (
        <React.Fragment>
            <Header isWebpEnable={props.isWebpEnable}/>
            <Intro/>
            <Services/>
            <Prices/>
            <Form/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;