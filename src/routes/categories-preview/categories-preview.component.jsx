import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategory, selectIsLoading } from "../../store/category/category.selector";
import { CategoriesPreviewWrapper } from "./categories-preview.styles";

const CategoriesPreview = () => {

  const categoryMap = useSelector(selectCategory)
  const isLoading = useSelector(selectIsLoading); 


  return (
    <CategoriesPreviewWrapper>
      { isLoading ? <Spinner /> : Object.keys(categoryMap).map((title) => {
          const items = categoryMap[title];
          return <CategoryPreview key={title} title={title} items={items} />})}
    </CategoriesPreviewWrapper>
  )

}; 


export default CategoriesPreview