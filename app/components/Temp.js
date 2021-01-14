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
        constructor(props) {
                super(props);
                this.state={
                        fromVal:0,
                        toVal:0,
                        from: 'cs',
                        to: 'cs'
                };
        }

        cs_change(unit,from,to) {
                unit = parseFloat(unit)
                console.log(from,to, unit)
                if(from == "cs" && to == "cs" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit;
                        this.setState({
                        });   
                }
                if(from == "cs" && to == "ft")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = ((unit*(9/5))+32);
                        this.setState({
                        });   
                }
                if(from == "cs" && to == "kn" && from !="NaN")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = (unit + 273.15);
                        this.setState({
                        });   
                }
                if(from == "ft" && to == "ft")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit;
                        this.setState({
                        });   
                }
                if(from == "ft" && to == "cs")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =((unit-32) * (5/9));
                        this.setState({
                        });   
                }
                if(from == "ft" && to == "kn")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = ((unit-32) * (5/9)) + 273.15;
                        this.setState({
                        });   
                }
                if(from == "kn" && to == "kn")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit;
                        this.setState({
                        });   
                }
                if(from == "kn" && to == "cs")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = (unit - 273.15);
                        this.setState({
                        });   
                }
                if(from == "kn" && to == "ft")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = (unit - 273.15) * (9/5) + 32;
                        this.setState({
                        });   
                }
        }
        reset() {
                this.state.fromVal = 0;
                this.state.toVal = 0;
                this.state.from= 'cs',
                this.state.to= 'cs'
                this.setState({
                }); 
    }
        render() {
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                            <Text style={[styles.title]}>Temperature Conversion</Text>
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Enter a Temperature</Text>
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
                                                <Picker.Item label="Celcius" value="cs" />
                                                <Picker.Item label="Farenheit" value="ft" />
                                                <Picker.Item label="kelvin" value="kn" />
                                                </Picker>
                                                <Text style={[styles.textStyle]}>To</Text>
                                                <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.to}
                                                onValueChange={(itemValue) =>
                                                this.setState({to: itemValue})
                                                }>
                                                <Picker.Item label="Celcius" value="cs" />
                                                <Picker.Item label="Farenheit" value="ft" />
                                                <Picker.Item label="kelvin" value="kn" />
                                                </Picker>
                                                {/* <Button title='Convert' color='purple' onPress={()=>this.cs_change(a_cs,this.state.from)}></Button> */}
                                        </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Resulting Temperature</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.toVal)} ></TextInput>
                                        </View>
                                        <View style={[styles.footer]}>
                                        <Button title='Convert' color='purple' onPress={()=>this.cs_change(this.state.fromVal,this.state.from,this.state.to)}></Button>
                                                
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