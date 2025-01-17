const BrandButton = ({ brandStyle, onFilter, children }) => {
    return <button className={brandStyle} onClick={onFilter}>{children}</button>;
  };
  
  export default BrandButton;
  