import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../config/Actions";

const Product = ({ getProducts, loading, products }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h2 className="section-title">Hang on, Loading...</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">our products</h2>
      <ul className="products">
        {products.map((item) => {
          return (
            <li key={item.id} className="product">
              <img src={item.url} alt={item.title} />
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Product.propTypes = {
  loading: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};

export default connect(mapStateToProps, { getProducts })(Product);
