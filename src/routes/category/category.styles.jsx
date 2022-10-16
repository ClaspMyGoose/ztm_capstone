import styled from 'styled-components'; 


const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`
export { CategoryContainer, CategoryItems }
