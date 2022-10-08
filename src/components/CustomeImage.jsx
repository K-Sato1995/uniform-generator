import React, { useState } from 'react'
import styles from './custome-image.module.css'

const CustomeImage = React.forwardRef((props, ref) => {
  const { file } = props
  const [playerInfo, setPlayerInfo] = useState({
    name: 'sss',
    uniformNumber: 0
  })

  return (
    <div className={styles.container}>
      <div>{playerInfo.name}</div>
      <button className={styles.container__btn} onClick={() => { setPlayerInfo('test') }}>Click</button>
      <img src={file} ref={ref} alt="player" />
    </div>
  )
})

CustomeImage.displayName = 'CustomeImage'

export default CustomeImage
