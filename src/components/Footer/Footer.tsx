import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://openweathermap.org/api"
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Weather data by OpenWeatherMap
      </a>
    </footer>
  );
};

export default Footer;
