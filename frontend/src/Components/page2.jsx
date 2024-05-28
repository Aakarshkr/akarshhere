import Plx from 'react-plx';
import bgimage from '../assets/page2/image1.png';
import './page2.css';

function PageSecond() {
  // Define parallax data
  const parallaxData = [
    {
      start: 300,
      end: 2500, // Adjusted end value
      properties: [
        {
          startValue: 0,
          endValue: 4,
          property: 'scale',
        },
      ],
    },
    {
      start: 300,
      end: 2500, // Adjusted end value
      properties: [
        {
          startValue: 5.1,
          endValue: 10,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <div className="outer-div">
      <Plx parallaxData={parallaxData} className="inner-div">
        <div className="image-container">
          <img src={bgimage} alt="Random Image" />
          <div className="text-overlay">
            <h2>Hello, fellow humans! 👽</h2>
            <p>I'm Akarsh KR, a software developer, designer, and software engineer at Magtorq Pvt Ltd. With a passion for solving problems and a knack for creativity, I'm dedicated to crafting innovative solutions that make an impact.</p>
            <p>As a full-stack developer, I'm constantly learning and evolving, honing my skills to tackle challenges head-on. Whether it's front-end design or back-end development, I thrive on the diversity and complexity of the software world.</p>
            <p>In my journey through the digital cosmos, I've come to see developers as a bit like aliens—we're always using the universal "Hello World" as our first contact with new languages and technologies. But hey, it's the perfect way to start exploring new worlds of code!</p>
            <p>Join me as I navigate the ever-expanding universe of software development, one "Hello World" at a time.</p>
          </div>
        </div>
      </Plx>
    </div>
  );
}

export default PageSecond;
