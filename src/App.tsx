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
  const [diceOneImage, setDiceOneImage] = useState<ImageSourcePropType>(DiceOne)
  const [diceTwoImage, setDiceTwoImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOne = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log(randomNum);

    switch (randomNum) {
      case 1:
        setDiceOneImage(DiceOne)
        break;
      case 2:
        setDiceOneImage(DiceTwo)
        break;
      case 3:
        setDiceOneImage(DiceThree)
        break;
      case 4:
        setDiceOneImage(DiceFour)
        break;
      case 5:
        setDiceOneImage(DiceFive)
        break;
      case 6:
        setDiceOneImage(DiceSix)
        break;
      default:
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  const rollDiceTwo = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    console.log(randomNum);

    switch (randomNum) {
      case 1:
        setDiceTwoImage(DiceOne)
        break;
      case 2:
        setDiceTwoImage(DiceTwo)
        break;
      case 3:
        setDiceTwoImage(DiceThree)
        break;
      case 4:
        setDiceTwoImage(DiceFour)
        break;
      case 5:
        setDiceTwoImage(DiceFive)
        break;
      case 6:
        setDiceTwoImage(DiceSix)
        break;
      default:
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  const rollthedice = () => {
    rollDiceOne();
    rollDiceTwo();
  }

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
      <Dice imageUrl={diceOneImage}/>
      <Dice imageUrl={diceTwoImage}/>
      </View>
      <Pressable
      style={styles.rollDiceButton}
      onPress={() => rollthedice()}
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
    flexDirection: 'row',
    margin: 10,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10
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
