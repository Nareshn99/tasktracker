import './App.css';
import { useState, useEffect, useRef } from 'react';
import { uploadFile } from './api';



function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef()

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log(response.path)
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <>
    <div className='headerfor'>Simple file sharing App!</div>
      <div className="wrapper">
        <h1>Share Your File In OneStep😎</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target='_blank' rel="noreferrer">{result}</a>
      </div>
    </>
  );
}

export default App;
