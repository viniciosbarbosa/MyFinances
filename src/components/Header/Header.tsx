import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderComponent from "../style/HeaderComponet";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <FontAwesomeIcon icon={faSackDollar} size="2x" color="#4ae081" />
        <h2>My Finances</h2>
      </HeaderComponent>
    </>
  );
};

export default Header;
