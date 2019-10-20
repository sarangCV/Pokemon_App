import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Landing extends React.Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style = {styles.container}>
                <Image source = {require("../assets/icons/pokeTitle.png")} style = {styles.pokeImage}/>
                    <View style = {styles.viewStyle}>
                        <Image source = {require("../assets/icons/pokeBody.png")} style = {styles.pokeBodyImage}/>
                        <TouchableOpacity 
                            style = {styles.button}
                            onPress = {() => this.props.navigation.navigate('Search')}
                        >
                            <Text style = {styles.buttonTextPre}>START
                            <Text style = {styles.buttonTextPost}>SEARCH</Text>
                            </Text>

                        </TouchableOpacity>

                    </View>
              
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems:'center',
        backgroundColor: '#f1f3f4',
        
    },
    pokeImage: {
        width: 400,
        height: 150,
    },
    viewStyle: {
        alignItems: 'center',
        marginTop: 50,
        paddingTop:50,
        backgroundColor: 'white',
        width:425,
        height: 520,
        backgroundColor: '#f1f3f4',
        elevation: 10
      
        
       
    },
    button: {
        borderWidth: 3,
        borderColor: '#306ab2',
        borderRadius: 8,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 160,
        backgroundColor: '#ffcb05',
        marginTop: 50
    },
    buttonTextPre: {
        color: '#306ab2',
        fontWeight:'bold' 
    },
    buttonTextPost: {
        color: '#bd3736',
        fontWeight:'bold' 
    },
    
    pokeBodyImage: {
        width: 350,
        height: 270,
        padding: 0,
        
    }
})
