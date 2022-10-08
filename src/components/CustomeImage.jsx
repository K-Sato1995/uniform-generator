import React, { useState } from 'react'

const CustomeImage = React.forwardRef((props, ref) => {
    const { file } = props;
    const [playerInfo, setPlayerInfo] = useState({
        name: '',
        uniformNumber: 0
    });

    return <div><img src={file} ref={ref} alt="player"/></div>;
});

export default CustomeImage;
