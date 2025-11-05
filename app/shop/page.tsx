import { Container } from "../_components/Container";
import ProductList from "../_components/ProductList";

const Shop = () => {
  return (
    <Container>
      <div className="grid gap-5 grid-cols-5">
        <ProductList />
      </div>
    </Container>
  );
};

export default Shop;
