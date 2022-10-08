import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles'; 
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';



const CategoryPreview = ({ items, title }) => {
  const nav = useNavigate();
  const navToPage = () => {
    nav(`/shop/${title.toLowerCase()}`)
  }


  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={navToPage}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <ProductCard key={item.id} product={item} />
          })
        }
      </Preview>
    </CategoryPreviewContainer>
  )

}

export default CategoryPreview;