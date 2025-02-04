import { useParams, useNavigate } from "react-router-dom";
import kidProducts from "../kids/Kid_data";

const KidDetail = () => {
  const { prod_id } = useParams();
  const navigate = useNavigate();

  const product = kidProducts.find((item) => item.id == prod_id);

  return (
    <div className="d-flex justify-content-around">
      <div className="w-50">
        <img
          src={product.image}
        alt={product.name}
          style={{ width: "300px", height: "400px" }}
        />
      </div>

      <div className="d-flex flex-column justify-content-center w-100 gap-4">
        <div>
          <h2>
            {product.brand} 
          </h2>
          <h4>&#8377;{product.price.toFixed(2)}</h4>
        </div>
        <div className="border">
          <h3 className="text-center">Specification Details</h3>
          <table className="table">
            <tbody>
              {product.specification.size && (
                <tr>
                  <th>Size</th>
                  <td>{product.specification.size}</td>
                </tr>
              )}
              <tr>
                <th>Material</th>
                <td>{product.specification.material}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{product.specification.color}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="btn btn-outline-secondary" onClick={() => navigate("/kids")}>
            Back to Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidDetail;
