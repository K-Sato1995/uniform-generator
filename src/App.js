import React, { useState, useRef } from 'react'
import CustomeImage from './components/CustomeImage'
import CSVDropzone from './components/CsvDropzone'
import { exportComponentAsPNG } from 'react-component-export-image'
import styles from './App.module.css'

function App () {
  const [file, setFile] = useState(null)

  // playerData: [playerName, uniformNumber][]
  const [playerDataList, setPlayerDataList] = useState([])

  const refs = useRef([])

  const handleUploadImage = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className={styles.App}>
          <CSVDropzone onDrop={setPlayerDataList} />

          <button onClick={() => {
            refs.current.map((ref) =>
              exportComponentAsPNG({ current: ref })
            )
          }}>画像達をエクスポートする</button>

          <h2>生成された画像達</h2>

          <input type="file" onChange={handleUploadImage} />

          <div className={styles.imageContainer}>
            {playerDataList.map((playerData, index) => {
              return (
                <CustomeImage
                  key={index}
                  file={file}
                  playerData={playerData}
                  ref={(element) => {
                    console.log(element)
                    refs.current[index] = element
                  }}
                />
              )
            })}
          </div>
      </div>

  )
}

export default App
