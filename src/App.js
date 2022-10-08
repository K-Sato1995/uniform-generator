import React, { useState, useRef } from 'react'
import CustomeImage from './components/CustomeImage'
import CSVDropzone from './components/CsvDropzone'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'
import './App.css'

function App () {
  const componentRef = useRef()
  const [file, setFile] = useState(null)

  const arr = [1, 2, 3]
  const refs = useRef([])

  const handleChange = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className="App">
          <CSVDropzone onDrop={(result) => {
            console.log('in main', result)
          }} />

          <button onClick={() => exportComponentAsJPEG(componentRef)}>JPEGでエクスポート</button>
          <button onClick={() => {
            refs.current.map((ref) =>
              exportComponentAsPNG({ current: ref })
            )
          }}>PNGでエクスポート</button>

          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />

          {arr.map((item, index) => {
            return (
              <CustomeImage
                key={index}
                file={file}
                name={item}
                ref={(element) => {
                  console.log(element)
                  refs.current[index] = element
                }}
              />
            )
          })}
      </div>

  )
}

export default App
