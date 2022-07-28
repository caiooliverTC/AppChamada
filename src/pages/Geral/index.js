import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

export default function Início() {
  return(
    <View style={styles.container}>

      <View style={styles.containerForm}>
      <Text style={styles.title}>Chamada</Text>
      </View>


      <Modal>
        <View style={styles.Submodal}>
          <Text> Modal</Text>
        </View>
      </Modal>

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
  },
  Submodal: {
    alignItems: 'center',
    height: 200,
    width: 365,
    marginTop: 0,
    marginHorizontal: -10,
    borderRadius: 15,
    backgroundColor: '#000'
   },

})