import { Footer as Fel } from "./styles";

const Footer = ({ copyright }) => {
  return (
    <Fel>
      <div class="footer__social-icons">
        <a
          href="https://www.linkedin.com/in/connorbailes/"
          class="footer__link"
          target="_blank"
        >
          <img
            src="./icons/linkedin.svg"
            alt="linked in"
            class="footer__icon"
          />
        </a>
        <a
          href="https://github.com/smartbadger"
          class="footer__link"
          target="_blank"
        >
          <img
            src="./icons/github.svg"
            alt="git hub"
            class="footer__icon"
          />
        </a>
        <a
          href="https://codepen.io/connorbailes/"
          class="footer__link"
          target="_blank"
        >
          <img
            src="./icons/codepen.svg"
            alt="code pen"
            class="footer__icon"
          />
        </a>
        <p class="footer__text">{copyright}</p>
      </div>
    </Fel>
  );
};

export default Footer;
