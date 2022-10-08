import React from 'react'
import styles from './custome-image.module.css'
// import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image'

const CustomeImage = React.forwardRef((props, ref) => {
  const { file, name } = props
  // const [playerInfo, setPlayerInfo] = useState({
  //   name: 'sss',
  //   uniformNumber: 0
  // })

  return (
    <div className={styles.container} ref={ref}>
      <div>{name}</div>
      {/* <button className={styles.container__btn} onClick={() => { setPlayerInfo('test') }}>Click</button> */}
      <img src={file} alt="player" />
    </div>
  )
})

CustomeImage.displayName = 'CustomeImage'

export default CustomeImage
