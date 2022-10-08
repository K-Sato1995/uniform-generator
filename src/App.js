import React, { useState, useRef } from 'react'
import CustomeImage from './components/CustomeImage'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'
import './App.css'

function App () {
  const componentRef = useRef()
  const [file, setFile] = useState()

  const handleChange = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className="App">
          <button onClick={() => exportComponentAsJPEG(componentRef)}>JPEGでエクスポート</button>
          <button onClick={() => exportComponentAsPNG(componentRef)}>PNGでエクスポート</button>

          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />
          <CustomeImage file={file} ref={componentRef} />
      </div>

  )
}

export default App
