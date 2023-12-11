import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    border-bottom: 2px solid #6b6b6b;
    padding: .5rem;
  }

  form {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    gap: 2rem;
    width: 100%;

    .songInfo {
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      flex-grow: 2;
      width: 100%;
    }

    .uploadContainer {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;

      button[type="submit"] {
        cursor: pointer;
        background-image: linear-gradient(90deg, #A68748 0%, #C9AD65 47.92%, #A68748 100%);
        font-size: 1.375rem;
        padding: 0.675rem;
        border-radius: 5px;
        margin-top: 2rem;
        transition: 300ms;

        &:hover {
          filter: brightness(1.15);
        }
      }
    }
  }

  @media (max-width: 720px) {
    form {
      flex-direction: column;

      .uploadContainer {
        margin-top: 0;
      }
    }
  }
`;