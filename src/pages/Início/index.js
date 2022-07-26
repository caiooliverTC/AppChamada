import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';


export default function Início() {
  // constante de contagem do numero de aula
  const [number, onChangeNumber] = React.useState(null);

  // constante da modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // constante de exibição de data
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState('');
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn(date);
    hideDatePicker();
  };

  // constante de selecão de data

  return(
    
    <View style={styles.container}>

      <Text style={styles.title}>Chamada</Text>  

      <View style={styles.containerBottun}> 
        
        <TouchableOpacity 
          style={styles.button}
          onPress={toggleModal}>
          <Icon style={styles.icon} name="plus" size={25} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonCale}
        >
          <Icon style={styles.iconCale} name="calendar" size={23} color='#fff'/>
        </TouchableOpacity>
      </View>  

      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>

          <View style={styles.modalTitle}>
            <Text style={styles.titleModal}>Inserir nova aula</Text>
          </View>

          <View style={styles.containerDate}>
            <View style={styles.borderDate}>
              <Text style={styles.dateTitle}>Data da aula</Text>
            </View>
            <View style={styles.containerexibirDate}>
              <Text style={styles.exibirDate} onPress={showDatePicker}>exibir</Text>
            </View>
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <View style={styles.containerAula}>

            <View style={styles.borderAula}>
              <Text style={styles.aulaTitle}>Número da aula</Text>
            </View>

            <View style={styles.viewInput}>
              <TextInput
                style={styles.inputNumber}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Nº"
                keyboardType="numeric"
                maxLength={2}
              />
            </View>

          </View>
          
          <View style={styles.containerButton}>

            <TouchableOpacity style={styles.buttonCadastrar} >
              <Text style={styles.cadastrarButton}>CADASTRAR</Text>
            </TouchableOpacity>

          </View>
          
        </View>

      </Modal>
    </View>
    
  );
}

/** Estilizção das Views/modal/button/title */
const styles = StyleSheet.create({
  // Container da Pagina
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    height: 60,
    backgroundColor: "#7159c1"
  },
  // Titulo do Container
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
  // Button calendario
  buttonCale: {
    marginHorizontal: -30,
    marginTop: -50,
    backgroundColor: "#7159c1",  
    height: 50,
    width: 50 
  },
  // Icone Calendario
  iconCale: {
    marginHorizontal: 10,
    marginTop: 12
  },
  //view da modal
  modalView: {
    alignItems: 'center',
    height: 200,
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
   // view selecão da aula
   containerAula:{
    borderRadius: 5,
    marginVertical: 10,
    height: 45,
    width: 350,
    backgroundColor: "#A5A5A5",
   },
   viewInput: {
    marginVertical: -37,
    marginHorizontal: 300,
    height: 45,
    width: 350,
   },
   inputNumber: {
    fontSize: 20
    
   },
   // borda da view aula
   borderAula:{
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
   // view do botão cadastrar
   containerButton: {
    marginTop: -1,
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