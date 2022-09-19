import { Container } from "./styles";
import * as MdIcons from "react-icons/md";
import light from "../../styles/themes/light";

export default function Header({ toggleTheme, theme }) {
  return (
    <Container>
      <div className="container-head">
        <h1>Portfolio</h1>
        {theme === light ? (
          <MdIcons.MdDarkMode className="btn-dark-mode" onClick={toggleTheme} />
        ) : (
          <MdIcons.MdLightMode className="btn-dark-mode" onClick={toggleTheme} />
        )}
        </div>
    </Container>
  );
}
