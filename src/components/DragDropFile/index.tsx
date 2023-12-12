import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { Container } from './styles';
import { Upload } from 'phosphor-react'

import { getData } from '../../services/api';

export function DragDropFile() {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(undefined)

    const inputRef = useRef(null)

    const handleDrag = function (e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            handleFiles(e.dataTransfer.files[0]);
        }
    };

    const handleChange = function (e: ChangeEvent) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // at least one file has been selected so do something
            handleFiles(e.target.files[0]);
        }
    };

    const handleFiles = (file) => {
        console.log(file)
        setFile(file)
    }

    const onButtonClick = () => {
        inputRef.current && inputRef.current.click();
    };

    return (
        <Container className="form-file-upload" onDragEnter={handleDrag}>
            <input ref={inputRef} type="file" accept='.mp3, .wav' name="input-file-upload" className="input-file-upload" multiple={true} onChange={handleChange} />
            <label className="label-file-upload" htmlFor="input-file-upload">
                <Upload size={64} />
                <audio src="" controls>
                    <source src='' id='src' />
                </audio>
                <p>{file ? file.name : "Arraste e solte seu arquivo ou"}</p>
                <button className="upload-button" onClick={onButtonClick}>UPLOAD</button>
            </label>
            {dragActive && <div className="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
        </Container>
    );
};