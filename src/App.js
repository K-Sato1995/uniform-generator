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

        <h2 className={styles.introtitle}>使用手順</h2>
        <div className={styles.intro}>
          <ul>
            <li>(1) まずは選手データを持つCSVをアップロード</li>
            <li>(2) 次にユニフォームの画像をアップロード</li>
            <li>(3) ユニフォームの画像の調整</li>
            <li>(4) 最後に作成した画像達をダウンロード</li>
          </ul>
        </div>
        <div className={styles.csvUploadContainer}>
            <h3 className={styles.subtitle}>選手データを持つCSVをアップロード</h3>
            <CSVDropzone onDrop={setPlayerDataList} />
        </div>

        <div className={styles.csvUploadContainer}>
            <h3 className={styles.subtitle}>次にユニフォームの画像をアップロード</h3>
            <input type="file" className={styles.imageUploader} onChange={handleUploadImage} />
        </div>

       {!!playerDataList.length && <div className={styles.designContainer}>
          <div className={styles.designSubContainer}>
            <h3>名前のデザイン調整</h3>
            <span>名前の位置</span>
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
              <span>フォントサイズ(px)</span>
              <input type='number' value={uniformDesign.nameDesign.fontSize} onChange={(e) => {
                const newState = { ...uniformDesign }
                newState.nameDesign.fontSize = e.target.value
                setUniformDesign(newState)
              }}/>
            </div>

            <div className={styles.designSubContainer}>
              <h3>背番号の調整</h3>

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
              <span>フォントサイズ(px)</span>
              <input type='number' value={uniformDesign.numberDesign.fontSize} placeholder="フォントサイズ(px)" onChange={(e) => {
                const newState = { ...uniformDesign }
                newState.numberDesign.fontSize = e.target.value
                setUniformDesign(newState)
              }}/>
            </div>
            <div className={styles.designSubContainer}>
              <h3>フォントカラー</h3>
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
          </div>}

        <div className={styles.exportImagesContainer}>

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

        <h3 className={styles.subtitle}>作成した画像を取得する</h3>
          <button onClick={() => {
            refs.current.map((ref) =>
              exportComponentAsPNG({ current: ref })
            )
          }}>
            画像達をエクスポートする
          </button>
        </div>
      </div>

  )
}

export default App
