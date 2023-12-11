import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  padding: 2rem;
  
  .buttonsContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    gap: 1rem;
    border-bottom: 1px solid #282828;

    button {
      padding: .5rem 1rem;
      border-radius: 50px;
      border: none;
    }

    .selected {
      border: 2px solid #f7e4b5;
      color: #fff;
      background-color: #C9AD65;
    }
  }

  

  .pageContainer {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;