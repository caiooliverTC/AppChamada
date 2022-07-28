import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

export default function Início() {
  // constante da modal
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // constante sub modal
  const [isSubModalVisible, setSubModalVisible] = useState(false);

  const toggleSubModal = () => {
    setSubModalVisible(!isSubModalVisible);
  };

  const [text, onChangeText] = React.useState(null);

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

          <View style={styles.borderDate}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Nome da turma"
              maxLength={20}
            />
          </View>
          
          <View style={styles.containerFax}>
            <TouchableOpacity>
              <Text style={styles.buttonTurm} onPress={toggleSubModal} >Faixa etária</Text>
            </TouchableOpacity>
          </View>
         
          
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonCadastrar} >
              <Text style={styles.cadastrarButton}>CADASTRAR</Text>
            </TouchableOpacity>
          </View> 

        </View>

      </Modal>

      <Modal isVisible={isSubModalVisible} onBackdropPress={() => setSubModalVisible(false)}>
        <View style={styles.Submodal}>
          
          <Text style={styles.titleFax}>Faixa etária</Text>

          <View style={styles.select}>
            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Berçário</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Maternal</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Jardim de Infância</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Primários</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Juniores</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Pré Adolescentes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Juvenis</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Jovens</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Adultos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ButtonFax}>
              <TouchableOpacity>
                <Text style={styles.Fax} onPress={toggleSubModal}>Coordenação</Text>
              </TouchableOpacity>
            </View>

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
    borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginTop: -5,
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
   input: {
    fontSize: 17,
    marginTop: 7,
    marginHorizontal: 10
   },
   buttonTurm: {
    fontSize: 17,
    color: "#A5A5A5",
    marginTop: 7,
    marginHorizontal: 10
   },
   // borda da view aula
   containerFax:{
    borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 5,
    height: 43,
    width: 347.5,
    marginHorizontal: 1,
    marginVertical: 10,
    backgroundColor: '#fff'
   },
   // view do botão cadastrar
   containerButton: {
    marginTop: 5,
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
   // container Submodal
   Submodal: {
    alignItems: 'center',
    height: 400,
    width: 365,
    marginTop: 0,
    marginHorizontal: -10,
    borderRadius: 15,
    backgroundColor: '#FFF'
   },
   // titulo da modal
   titleFax: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
   },
   //view dos buttons
   select: {
    marginTop: 5,
   },
   // conteiner do button
   ButtonFax:{
    borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginVertical: 2,
    height: 30,
    width: 350,
    backgroundColor: "#fff",
   },
   //titulo do button
   Fax: {
    fontSize: 20,
    color: "#000",
    marginTop: -1,
    marginHorizontal: 10
   },
})