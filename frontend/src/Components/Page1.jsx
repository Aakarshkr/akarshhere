import{ useState, useEffect } from 'react';
import './page1.css'; 
import image1 from '../assets/page1/image1.png'
// import image2 from '../assets/image2.png'
import image3 from '../assets/page1/image3.png'


const ParallaxComponent = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Adding an empty dependency array ensures the effect runs only once after the component mounts

    const parallaxStyle = {
        marginTop: `${scrollPosition * 1.5}px`,
    };

    const pic1Style = {
        left: `${scrollPosition * 1.5}px`,
    };

    // const pic2Style = {
    //     left: `${scrollPosition * 1.5}px`,
    // };


    const pic3Rotation = {
        transform: `rotate(${scrollPosition * 0.5}deg)`,
    };
    

    return (

        <div>
        <div className="main container" >
            <header>
                <h2 className="logo">Software Engineer</h2>
                <nav className="navigation">
                
                    <a href="#">Send Signal</a>
                </nav>
            </header>
            <section className="parallax" style={parallaxStyle}>
                <h2 id="text">Hello World..!!!</h2>
                <h2 id="textname">Im Akarsh</h2>
                <img src={image1}  id="pic1" style={pic1Style} alt="pic1" />
                {/* <img src={image2} id="pic2" style={pic2Style} alt="pic2" /> */}
                <img src={image3} id="pic3" style={pic3Rotation} alt="pic3" />
            </section>
            
        </div>

</div>


    );
};

export default ParallaxComponent;
