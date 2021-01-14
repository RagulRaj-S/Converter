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
import axios from 'axios';

const arr = ["INR", "EUR", "USD", "JPY", "GBP", "AUD", "MXN", "KWD", "SGD", "MYR", "AED"];
const {height, width} = Dimensions.get('screen')

class Currency extends React.Component {
        constructor(props) {
                super(props);
                this.state={
                        fromVal:0,
                        toVal:0,
                        from: 'inr',
                        to: 'inr',
                        data:0
                };
        }
        update = (value) => {
                console.log(this.state.from, this.state.to)
                let a = value;
                var b = this.state.from;
                var c = this.state.to;
                var d = b + "_" + c
                if (value != "") {
                    axios.get(`https://free.currconv.com/api/v7/convert?q=${d}&compact=ultra&apiKey=8ba844e791c8fc93dc67`)
                        .then(res => {
                            this.setState({ data: res.data[d] })
                        }).catch(error => {
                            alert(error)
                        })
                    let calc = a * this.state.data;
                    this.setState({ toVal: calc })
                }
            }

        reset() {
                this.state.fromVal = 0;
                this.state.toVal = 0;
                this.state.from= 'inr',
                this.state.to= 'inr'
                this.setState({
                }); 
    }
        render() {
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                            <Text style={[styles.title]}>Currency Conversion</Text>
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Enter a Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.fromVal)} onChangeText={text => this.setState({fromVal: text})}></TextInput>
                                                <Text style={[styles.textStyle]}>From</Text>
                                               <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.from}
                                                onValueChange={(itemValue) =>
                                                this.setState({from: itemValue})
                                                }
                                                >
                                                 {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                                                </Picker>
                                                <Text style={[styles.textStyle]}>To</Text>
                                                <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.to}
                                                onValueChange={(itemValue) =>
                                                this.setState({to: itemValue})
                                                }>
                                                {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                                                </Picker>
                                               </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Resulting Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.toVal)} ></TextInput>
                                        </View>
                                        <View style={[styles.footer]}>
                                        <Button title='Convert' color='purple' onPress={()=>this.update(this.state.fromVal)}></Button>
                                                
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
export default Currency;