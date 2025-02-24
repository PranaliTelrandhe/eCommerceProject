import { useParams, useNavigate } from "react-router-dom";
import homeLivingProducts from "../Home&Living/HomeLiving_data"; // Corrected Import Path

const HomeLivingDetail = () => {
  const { prod_id } = useParams();
  const navigate = useNavigate();

  const product = homeLivingProducts.find((item) => item.id == prod_id);

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
              {product.specification.material && (
                <tr>
                  <th>Material</th>
                  <td>{product.specification.material}</td>
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
          <button className="btn btn-outline-secondary" onClick={() => navigate("/home-living")}>
            Back to Home & Living Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLivingDetail;
