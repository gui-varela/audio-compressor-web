import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .form-file-upload {
        text-align: center;
    }

    .input-file-upload {
        display: none;
    }

    .label-file-upload {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1.375rem;
        padding: 2rem;
        align-items: center;
        justify-content: center;
        border-width: 2px;
        border-radius: 1rem;
        border-style: dashed;
        border-color: #282828;

        p  {
            color: #8b8b8b;
        }

        svg {
            color: #494949;
        }
    }

    .upload-button {
        cursor: pointer;
        padding: 1rem;
        font-size: 1rem;
        border: none;
        width: 220px;
        border-radius: 5px;
        background-color: #494949;
        letter-spacing: .1rem;
        transition: .3s;
    }

    .upload-button:hover {
        background-color: #353535;
    }

    .drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
`;