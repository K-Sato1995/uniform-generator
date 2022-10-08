import React from 'react'
import styles from './custome-image.module.css'

const PLAYER_NAME_INDEX = 0
const PLAYER_NUMBER_INDEX = 1

const CustomeImage = React.forwardRef((props, ref) => {
  const { file, playerData, uniformDesign } = props

  const { namePosition, numberPosition, fontColor } = uniformDesign
  return (
    <>

    <div className={styles.container} ref={ref}>
      <div className={styles.playerName}
        style={{
          top: namePosition.top,
          right: namePosition.right,
          color: fontColor
        }}
      >{playerData[PLAYER_NAME_INDEX]}</div>

      <div className={styles.playerNumber} style={{
        top: numberPosition.top,
        right: numberPosition.right,
        color: fontColor
      }}>{playerData[PLAYER_NUMBER_INDEX]}</div>
      <img src={file} alt="player" className={styles.playerImage}/>
    </div>
    </>
  )
})

CustomeImage.displayName = 'CustomeImage'

export default CustomeImage
