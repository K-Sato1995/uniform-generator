import React from 'react'
import styles from './custome-image.module.css'

const PLAYER_NAME_INDEX = 0
const PLAYER_NUMBER_INDEX = 1

const CustomeImage = React.forwardRef((props, ref) => {
  const { file, playerData, uniformDesign } = props

  const { nameDesign, numberDesign, fontColor } = uniformDesign
  return (
    <>

    <div className={styles.container} ref={ref}>
      <div className={styles.playerName}
        style={{
          top: nameDesign.top,
          right: nameDesign.right,
          fontSize: `${nameDesign.fontSize}px`,
          color: fontColor
        }}
      >{playerData[PLAYER_NAME_INDEX]}</div>

      <div className={styles.playerNumber} style={{
        top: numberDesign.top,
        right: numberDesign.right,
        fontSize: `${numberDesign.fontSize}px`,
        color: fontColor
      }}>{playerData[PLAYER_NUMBER_INDEX]}</div>
      <img src={file} alt="player" className={styles.playerImage}/>
    </div>
    </>
  )
})

CustomeImage.displayName = 'CustomeImage'

export default CustomeImage
