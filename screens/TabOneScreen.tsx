import * as React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function TabOneScreen() {
  const [state, setState] = React.useState(0);
  const buttonClick = () => setState(prevKey => prevKey + 1)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        key={state}
        isPlaying
        duration={10}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000", 0.33]]}
        onComplete={() => [true, 1000]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
      <Button
        onPress={buttonClick}
        title="リセットボタン"
        color="blue"
        accessibilityLabel="リセットボタン"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});

