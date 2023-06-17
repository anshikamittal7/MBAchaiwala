import React from "react";

const Footer = () => {
  const footerLinks = (elem) => {
    const links = document.querySelectorAll(".footerlinks");
    switch (elem) {
      case 0:
        links.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      case 1:
        links.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      case 2:
        links.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        links.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        links.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        links.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      default:
        links.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>
        <aside >
          <a
            href="home"
            className="footerlinks"
            onMouseOver={() => footerLinks(0)}
            data-cursorpointermini={true}
          >
            HOME
          </a>
          <a
            href="story"
            className="footerlinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}
          >
            STORY
          </a>
          <a
            href="media"
            className="footerlinks"
            data-cursorpointermini={true}
            onMouseOver={() => footerLinks(2)}
          >
            MEDIA
          </a>
          <a
            href="franchise"
            className="footerlinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}
          >
            FRANCHISE
          </a>
          <a
            href="events"
            className="footerlinks"
            onMouseOver={() => footerLinks(4)}
          >
            EVENTS
          </a>
          <a
            href="chaiwalacares"
            className="footerlinks"
            onMouseOver={() => footerLinks(5)}
          >
            CHAI WALA CARES
          </a>
        </aside>
        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com"> info@mbachaiwala.com</a>
          <a href="mailto:  franchise@mbachaiwala.com">
            franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel: +911234521340">+911234521340</a>
        </div>
        <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY ANSHIKA</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
