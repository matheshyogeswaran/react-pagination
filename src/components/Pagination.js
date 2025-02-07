import { useEffect, useState } from "react";
import { fetchProducts } from "../services/ProductService";
import PaginationControls from "./PaginationControls";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPageNumber] = useState(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const end = (page + 1) * PAGE_SIZE;
  return (
    <div className="App">
      <div>
        <PaginationControls
          page={page}
          noOfPages={noOfPages}
          onPageChange={setPageNumber}
        />
      </div>
      <div className="product-grid">
        {products.length > 0 ? (
          products
            .slice(start, end)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Pagination;
