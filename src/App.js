import React, { useState, useRef } from 'react'
import CustomeImage from './components/CustomeImage'
import CSVDropzone from './components/CsvDropzone'
import { exportComponentAsPNG } from 'react-component-export-image'
import styles from './App.module.css'
import { SketchPicker } from 'react-color'

function App () {
  const [file, setFile] = useState(null)

  // INFO: playerData: [playerName, uniformNumber][]
  const [playerDataList, setPlayerDataList] = useState([])

  const refs = useRef([])

  const [uniformDesign, setUniformDesign] = useState({
    nameDesign: {
      top: 70,
      right: 90,
      fontSize: 16
    },
    numberDesign: {
      top: 90,
      right: 90,
      fontSize: 16
    },
    fontColor: '#000000'
  })

  const handleUploadImage = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className={styles.App}>
        <div className={styles.header}>
          <h1>ユニフォームジェネレータ</h1>
        </div>

        <div className={styles.designContainer}>
          <h2>名前の調整</h2>
          <div className={styles.btnlist}>
              <button className={styles.keyup} onClick={() => {
                const newState = { ...uniformDesign }
                newState.nameDesign.top -= 10
                setUniformDesign(newState)
              }}>
                ↑
              </button>

              <button
                className={styles.keyleft}
                onClick={() => {
                  const newState = { ...uniformDesign }
                  newState.nameDesign.right += 10
                  setUniformDesign(newState)
                }}>
                ←
              </button>
              <button className={styles.keydown} onClick={() => {
                const newState = { ...uniformDesign }
                newState.nameDesign.top += 10
                setUniformDesign(newState)
              }}>
                ↓
              </button>

              <button className={styles.keyright}
                onClick={() => {
                  const newState = { ...uniformDesign }
                  newState.nameDesign.right -= 10
                  setUniformDesign(newState)
                }}>
                →
              </button>
            </div>

            <input type='number' value={uniformDesign.nameDesign.fontSize} onChange={(e) => {
              const newState = { ...uniformDesign }
              newState.nameDesign.fontSize = e.target.value
              setUniformDesign(newState)
            }}/>

            <h2>背番号の調整</h2>

            <div className={styles.btnlist}>
              <button className={styles.keyup} onClick={() => {
                const newState = { ...uniformDesign }
                newState.numberDesign.top -= 10
                setUniformDesign(newState)
              }}>
                ↑
              </button>

              <button
                className={styles.keyleft}
                onClick={() => {
                  const newState = { ...uniformDesign }
                  newState.numberDesign.right += 10
                  setUniformDesign(newState)
                }}>
                ←
              </button>
              <button className={styles.keydown} onClick={() => {
                const newState = { ...uniformDesign }
                newState.numberDesign.top += 10
                setUniformDesign(newState)
              }}>
                ↓
              </button>

              <button className={styles.keyright}
                onClick={() => {
                  const newState = { ...uniformDesign }
                  newState.numberDesign.right -= 10
                  setUniformDesign(newState)
                }}>
                →
              </button>
            </div>
            <input type='number' value={uniformDesign.numberDesign.fontSize} onChange={(e) => {
              const newState = { ...uniformDesign }
              newState.numberDesign.fontSize = e.target.value
              setUniformDesign(newState)
            }}/>

            <SketchPicker
              color={ uniformDesign.fontColor }
              onChangeComplete={(color) => {
                setUniformDesign({
                  ...uniformDesign,
                  fontColor: color.hex
                })
              }}
            />
          </div>

          <div className={styles.csvUploadContainer}>
              <h3>(1) まずは選手データを持つCSVをアップロード</h3>
             <CSVDropzone onDrop={setPlayerDataList} />
          </div>

          <div className={styles.csvUploadContainer}>
              <h3>(2) 次にユニフォームの画像をアップロード</h3>
              <input type="file" className={styles.imageUploader} onChange={handleUploadImage} />
          </div>

          <div className={styles.exportImagesContainer}>

          <h3>作成した画像を取得する</h3>
            <button onClick={() => {
              refs.current.map((ref) =>
                exportComponentAsPNG({ current: ref })
              )
            }}>
              画像達をエクスポートする
            </button>
          </div>

          <h2>画像プレビュー</h2>

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
