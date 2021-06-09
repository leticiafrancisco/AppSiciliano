import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

//IMPORT DA TELA DAS TELAS
import TelaLogin from './src/Pages/TelaLogin';
import TelaHome from './src/Pages/TelaHome';
import TelaCadastro from './src/Pages/TelaCadastro';

const AppRotas = createStackNavigator({

  'Login':{
    screen: TelaLogin,
    navigationOptions: () => {
      return ({
        title: 'Siciliano'
      })
    }
  },

  'Home':{
    screen: TelaHome,
    navigationOptions: () => {
      return ({
        title: 'Home'
      })
    }
  },

  'Cadastro':{
    screen: TelaCadastro,
    navigationOptions: () => {
      return ({
        title: 'Cadastro'
      })
    }
  }
    

},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#FFD950'
    },
  
    headerTitleStyle: {
      color: '#5b5b58',
      fontSize: 30,
      // flexGrow: 1,
      textAlign: 'center'
    }
   
  }
})

const AppContainer = createAppContainer(AppRotas);

export default AppContainer;
