import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import {ListItem, List} from 'native-base';


export default class Butterfree extends Component {
static navigationOptions = {
    header: null
}
state = {
        isLoading: true,
        data: {},
        pokeSearch: `https://pokeapi.co/api/v2/pokemon/${this.props.navigation.state.params.value.toLowerCase()}`,
        idData: {}
    }


componentWillMount(){
    var self = this;
    axios.get(`${this.state.pokeSearch}`)
    .then(function(response){
        self.setState({data:response.data});
    })
    .catch(function(error){
        console.log(error)
    })
    
}

idGenerator = () =>{
  var self = this;
  axios.get(`https://pokeapi.co/api/v2/ability/${this.state.data.id}`)
  .then(function(response){
     
      self.setState({idData:response.data});
  })
  .catch(function(error){
      console.log(error)
  })
}



  render() {
    return (
    
      <ScrollView style = {styles.container}>
        {this.idGenerator()}

           <View style = {styles.imageView}>
                  <Image source = {require('../assets/icons/charecters/butterfree.png')} style = {styles.img} resizeMode='contain'/>  
            </View>
            <View style = {styles.dataView}>
                   
                <Text style={styles.header}>#{this.state.data.id} - {this.state.data.name} </Text>

                <ListItem itemDivider>
                    <Text>Size</Text>
                </ListItem>
                    <ListItem>
                        <Text>Weight - {this.state.data.weight}kg</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Height - {this.state.data.height/10}m</Text>
                    </ListItem>
                <ListItem itemDivider>
                    <Text>Abilities</Text>
                </ListItem>
                <List 
                      dataArray={this.state.data.abilities}
                      renderRow={(item)=> 
                          <ListItem>
                              <Text>{item.ability.name}</Text>
                              
                          </ListItem>
                          
                          
                      }
                  >
                  </List>

                <ListItem itemDivider>
                    <Text>Effects</Text>
                </ListItem>

                  <List 
                      dataArray={this.state.idData.effect_entries}
                      renderRow={(item)=> 
                          <ListItem>
                              <Text>{item.effect}</Text>
                              
                          </ListItem>
                          
                          
                      }
                  >
                  

                  </List>
                  
                  
                  
                                  
                                  
              </View>
           
           
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#c7ecee',
    flex: 1
  },
  imageView: {
      height: 250,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#f1f3f4',
      elevation: 5,
      borderRadius: 10,
  },
  dataView: {
      
      backgroundColor: '#c7ecee',
      height:600,
      width:'100%'

      
  },
  img: {
    flex: 1,
    
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#306ab2'
  }
})