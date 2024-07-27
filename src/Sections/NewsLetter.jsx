import "../App.css"
import bannerBackground from "../assets/Background-2.jpg";

function NewsLetter() {
  return (
    <section className="banner-center">
        <img
          src={bannerBackground}
          alt="Background Image"
          className="bannerBackground"
        ></img>
      <div className="newsLetter-text">
        <p className="heading3">join Our Exclusive Newsletter</p>
        <p className="small">
          Get exclusive food offers when you join our newsletter
        </p>

        <div className="input">
          <input type="text" placeholder="yourmail@gmail.com"></input>
          <button className="send">Send</button>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;
