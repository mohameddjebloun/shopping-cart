import { Link } from "react-router-dom";
import heroBg from "../assets/hero.gif";
const Homepage = () => {
  return (
    <div
      className="hero min-h-screen bg-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to our Online Store
          </h1>
          <p className="mb-5">
            Browse our wide selection of clothing, shoes, and accessories to
            find your perfect look. Don't wait, shop now!
          </p>
          <Link to={"./Shop"}>
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
