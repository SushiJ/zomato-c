import Navbar from "../components/Navbar/Navbar";
import FoodTab from "../components/FoodTab";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container px-4 mx-auto lg:px-20">{children}</div>
    </div>
  );
};

export default HomeLayout;
