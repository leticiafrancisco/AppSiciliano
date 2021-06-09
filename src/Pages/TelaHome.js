import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TelaHome extends React.Component{

    constructor(props)
    {
        super(props)
    }
    render(){
        
        return(
        
            <View style = {styles.container}>
                
                <View>
                    <Text style={styles.texto}>BEM-VINDO AO APP SICILIANO!!</Text>
                </View>

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
      
    },
    buttontxt:{
        fontWeight: 'bold',
        color:'#5b5b58'
    },
})

