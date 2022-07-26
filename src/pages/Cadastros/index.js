import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { Checkbox } from 'react-native-paper';

export default function Cadastro () {

  // constante da modal
  const [isModalVisible, setModalVisible] = useState(false);

  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // constante checkbox
  const [checked, setChecked] = React.useState(false);

  return(
    <View style={styles.container}>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Chamada</Text>
      </View>

      <View style={styles.containerBottun}> 
        
        <TouchableOpacity 
          style={styles.button}
          onPress={toggleModal}>
          <Icon style={styles.icon} name="plus" size={25} color='#fff'/>
        </TouchableOpacity>

      </View>  

      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>

        <View style={styles.modalView}>

          <View style={styles.modalTitle}>
            <Text style={styles.titleModal}>Inserir nova turma</Text>
          </View>

          <View style={styles.containerDate}>
            <View style={styles.borderDate}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nome"
              />
            </View>
          </View>

          <View style={styles.containerTurma}>
            <View style={styles.borderTurma}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={text1}
                placeholder="Turma"
              />
            </View>
          </View>
          
          <View style={styles.checkBox}>
            <View style={styles.checkBoxMas}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={styles.checkBoxFem}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
          </View>


          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonCadastrar}>
              <Text style={styles.cadastrarButton}>CADASTRAR</Text>
            </TouchableOpacity>

          </View> 

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
  // Conteiner Button '+' e calendario
  containerBottun: {
    marginHorizontal: 190,
    marginTop: -15
  },
  // Button '+'
  button:{
    backgroundColor: "#7159c1",  
    height: 50,
    width: 50,
    marginHorizontal: 15
  },
  // Icone Button '+'
  icon: {
    marginHorizontal: 15,
    marginTop: 12
  },
  //view da modal
  modalView: {
    alignItems: 'center',
    height: 250,
    width: 365,
    marginTop: 0,
    marginHorizontal: -10,
    borderRadius: 15,
    backgroundColor: '#fff'
   },
   //View titulo da modal
   modalTitle:{
    marginVertical: 12,
   },
   // titulo da modal
   titleModal:{
    fontWeight: 'bold',
    fontSize: 17
   },
   // view selecão da data
   containerDate:{
    borderRadius: 5,
    marginVertical: 1,
    height: 45,
    width: 350,
    backgroundColor: "#A5A5A5",
   },
   // borda da viwe date
   borderDate:{
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: '#fff'
   },
   //titulo da seleção da data
   dateTitle:{
    marginHorizontal: 20,
    marginVertical: 8,
    fontSize: 17,
    color: '#A5A5A5'
   },
   containerexibirDate:{
    height: 45,
    width: 350,
    marginHorizontal:100,
    marginVertical: -5
   },
   exibirDate: {
    marginHorizontal: 150,
    marginVertical: -30,
    fontSize: 17,
    color: '#000'
   },
   // view selecão da Turma
   containerTurma:{
    borderRadius: 5,
    marginVertical: 9,
    height: 45,
    width: 350,
    backgroundColor: "#A5A5A5",
   },
   input: {
    fontSize: 17,
    marginTop: 7,
    marginHorizontal: 10
   },
   // borda da view aula
   borderTurma:{
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: '#fff'
   },
   //titulo da seleção da aula
   aulaTitle:{
    marginHorizontal: 20,
    marginVertical: 8,
    fontSize: 17,
    color: '#A5A5A5'
   },
   // view do checkbox
   checkBox: {
   },
   // view checkbox masculino
   checkBoxMas: {
    marginTop: 1,
    marginHorizontal: 0,
   },
   checkBoxFem:{
    marginTop: -34,
    marginHorizontal: 165,

   },
   // view do botão cadastrar
   containerButton: {
    marginTop: 50,
    marginVertical: 12
   },
   // botão cadastrar
   buttonCadastrar:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height:35,
    width:350,
    backgroundColor: '#7159c1'
   },
   // titulo do botão cadastrar
   cadastrarButton: {
    fontSize: 18,
    color: '#fff'
   },
})
