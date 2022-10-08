import React, { useState, useRef } from 'react'
import CustomeImage from './components/CustomeImage'
import CSVDropzone from './components/CsvDropzone'
import { exportComponentAsPNG } from 'react-component-export-image'
import styles from './App.module.css'

function App () {
  const [file, setFile] = useState(null)

  // INFO: playerData: [playerName, uniformNumber][]
  const [playerDataList, setPlayerDataList] = useState([])

  const refs = useRef([])

  const [uniformDesign, setUniformDesign] = useState({
    namePosition: {
      top: 0,
      right: 0
    },
    numberPosition: {
      top: 0,
      right: 0
    },
    fontColor: '#000000'
  })

  const handleUploadImage = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className={styles.App}>

        <h2>名前の調整</h2>
        <div className={styles.btnlist}>
            <button className={styles.keyup} onClick={() => {
              const newState = { ...uniformDesign }
              newState.namePosition.top -= 10
              setUniformDesign(newState)
            }}>
              ↑
            </button>

            <button
               className={styles.keyleft}
               onClick={() => {
                 const newState = { ...uniformDesign }
                 newState.namePosition.right += 10
                 setUniformDesign(newState)
               }}>
              ←
            </button>
            <button className={styles.keydown} onClick={() => {
              const newState = { ...uniformDesign }
              newState.namePosition.top += 10
              setUniformDesign(newState)
            }}>
              ↓
            </button>

            <button className={styles.keyright}
              onClick={() => {
                const newState = { ...uniformDesign }
                newState.namePosition.right -= 10
                setUniformDesign(newState)
              }}>
              →
            </button>
          </div>

          <h2>背番号の調整</h2>

          <div className={styles.btnlist}>
            <button className={styles.keyup} onClick={() => {
              const newState = { ...uniformDesign }
              newState.numberPosition.top -= 10
              setUniformDesign(newState)
            }}>
              ↑
            </button>

            <button
               className={styles.keyleft}
               onClick={() => {
                 const newState = { ...uniformDesign }
                 newState.numberPosition.right += 10
                 setUniformDesign(newState)
               }}>
              ←
            </button>
            <button className={styles.keydown} onClick={() => {
              const newState = { ...uniformDesign }
              newState.numberPosition.top += 10
              setUniformDesign(newState)
            }}>
              ↓
            </button>

            <button className={styles.keyright}
              onClick={() => {
                const newState = { ...uniformDesign }
                newState.numberPosition.right -= 10
                setUniformDesign(newState)
              }}>
              →
            </button>
          </div>

          <CSVDropzone onDrop={setPlayerDataList} />

          <button onClick={() => {
            refs.current.map((ref) =>
              exportComponentAsPNG({ current: ref })
            )
          }}>画像達をエクスポートする</button>

          <h2>画像プレビュー</h2>

          <input type="file" onChange={handleUploadImage} />

          <div className={styles.imageContainer}>
            {playerDataList.map((playerData, index) => {
              return (
                <CustomeImage
                  key={index}
                  file={file}
                  uniformDesign={uniformDesign}
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
