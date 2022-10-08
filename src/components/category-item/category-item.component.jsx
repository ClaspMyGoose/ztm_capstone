import { useNavigate } from 'react-router-dom';

import { CategoryItemContainer, BackgroundImage, CategoryBodyContainer, CategoryTitle, CTA } from './category-item.styles'; 


const CategoryItem = ({ category }) => {

  
  const { title, imageUrl } = category;
  
  const nav = useNavigate();
  const navToCategoryPage = () => {nav(`/shop/${title.toLowerCase()}`)};

  return (
  <CategoryItemContainer onClick={navToCategoryPage}>
    <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />
    <CategoryBodyContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CTA>Shop Now</CTA>
    </CategoryBodyContainer>
  </CategoryItemContainer>
)}; 

export default CategoryItem