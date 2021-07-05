import styled from 'styled-components';
import React from 'react'; 
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`; 
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Products() {
  return (
    <> 
    <Container>
      <Button>Add new</Button>
    </Container>
    </>
  );
}

export default Products;