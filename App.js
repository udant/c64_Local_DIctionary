import * as React from 'react';
import AppHeader from './components/AppHeader'
import db from './data'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
   Image,
   Alert
} from 'react-native';
//import { Header } from 'react-native-elements';
console.log(db["ASD"])
export default class App extends React.Component {
    constructor() {
    super();
    this.state = {
      text: '',
    displaytext:'',
    meaning:[],
    type:[]
    };
  }
  
  render() {
    return(
  <View style ={styles.container}>
      <AppHeader/>
  
     
         <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
         <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           this.setState({ displaytext:this.state.text});
          
            var word = this.state.text.toUpperCase().trim()
            //var meaning= db[word].MEANINGS[1]
            //var temp=[]
           // temp=
            console.log("te-chu,te-chu,te-chu "+ db[word].meaning)
            db[word]?(
             this.setState({ type:db[word].type}),
              this.setState({ meaning:db[word].meaning})
              ): Alert.alert("this word is not there in the database")
            }}>
        <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        
        <Text style={{fontWeight: "bold",color:'#fb7a27'}}>Word:     {this.state.displaytext}</Text>
        <Text style={{fontWeight: "bold",color:'#2c0c94'}}>Type: {this.state.type.map(item=>{
          return <Text style={{fontWeight: "bold",color:'#2c0c94'}}>{item+", "}</Text>
        })} </Text>
        <Text style={{fontWeight: "bold",color:'#228B22'}}>Definition: {this.state.meaning.map(item=>{
          return <Text style={{fontWeight: "bold",color:'#228B22'}}>{item+", "}</Text>
        })}</Text>
  </View>
)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    padding: 8,
  },
 
   inputBox: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4
   
  },
 goButton: {
    width: '40%',
    height: 18,
    alignSelf: 'center',
    padding: 20,
    borderRadius:10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:"ffffff",
    margin: 5,
    borderColor:"black",
    borderWidth: 4,
    
  },
   buttonText: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: "bold",
  },
});
