
import { useRef, useEffect } from 'react';

import CircularProgress from 'react-native-circular-progress-indicator';
import { useDispatch } from 'react-redux';
import { endGame } from '../store/global';

const Timer = ({ time, stop=false }) => {
    
    const progressRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
      if (stop){
        progressRef.current.pause();
      }
    }, [stop])
    
    const timeOut = () => {
      dispatch(endGame())
    }

    return (
        <CircularProgress
            ref={progressRef}
            value={0}
            radius={50}
            maxValue={time}
            initialValue={time}
            progressValueColor='white'
            strokeColorConfig={[
              { color: 'red', value: 10 },
              { color: 'yellow', value: 20 },
              { color: 'green', value: 30 },
            ]}
            activeStrokeWidth={15}
            inActiveStrokeWidth={15}
            duration={time * 1000}
            onAnimationComplete={() => { timeOut()}}
        />
    );
}

export default Timer;