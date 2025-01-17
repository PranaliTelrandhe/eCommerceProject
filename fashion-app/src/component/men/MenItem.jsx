const MenItem = ({ men }) => {
    if (!men) return <div>Loading...</div>;
  
    return (
      <div className="card" style={{ width: "16rem" }}>
        <img
          className="card-img-top"
          src={men.image || "/assets/images/men1.jpg"}
          alt={men.model}
          style={{ height: "250px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{men.brand} {men.model}</h4>
          <h4 className="card-subtitle">&#8377;{men.price}</h4>
        </div>
      </div>
    );
  };
  
  export default MenItem;
  