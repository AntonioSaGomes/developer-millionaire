
import { useRef, useEffect } from 'react';

import CircularProgress from 'react-native-circular-progress-indicator';

const Timer = ({ time, stop=false }) => {
    
    const progressRef = useRef(null);

    useEffect(() => {
      if (stop){
        progressRef.current.pause();
      }
    }, [stop])
    

    return (
        <CircularProgress
            ref={progressRef}
            value={0}
            radius={50}
            maxValue={time}
            initialValue={time}
            progressValueColor='blue'
            activeStrokeColor='blue'
            activeStrokeWidth={15}
            inActiveStrokeWidth={15}
            duration={time * 1000}
            onAnimationComplete={() => alert('time out')}
        />
    );
}

export default Timer;