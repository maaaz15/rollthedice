import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [image, setImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log(randomNum);

    switch (randomNum) {
      case 1:
        setImage(DiceOne)
        break;
      case 2:
        setImage(DiceTwo)
        break;
      case 3:
        setImage(DiceThree)
        break;
      case 4:
        setImage(DiceFour)
        break;
      case 5:
        setImage(DiceFive)
        break;
      case 6:
        setImage(DiceSix)
        break;
      default:
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={image}/>
      <Pressable
      style={styles.rollDiceButton}
      onPress={rollDice}
      >
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2'
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200
  },
  rollDiceButton: {
    width: 180,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#BB2CD9',
    marginTop: 30,
  },
  rollDiceBtnText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
});

export default App;
