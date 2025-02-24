import { useParams, useNavigate } from "react-router-dom";
import beautyProducts from "./BeautyPersonalCare_data"; // Corrected import

const BeautyPersonalCareDetail = () => {
  const { prod_id } = useParams();
  const navigate = useNavigate();

  const product = beautyProducts.find((item) => item.id == prod_id);

  if (!product) {
    return <h2 className="text-center my-4">Product Not Found</h2>;
  }

  return (
    <div className="d-flex justify-content-around">
      <div className="w-50">
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", height: "400px", objectFit: "cover" }}
        />
      </div>

      <div className="d-flex flex-column justify-content-center w-100 gap-4">
        <div>
          <h2>{product.brand}</h2>
          <h4>&#8377;{product.price.toFixed(2)}</h4>
        </div>

        <div className="border">
          <h3 className="text-center">Specification Details</h3>
          <table className="table">
            <tbody>
              {product.specification.type && (
                <tr>
                  <th>Type</th>
                  <td>{product.specification.type}</td>
                </tr>
              )}
              {product.specification.color && (
                <tr>
                  <th>Color</th>
                  <td>{product.specification.color}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div>
          <button className="btn btn-outline-secondary" onClick={() => navigate("/beauty-personal-care")}>
            Back to Beauty & Personal Care
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeautyPersonalCareDetail;
