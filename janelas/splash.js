import { View , Text, Image, TouchableOpacity, ImageBackground} from 'react-native';





const Splash = ({navigation}) => {
  return(
      <ImageBackground source = {require('../image/imagem_fundo.jpeg')} style={{height:1000}}>
          <View style={{flex: 1,alignSelf: 'center',justifySelf: 'center', paddingVertical:200}}>
              <Image style={{width:300, height:300}} source={require('../image/SpaceAstronomic.png')} />
              <TouchableOpacity onPress={() => navigation.navigate('DadosCliente')}>
                <Text style={{textAlign:'center',  backgroundColor:'#fff',padding:10,color: '#2349AF',width:300,borderRadius:4}}>INICIAR</Text>
              </TouchableOpacity>
          </View>
      </ImageBackground>
    );
}

export default Splash;