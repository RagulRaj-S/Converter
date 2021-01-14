import React from "react";
import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Dimensions, 
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const {height, width} = Dimensions.get('screen')

class Temp extends React.Component {
        state = { 
        fromvalue: "2", 
        tovalue: "10", 
        result: 0, 
        data: 0 }

        alterfrom = (value) => { 
                this.setState({ fromvalue: value, result: "" }); 
        }
        alterto = (value) => { 
                this.setState({ tovalue: value, result: "" }); 
        }
        
        
        update = (value) => {
                console.log(this.state.fromvalue, this.state.tovalue, value)
            var baseConvert = require('baseconvert');
            if (value != "") {
                let a = value;
                var b = this.state.fromvalue;
                var c = this.state.tovalue;
                var myNumber = baseConvert.converter(a).fromBase(b).toBase(c);
                console.log(myNumber, a, b, c)
                if (isNaN(myNumber)) 
                { 
                        alert("Invalid Number!") 
                }
                else 
                { 
                        this.setState({ result: myNumber }) 
                }
                console.log(this.state.result)
            }}

        reset() {
                this.state.fromvalue = "2", 
                this.state.tovalue = "10", 
                this.state.result = 0, 
                this.state.data = 0 
                this.setState({
                }); 
    }
        render() {
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                            <Text style={[styles.title]}>Number Conversion</Text>
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Enter a Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.data)} onChangeText={text => this.setState({data: text})}></TextInput>
                                                <Text style={[styles.textStyle]}>From</Text>
                                               <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.fromvalue} onValueChange={this.alterfrom}
                                                >
                                                <Picker.Item label="Binary" value="2" />
                                                <Picker.Item label="Quinary" value="5" />
                                                <Picker.Item label="Octal" value="8" />
                                                <Picker.Item label="Decimal" value="10" />
                                                <Picker.Item label="Hexadecimal" value="16" />
                                                </Picker>
                                                <Text style={[styles.textStyle]}>To</Text>
                                                <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.tovalue} onValueChange={this.alterto} >
                                                <Picker.Item label="Binary" value="2" />
                                                <Picker.Item label="Quinary" value="5" />
                                                <Picker.Item label="Octal" value="8" />
                                                <Picker.Item label="Decimal" value="10" />
                                                <Picker.Item label="Hexadecimal" value="16" />
                                                </Picker>
                                               </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Resulting Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.result)} ></TextInput>
                                        </View>
                                        <View style={[styles.footer]}>
                                        <Button title='Convert' color='purple' onPress={()=>this.update(this.state.data)}></Button>
                                                
                                                <Button style={[styles.btn]} title='Clear All' color='black' onPress={()=>this.reset()}></Button>
                                        </View>
                                        
                                </ScrollView>
                               
                        </View>
                );
        }
}


const styles = StyleSheet.create({
        viewStyle:{
                borderColor:'black',
                borderWidth:5,
                padding:10,
                margin:30,
                borderRadius:5,
        },
        textStyle:{
                color:"black",
                fontSize:10
        },
        textIn:{
            color:"black",
                fontSize:20,
                
        },
        title:{
            color:"black",
            fontSize:20,
            fontWeight:"bold",
            marginLeft:80,
            alignItems:'center',
            justifyContent:"center"                
        },
        container:{
            marginTop:60,
            flex:1,
            height,
            width,
            backgroundColor:"white"
        },
        btn:{
            width:1,
            padding:10,
            
        },
        containers: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              },
              dropdown: {
                width: '80%',
              },
        pick:{
                height: 50, 
                width: 140,
                color:"black",
                borderColor:'black',
                borderWidth:5,
                
        },
        footer:{
                borderColor:'white',
                borderWidth:5,
                padding:10,
                margin:30,
                borderRadius:5,
        }
})
export default Temp;