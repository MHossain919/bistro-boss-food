import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";

const Mycart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || My Cart</title>
      </Helmet>
      <div className="uppercase h-[60px] font-semibold flex justify-evenly items-center">
        <h3 className="text-3xl me-3">Totle Items: {cart.length}</h3>
        <h3 className="text-3xl">Totle Price: {total}$</h3>
        <button className="btn btn-worning btn-sm">PAY</button>
      </div>
      {/* show user cart  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mycart;
