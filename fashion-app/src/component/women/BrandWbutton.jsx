const BrandWbutton = ({ brandStyle, onFilter, children }) => {
    return <button className={brandStyle} onClick={onFilter}>{children}</button>;
  };
  
  export default BrandWbutton;
  