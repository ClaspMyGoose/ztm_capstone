import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px; 
  row-gap: 50px;
  margin: 20px 0;
`
