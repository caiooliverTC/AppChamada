import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Início() {
  return(
    <View style={styles.container}>

      <View style={styles.containerForm}>
      <Text style={styles.title}>Chamada</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    height: 60,
    backgroundColor: "#7159c1"
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -10,
    color: '#ffff'
  }

})