import React from 'react';
import {StyleSheet, View,TextInput, Alert, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default class TelaCadastro extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome:'',
            telefone:'',
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

    tryCadastro(){
        console.log(this.state);
       try{
            firebase
            .auth()
            .createUserWithEmailAndPassword( this.state.email, this.state.senha)
            .then( user => {
                                    
                console.log('USUÁRIO CRIADO COM SUCESSO->', user)
                //NAVEGAÇÃO PARA A TELA DE LOGADO
                this.props.navigation.replace('Home')
            })
            .catch(error => {
                                
                console.log('ERRO AO CRIAR USUÁRIO->', error)
                Alert.alert( 

                    'ALERTA!',
                    'ERRO AO CRIAR USUÁRIO',
                    [
                        {
                            text:'OK',
                            onPress:()=> {
                                console.log('CLICOU EM OK')
                            }
                              
                        }
                    ]
                )
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
                
                <Text style={styles.texto}>Nome Completo:</Text>
                <TextInput 
                    onChangeText={nome =>{this.setState({nome})}}
                    style={styles.input}
                />

                <Text style={styles.texto}>Telefone:</Text>
                <TextInput 
                    onChangeText={telefone =>{this.setState({telefone})}}
                    style={styles.input}
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
                    onPress ={()=>{this.tryCadastro()}}
                >
                    <Text style={styles.buttontxt}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} 
                   onPress ={()=>{this.props.navigation.replace('Login')}}
                >
                    <Text style={styles.buttontxt}>Sair</Text>
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
        marginTop:10
      
    },
    buttontxt:{
        fontWeight: 'bold',
        color:'#5b5b58'
    },
})