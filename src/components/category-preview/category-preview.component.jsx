import './category-preview.styles.scss'; 
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';



const CategoryPreview = ({ items, title }) => {
  const nav = useNavigate();
  const navToPage = () => {
    nav(`/shop/${title.toLowerCase()}`)
  }


  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title' onClick={navToPage}>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <ProductCard key={item.id} product={item} />
          })
        }
      </div>
    </div>
  )

}

export default CategoryPreview;