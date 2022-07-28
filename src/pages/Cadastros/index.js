import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Cadastro () {

  // constante da modal
  const [isModalVisible, setModalVisible] = useState(false);

  const [text, onChangeText] = React.useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // constante checkbox
  // masculino
  const [isSelected, setSelection] = useState(false);
  // Feminino
  const [isSelectedF, setSelectionF] = useState(false);
  // Professor
  const [isSelectedP, setSelectionP] = useState(false);


  return(
    <View style={styles.container}>

      <View>
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
            <Text style={styles.titleModal}>Inserir novo cadastro</Text>
          </View>
          
          <View style={styles.borderDate}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Nome"
              maxLength={20}  
            />
          </View>
                  
          <View style={styles.borderTurma}>
            <TouchableOpacity>
              <Text style={styles.buttonTurm}>Turma</Text>
            </TouchableOpacity>
          </View>
          
          
          <View style={{marginEnd: 230}}>
            <BouncyCheckbox
              style={{ marginTop: 5}}
              fillColor="#7159c1"
              text="Masculino"
              status={isSelected ? 'checked' : 'unchecked'}
              onPress={() => {
                setSelection(!isSelected);
              }}
              
            />
          </View>

          <View style={{marginEnd: 0}}>
            <BouncyCheckbox
              style={{ marginTop: -25}}
              fillColor="#7159c1"
              text="Feminino"
              onValueChange={setSelectionF}
              status={isSelectedF ? 'checked' : 'unchecked'}
              onPress={() => {
                setSelectionF(!isSelectedF);
              }}
            />
          </View>
          
          <View style={{marginEnd: -230}}>
            <BouncyCheckbox
              style={{ marginTop: -25}}
              fillColor="#7159c1"
              text="Professor"
              onValueChange={isSelectedP}
              status={isSelectedF ? 'checked' : 'unchecked'}
              onPress={() => {
                setSelectionP(!isSelectedP);
              }}
            />
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
    height: 230,
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
    borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: '#fff'
   },
   //titulo da seleção da data
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
    marginHorizontal: 10,
   },
   buttonTurm: {
    fontSize: 17,
    color: "#A5A5A5",
    marginTop: 7,
    marginHorizontal: 10
   },
   // borda da view aula
   borderTurma:{
    borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginVertical: 5,
    backgroundColor: '#fff'
   },
   //titulo da seleção da aula
   aulaTitle:{
    marginHorizontal: 20,
    marginVertical: 8,
    fontSize: 17,
    color: '#A5A5A5'
   },
   // view do botão cadastrar
   containerButton: {
    marginTop: 10,
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
