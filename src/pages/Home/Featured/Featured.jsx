import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white py-8 my-10">
      <SectionTItle
        subHeading="cheack it out"
        heading="Featured Item"
      ></SectionTItle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-8 px-16">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>aug 20 ,2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            quo deleniti recusandae molestiae consequatur enim possimus ab
            debitis consequuntur sit illo nostrum! Voluptatibus incidunt
            voluptate ad possimus atque, fugit repellat maiores corrupti magni
            totam hic non ex accusamus, veritatis a pariatur rerum dicta?
            Explicabo dicta veniam ab fugit accusamus eaque.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-e-2 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
