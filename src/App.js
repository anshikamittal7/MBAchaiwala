import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Other from "./components/Other";

import "./styles/app.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/other.scss";
import "./styles/media.scss";

import data from "./data/data.json"

import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";
import { useEffect } from "react";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {

  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorMini");
    }
    else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorMini");
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", dotCursor)

    return () => {
      window.removeEventListener("mousemove", dotCursor)
    }
  }, [])


  return (
    <div className="App">
      <IntroVideo />
      {/*fresh topic*/}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        hasBtn={true} btnText={freshTopic.btn}
        imgSrc={freshTopicImg}
        bkgclr={pink}
        headingclr={yellow}
        txtclr={yellow}
        btnbgclr={yellow}
        btnclr={pink}
      />
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        hasBtn={true} btnText={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        bkgclr={pink}
        headingclr={yellow}
        txtclr={yellow}
        btnbgclr={yellow}
        btnclr={pink}
      />
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        hasBtn={true} btnText={tedTalks.btn}
        imgSrc={tedTalksImg}
        bkgclr={yellow}
        headingclr={pink}
        txtclr={pink}
        btnbgclr={pink}
        btnclr={yellow}
      />
      <Section
        h3={franchise.heading}
        text={franchise.text}
        hasBtn={true} btnText={franchise.btn}
        imgSrc={franchiseImg}
        bkgclr={white}
        headingclr={pink}
        txtclr={brown}
        btnbgclr={brown}
        btnclr={yellow}
      />
      <Section
        h3={map.heading}
        text={map.text}
        hasBtn={false}
        imgSrc={mapImg}
        bkgclr={pink}
        headingclr={yellow}
        txtclr={yellow}
        btnbgclr={yellow}
        btnclr={pink}
      />
      <Section
        h3={courses.heading}
        text={courses.text}
        hasBtn={true} btnText={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        bkgclr={yellow}
        headingclr={pink}
        txtclr={pink}
        btnbgclr={pink}
        btnclr={yellow}
      />
      <Section
        h3={album.heading}
        text={album.text}
        hasBtn={true} btnText={album.btn}
        imgSrc={albumImg}
        bkgclr={white}
        headingclr={pink}
        txtclr={brown}
        btnbgclr={brown}
        btnclr={yellow}
      />
      <Section
        h3={barat.heading}
        text={barat.text}
        hasBtn={true} btnText={barat.btn}
        imgSrc={baratImg}
        bkgclr={pink}
        headingclr={yellow}
        txtclr={yellow}
        btnbgclr={yellow}
        btnclr={pink}
      />
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        hasBtn={true} btnText={chaiwala.btn}
        imgSrc={chaiWalaImg}
        bkgclr={white}
        headingclr={pink}
        txtclr={brown}
        btnbgclr={brown}
        btnclr={yellow}
      />
      <Footer />
      <Other />
    </div>
  );
}

export default App;
