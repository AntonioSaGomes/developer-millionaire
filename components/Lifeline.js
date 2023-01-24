import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Lifeline = ({answers, correctAnswer}) => {
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [audiencePoll, setAudiencePoll] = useState(false);

  const handleFiftyFifty = () => {
    if(!fiftyFifty) {
        setFiftyFifty(true);
        // code to remove 2 incorrect answers
    }
  };

  const handleAudiencePoll = () => {
    if(!audiencePoll) {
        setAudiencePoll(true);
        // code to show the audience poll results
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.lifelineButton, styles.oval]} onPress={handleFiftyFifty} disabled={fiftyFifty}>
        <Image source={require('./../assets/fifty-fifty.webp')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.lifelineButton, styles.oval]} onPress={handleAudiencePoll} disabled={audiencePoll}>
        <Image source={require('./../assets/audience-poll.webp')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  lifelineButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oval: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  icon: {
    width: 40,
    height: 40,
  }
});
export default Lifeline;