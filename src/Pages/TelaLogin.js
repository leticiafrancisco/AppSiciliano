import React from 'react';
import {StyleSheet, View,TextInput, Alert, Text, TouchableOpacity, Image} from 'react-native';
import firebase from 'firebase';

export default class TelaLogin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            
        }
    }

    //COLETA DE DADOS DE E-MAIL E SENHA
    onChangeEmail(dados){
        this.setState({
            email: dados
        })
    }

    onChangePassword(dados){
        this.setState({
            senha: dados
        })
    }

    tryLogin(){

       try {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then(response => {
                this.props.navigation.replace('Home')
                
            }).catch(error =>{
                console.log('ERRO DE AUTENTICAÇÃO', error.code)
                
                //TRATAMENTO DE ERRO DE USUARIO NÃO ENCONTRADO
                if(error.code === 'auth/user-not-found')
                {
                    Alert.alert
                    (
                        'Usuário não-encontrado',
                        'Verifique se o e-mail a senha estão corretos',
                        [
                            {
                                text:'Tentar novamente',
                                onPress:()=>{
                                    this.props.navigation('Login')
                                }
                            }
                        ]
                    )
                }

            }) 
        } 
        catch(error){
            console.log('ERRO NO TRY ->', error)
           Alert.alert( 
               
               'ALERTA',
               'ERRO NO SERVIDOR DE LOGIN',
                [
                    {
                        text:'OK',
                        onPress:()=> {
                            console.log('CLICOU EM OK')
                         
                        }
                    }
                ]    
           )
        }  

    }

    componentDidMount(){
        //DADOS PARA CONECTAR NO SERVIDOR
        const firebaseConfig = {
            apiKey: "AIzaSyDZCZCLK3tdcUuX9sQs_pERQZbD0Us_N0A",
            authDomain: "appleticiafrancisco.firebaseapp.com",
            projectId: "appleticiafrancisco",
            storageBucket: "appleticiafrancisco.appspot.com",
            messagingSenderId: "1029203030445",
            appId: "1:1029203030445:web:48ec2d9508ab82890db124",
            measurementId: "G-DX4146ZNT3"
        };
        //TESTE DE SEGURANÇA
        if(firebase.apps.length ===0)
        {
            firebase.initializeApp(firebaseConfig);
        }
    
    }



    render(){

        return(

            <View style={styles.container}>
                
                <Image style={styles.imagens} 
                    source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/05/00/32/lemon-25342_960_720.png' }}
                />

                <Text style={styles.texto}>E-mail:</Text>
                <TextInput 
                    onChangeText={dados=>{this.onChangeEmail(dados)}}
                    placeholder="seuemail@gmail.com" 
                style={styles.input}
                />

                <Text style={styles.texto}>Senha:</Text>
                <TextInput
                    placeholder="********" secureTextEntry  
                    onChangeText={dados =>{ this.onChangePassword(dados)}}
                    style={styles.input}
                />      
                
                <TouchableOpacity style = {styles.button} 
                    onPress ={()=>{this.tryLogin()}}
                >
                    <Text style={styles.buttontxt}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.texto}>Não tem uma conta?</Text>
                <TouchableOpacity 
                    onPress ={()=>{this.props.navigation.replace('Cadastro')}}
                >
                    <Text style={styles.links}>Crie uma!</Text>
                </TouchableOpacity>
          </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        color: '#5b5b58',
        marginTop: 10
    },
    input:{
        borderWidth: 1,
        borderColor: '#FFD950',
        padding: 15,
        margin:10,
        width: 350,
        height: 50,
    },
    button:{
        paddingVertical: 15,
        paddingHorizontal:30,
        padding: 10,
        backgroundColor: '#FFD950',
        borderRadius: 20,
      
    },
    buttontxt:{
        fontWeight: 'bold',
        color:'#5b5b58'
    },
    imagens: {
        width: 300,
        height: 300,
        alignItems: 'center',
        marginBottom: 30
    },
    links:{
        
        fontSize:20,
        color:'blue',
    }
  })