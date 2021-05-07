import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};
export type SubProps = {
  txt: string;
  getExclamationMarks?: ((e: any) => void) | undefined;
  enthusiasmLevel: string;
};

const renderHello: React.FC<SubProps> = ({ txt = '', enthusiasmLevel = '', getExclamationMarks }) => {
  console.log("🚀 ~ file: Hello.tsx ~ line 15 ~ enthusiasmLevel", enthusiasmLevel)
  return <Text style={styles.greeting}>
    Hello {txt}
    {getExclamationMarks(enthusiasmLevel)}
  </Text>
}


const Hello: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = useState(
    baseEnthusiasmLevel
  );

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      {renderHello({ txt: name, enthusiasmLevel, getExclamationMarks })}
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  }
});

export default Hello;