import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default class Search extends React.Component{
    static navigationOptions = {
        header: null,
        
    }
state = {
    pokeSearch: ""
}
    render(){
       
        return(

            <View style = {styles.container}>
                
                <View style = {styles.header}>
                    <Icon name = "search" size = {25}/>
                    <TextInput
                        style = {styles.inputStyle}
                        value={this.state.pokeSearch}
                        placeholder = "Search for a Charecter"
                        returnKeyType = "search"
                        onSubmitEditing = {() =>this.props.navigation.navigate(`${this.state.pokeSearch}`,{value:this.state.pokeSearch})}
                        onChangeText = {(pokeSearch) => {this.setState({pokeSearch})}}
                        />
                </View>
                <ScrollView style = {{flex: 1, width: '100%',height: '100%', backgroundColor: '#c7ecee'}}>
                    <View style = {{flexDirection:'row', alignItems: 'center',justifyContent: 'center'}}>
                        <View style = {{ paddingHorizontal: 5, backgroundColor: 'transparent'}}>
                        <TouchableOpacity style = {styles.cardView} onPress = {() => this.props.navigation.navigate('Pikachu',{value:"pikachu"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/pikachu.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Pikachu</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Charmander',{value:"charmander"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/charmander.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Charmander</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Beedrill',{value:"beedrill"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/beedrill.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Beedrill</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Ekans',{value:"ekans"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/ekans.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Ekans</Text>   
                                </View>
                            </TouchableOpacity>
                            
                        </View>


                        <View style = {{ paddingHorizontal: 5}}>
                        <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Blastoise',{value:"blastoise"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/blastoise.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Blastoise</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Bulbasaur',{value:"bulbasaur"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/bulbasaur.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Bulbasaur</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Butterfree',{value:"butterfree"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/butterfree.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Butterfree</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Fearow',{value:"fearow"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/fearow.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Fearow</Text>   
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style = {{ paddingHorizontal: 5}}>
                        <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Caterpie',{value:"caterpie"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/caterpie.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Caterpie</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Charizard',{value:"charizard"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/charizard.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Charizard</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Charmeleon',{value:"charmeleon"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/charmeleon.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Charmeleon</Text>   
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.cardView} onPress = {()=> this.props.navigation.navigate('Ivysaur',{value:"ivysaur"})}>
                                <View style = {styles.imageView}>
                                    <Image
                                        source = {require('../assets/icons/charecters/ivysaur.png')}
                                        style = {styles.image}
                                        resizeMode = 'center'
                                    />
                                    <Text style = {styles.text}>Ivysaur</Text>   
                                </View>
                            </TouchableOpacity>
                        </View>

                        
                    </View>
                </ScrollView>
                   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#c7ecee',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 35,
        backgroundColor: 'white',     
        width: 400,
        borderRadius: 7,
        elevation: 5,
        paddingHorizontal: 10
    },
    inputStyle: {
        width: 300,
        height: 40,
        textAlign: 'center'
        
    },
    button: {
        backgroundColor: '#304049'
    },
    cardView: {
        height: 140,
        width: 140,
        backgroundColor: '#ecf0f1',
        elevation: 5,
        borderRadius: 5,
        
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 0,
        flexDirection: 'column'
       
    },
    imageView: {
        
        alignItems: 'center',

        
        
        
    },
    textView: {
        flex: 1,
        
        
        
    },
    image: {
            flex: 1,
            width: 140,
            height: 140     
    },
    text: {
        fontSize: 20,
        fontWeight: "400"
    }
    
})