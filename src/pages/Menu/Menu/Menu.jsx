import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import MenuCategori from "../MenuCategori/MenuCategori";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* menu cover  */}
      <SectionTItle
        subHeading="Don't Miss"
        heading="Todays Offers"
      ></SectionTItle>
      {/* offered menu item  */}
      <MenuCategori items={offered}></MenuCategori>
      {/* dessert menu item  */}
      <MenuCategori
        items={dessert}
        title="dessert"
        coverImg={dessertImg}
      ></MenuCategori>
      {/* Pizza menu item  */}
      <MenuCategori
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
      ></MenuCategori>
      {/* Salad menu item  */}
      <MenuCategori
        items={salad}
        title="salad"
        coverImg={saladImg}
      ></MenuCategori>
      {/* Soup menu item  */}
      <MenuCategori items={soup} title="soup" coverImg={soupImg}></MenuCategori>
    </div>
  );
};

export default Menu;
