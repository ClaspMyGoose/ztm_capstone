import { useNavigate } from 'react-router-dom';

import './category-item.styles.scss'; 


const CategoryItem = ({ category }) => {

  
  const { title, imageUrl } = category;
  
  const nav = useNavigate();
  const navToCategoryPage = () => {nav(`/shop/${title.toLowerCase()}`)};

  return (
  <div onClick={navToCategoryPage}  className="category-item-container">
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
)}; 

export default CategoryItem