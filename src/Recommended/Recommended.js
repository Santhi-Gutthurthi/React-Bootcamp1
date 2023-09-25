import Button from "../components/Button";
import "./Recommended.css";
//import Products1 from "../Products1"

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        {/* <h2 className="recommended-title">Dresses</h2> */}

        <div className="recommended-flex">
          {/* <Button onClickHandler={handleClick} value="" title="Recommended" /> */}
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          {/* <Button onClickHandler={handleClick} value="Heel" title="For Girls" /> */}
           {/* <Products1/> */}
        </div>
      </div>
    </>
  );
};

export default Recommended;