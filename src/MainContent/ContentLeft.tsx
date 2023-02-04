import mainContentImage from "../assets/images/image-web-3-desktop.jpg";

export default function ContentLeft() {
  return (
    <>
      <img className="main-content-image" src={mainContentImage} alt="1" />
      <div className="main-content-half">The Bright Future of Web 3.0?</div>
      <div className="main-content-half">
        We Drive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </div>
    </>
  );
}
