import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function DadosCliente({ navigation }){
  return  (
    <View style={styles.container}>
      <View style={styles.form}>
            <Text style={styles.paragraph}>
              CADASTRO
            </Text>
            <TextInput style={styles.inputs} placeholder = "Digite o nome completo"/>
            <TextInput style={styles.inputs} placeholder = "Digite seu e-mail"/>
            <TextInput style={styles.inputs} placeholder = "Digite seu telefone"/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principal')}>
              <Text style={styles.textoButton}>Cadastrar</Text>
           </TouchableOpacity>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
    padding: 0,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#87CEFA',
  },
  form:{
    backgroundColor:'#fff',
    display:'flex',
    alignItems:'center',
    padding:8,
    border: 'none',
    justifyContent: 'center',
    borderRadius:12 ,
    width: 350,
    height: 400,
    shadowColor: "#fff",
  },
  inputs:{
    margin:1,
    padding:10,
    color:'#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #000',
    width: 250,
    borderRadius: 9,
  },
  button:{
    backgroundColor:	'#00FA9A',
    border: 'none',
    top:5,
    height: 30,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
  },
  textoButton:{
    color:'#fff',
    letterSpacing:3,
    fontWeight: 'bold',
 
 },
});