import ProductCard from "../product-card/product-card.component";
import './product-category.styles.scss';

const ProductCategory = ({ categoryTitle, categoryItems }) => (
  <div className="product-category">
    <h2>{categoryTitle}</h2>
    <div className='products-container'>
      {categoryItems.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        )}
      )}
    </div>
  </div>
  
)


export default ProductCategory