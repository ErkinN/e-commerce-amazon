import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;
  return (
    <Card className="product" key={product.slug}>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.image} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
