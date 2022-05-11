import { string } from "prop-types";
import "./description.css";

const Description = ({ children }) => <p className="description">{children}</p>;

Description.propTypes = {
  children: string.isRequired,
};

export default Description;
