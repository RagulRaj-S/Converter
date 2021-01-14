import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { StyleSheet, View, Text, TextInput, ScrollView, Button } from 'react-native';



const array = ["Seconds", "Minutes", "Hour", "Day", "Week", "Month", "Year"];

class Tme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitFrom: 'Minutes', userInput: 0, unitTo: 'Hour', value: 0,
            distance: {
                'Seconds': 1, 'Minutes': 60, 'Hour': 3600, 'Day': 86400, 'Week': 604800,
                'Month': 2.628e+6, 'Year': 3.154e+7
            }
        }
    }   
    FromChange = (unit) => {
        this.setState({ unitFrom: unit, userInput: '' });
    }
    ToChange = (unit1) => {
        this.setState({ unitTo: unit1, userInput: '' });
    }

    calculate = () => {
        if (this.state.userInput !== '') {
            let mid, result;
            mid = this.state.userInput * this.state.distance[this.state.unitFrom]
            result = mid / this.state.distance[this.state.unitTo]
            this.setState({ value: parseFloat(result).toFixed(2) });
        }
        else {
            this.setState({ value: 0 })
        }
    }

    updateAndCalculate = (text) => {
        this.setState({ userInput: text.replace(/,/g, '') }, () =>
            this.calculate())
    }
    reset() {
                        this.state.userInput = 0;
                        this.state.value = 0;
                        this.state.unitFrom= 'Minutes',
                        this.state.unitTo= 'Hour'
                        this.setState({
                        }); 
            }
        render() {
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                            <Text style={[styles.title]}>Time Conversion</Text>
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Enter a Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'}  value={this.state.userInput} onChangeText={this.updateAndCalculate}></TextInput>
                                                <Text style={[styles.textStyle]}>From</Text>
                                               <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.unitFrom}
                                                onValueChange={(itemValue) =>
                                                this.setState({unitFrom: itemValue})
                                                }
                                                >
                                                 {array.map((unit, k) => (<Picker.Item label={unit} value={unit} key={k} />))}
                                                </Picker>
                                                <Text style={[styles.textStyle]}>To</Text>
                                                <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.unitTo}
                                                onValueChange={(itemValue) =>
                                                this.setState({unitTo: itemValue})
                                                }>
                                                {array.map((unit, k) => (<Picker.Item label={unit} value={unit} key={k} />))}
                                                </Picker>
                                               </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Resulting Value</Text>
                                                <View style={styles.container1}>
                                                </View>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.value)} ></TextInput>
                                        </View>
                                        <View style={[styles.footer]}>
                                        <Button title='Convert' color='purple' onPress={()=>this.calculate()}></Button>
                                                
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
            marginLeft:100,
            alignContent:'center',
            alignItems:'center',
            justifyContent:"center"                
        },
        container:{
            marginTop:60,
            flex:1,
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
export default Tme;