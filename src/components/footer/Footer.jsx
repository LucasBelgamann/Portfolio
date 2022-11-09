import { ContainerFooter } from "./stylesFooter";

function Footer() {
  return (
    <ContainerFooter>
      <div className="container-footer">
        <form
          className="container-form"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <div className="inputs">
            <h2 id="contact">Contact me</h2>
            <input type="name" name="name" placeholder="Type your name" />
            <textarea placeholder="type your message" name="message" />
            <input
              type="hidden"
              name="accessKey"
              value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="https://agostinhoportfolio.vercel.app/ "
            ></input>
          </div>
          <div className="btns">
            <button type="submit">Submit</button>
            <button type="button">
              <a href="/curriculo.pdf" download>Download CV</a>
            </button>
          </div>
        </form>
        <div>
          <a href="https://github.com/LucasBelgamann">
            <picture>
              <img src="/images/git.png" alt="git-icon" />
            </picture>
          </a>
          <a href="https://www.linkedin.com/in/lucas-gabriel-belgamann-2b0497174/">
            <picture>
              <img src="/images/linkedin.png" alt="linkedin-icon" />
            </picture>
          </a>
        </div>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
