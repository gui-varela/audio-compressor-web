import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
  width: 100%;

  label {
    color: #C9AD65;
    font-weight: bold;
    margin-bottom: .5rem;
  }

  input, textarea {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    background-color: #282828;
    border: none;
    padding: 1rem;
    border-radius: 7px;
    text-align: start;
  }

  input::placeholder {
    color: #737373;
  }

  textarea {
    height: 100px;
  }
`;