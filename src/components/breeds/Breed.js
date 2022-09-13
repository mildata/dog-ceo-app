import { Link } from "react-router-dom";

const Breed = ({ breed }) => {
  return (
    <>
      <li>
        <Link to={`breed/${breed}`} >{breed}</Link>
      </li>
    </>
  );
};

export default Breed;
