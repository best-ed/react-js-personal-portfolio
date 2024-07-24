export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            My name is Edwin Lungatso, and I am passionate about technology and its potential to transform lives. With a strong background in cloud computing and networking, I am an incoming Software Engineering Fellow at Headstarter AI. My curiosity extends to the dynamic field of cybersecurity, where I continuously seek to expand my knowledge and skills. Driven by a commitment to innovation and excellence, I am eager to contribute to cutting-edge projects and collaborate with like-minded professionals.
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>  */}
        </div>
      </div>
    </section>
  );
}
