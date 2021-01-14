import React, { Component } from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import { View, Text } from "react-native";

export default class App extends Component {
constructor(props) {
super(props);
this.state = {
text: ''
};
}

render() {
var data = [["Big Data", "Hadoop", "Spark", "Hive"], ["Data Science" ,"Python","Ruby"]];
return (
    <View style={{flex: 1}}>
    <View>
        <Text>
        Courses offered by Educba
        </Text>
    </View>
    <View style={{height: 52}} />
    <DropdownMenu
        style={{flex: 0.5}}
        bgColor={'grey'}
        tintColor={'#000000'}
        activityTintColor={'red'}
        handler={(selection, row) => this.setState({text: data[selection][row]})}
        data={data}
        >
    </DropdownMenu> 
    </View>
);
}
}



import React, { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Image,
  Dimensions, 
} from 'react-native';
import { Picker } from '@react-native-community/picker';


const {height, width} = Dimensions.get('screen')

class Temp extends React.Component {
        constructor(props) {
                super(props);
                this.state={
                        cs:0,
                        ft:0,
                        kn:0,
                        from: 'cs',
                        to: 'cs'
                };
        }

        cs_change(unit,lang) {
                console.log(lang)
                this.state.cs = unit;
                this.state.ft = ((unit*(9/5))+32);
                this.state.kn = unit + 273.15;
                this.setState({
                });
        }
        ft_change(unit) {
                this.state.cs = ((unit-32) * (5/9));
                this.state.ft = unit;
                this.state.kn = ((unit-32) * (5/9)) + 273.15;
                this.setState({
                });
        }
        kn_change(unit) {
                this.state.cs = unit - 273.15;
                this.state.ft = (unit - 273.15) * (9/5) + 32;
                this.state.kn = unit;
                this.setState({
                });
        }
        reset() {
            this.state.cs = 0;
            this.state.ft = 0;
            this.state.kn = 0;
            this.setState({
            });
    }

        render() {
                var lang;
                let a_cs = 0;
                let a_ft = 0;
                let a_kn = 0;
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                            <Text style={[styles.title]}>Temperature Conversion</Text>
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Celcius</Text>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.cs)} onChangeText={(e)=>a_cs = parseFloat(e)}></TextInput>
                                                <Button title='Convert' color='purple' onPress={()=>this.cs_change(a_cs)}></Button>
                                        </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Farenheit</Text>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.ft)} onChangeText={(e)=>a_ft = parseFloat(e)}></TextInput>
                                                <Button title='Convert' color='purple' onPress={()=>this.ft_change(a_ft)}></Button>
                                        </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Kelvin</Text>
                                                <TextInput style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.kn)} onChangeText={(e)=>a_kn = parseFloat(e)}></TextInput>
                                                <Button title='Convert' color='purple' onPress={()=>this.kn_change(a_kn)}></Button>
                                        </View>
                                        <Button style={[styles.btn]} title='Clear All' color='purple' onPress={()=>this.reset()}></Button>
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
            width:1
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
                
        }
})
export default Temp;

import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import s from './Style';
import styles from './styles';

const arr = ["INR", "EUR", "USD", "JPY", "GBP", "AUD", "MXN", "KWD", "SGD", "MYR", "AED"];

export default class extends Component {
    state = { fromcurr: "INR", tocurr: "EUR", result: "", data: "" }
    alterfrom = (value) => { this.setState({ fromcurr: value, result: "" }); }
    alterto = (value) => { this.setState({ tocurr: value, result: "" }); }
    update = (value) => {
        let a = value;
        var b = this.state.fromcurr;
        var c = this.state.tocurr;
        var d = b + "_" + c
        if (value != "") {
            axios.get(`https://free.currconv.com/api/v7/convert?q=${d}&compact=ultra&apiKey=8ba844e791c8fc93dc67`)
                .then(res => {
                    this.setState({ data: res.data[d] })
                }).catch(error => {
                    alert(error)
                })
            let calc = a * this.state.data;
            this.setState({ result: calc })
        }
    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 💵</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromcurr} onValueChange={this.alterfrom}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To 💴 </Text>
                    <Picker style={styles.picker} selectedValue={this.state.tocurr} onValueChange={this.alterto}  >
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}
                    </Picker>
                    <View style={styles.text1}>
                        <Text style={styles.text2}> {this.state.result} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>

                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
}

import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';

const arr = ["Seconds", "Minutes", "Hour", "Day", "Week", "Month", "Year"];
const { ms, s, m, h, d } = require('time-convert')
const { seconds, minutes, hours, days } = require('time-convert')



export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitFrom: 'Minutes', userInput: '', unitTo: 'Hour', value: null,
            distance: {
                'Seconds': 1, 'Minutes': 60, 'Hour': 3600, 'Day': 86400, 'Week': 604800,
                'Month': 2.628e+6, 'Year': 3.154e+7
            }
        }
    }   
    state = { fromtime: "Seconds", totime: "Hour", result: "", data: "" }
    FromChange = (unit) => {
        this.setState({ unitFrom: unit, userInput: '' }, () => this.calculate());
    }
    ToChange = (unit1) => {
        this.setState({ unitTo: unit1, userInput: '' }, () => this.calculate());
    }

    calculate = () => {
        if (this.state.userInput !== '') {
            let mid, result;
            mid = this.state.userInput * this.state.distance[this.state.unitFrom]
            result = mid / this.state.distance[this.state.unitTo]
            this.setState({ value: parseFloat(result).toFixed(2) });
        }
        else {
            this.setState({ value: null })
        }
    }

    updateAndCalculate = (text) => {
        this.setState({ userInput: text.replace(/,/g, '') }, () =>
            this.calculate())
    }

    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 🕒</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.unitFrom}
                        onValueChange={this.FromChange}>
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}

                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.userInput} onChangeText={this.updateAndCalculate} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.unitTo}
                        onValueChange={this.ToChange}>
                        {arr.map((unit, i) => (<Picker.Item label={unit} value={unit} key={i} />))}

                    </Picker>

                    <View style={styles.text1}>
                        <Text style={styles.text2}> {this.state.value} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>


                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
}




import React, { Component } from 'react';
import { Picker } from '@react-native-community/picker'
import { Body, Title, Container, Item, Input, Icon, } from 'native-base';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import styles from './styles';



export default class extends Component {
    state = { fromvalue: "2", tovalue: "10", result: "", data: "" }
    alterfrom = (value) => { this.setState({ fromvalue: value, result: "" }); }
    alterto = (value) => { this.setState({ tovalue: value, result: "" }); }
    update = (value) => {
        var baseConvert = require('baseconvert');
        if (value != "") {
            let a = value;
            var b = this.state.fromvalue;
            var c = this.state.tovalue;
            var myNumber = baseConvert.converter(a).fromBase(b).toBase(c);
            if (isNaN(myNumber)) { alert("Invalid Number Please enter a proper value") }
            else { this.setState({ result: myNumber }) }
        }

    }
    render() {
        return (
            <>
                <View style={styles.view}>
                    <Text style={styles.text1}>Convert From 🔢</Text>
                    <Picker style={styles.picker} selectedValue={this.state.fromvalue} onValueChange={this.alterfrom}  >
                        <Picker.Item label="Binary" value="2" />
                        <Picker.Item label="Quinary" value="5" />
                        <Picker.Item label="Octal" value="8" />
                        <Picker.Item label="Decimal" value="10" />
                        <Picker.Item label="Hexadecimal" value="16" />
                    </Picker>
                    <Item rounded>
                        <Input keyboardType="numeric" placeholder='Enter a value' value={this.state.user} onChangeText={this.update} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Text style={styles.text1}>Converting To </Text>
                    <Picker style={styles.picker} selectedValue={this.state.tovalue} onValueChange={this.alterto}  >
                        <Picker.Item label="Binary" value="2" />
                        <Picker.Item label="Quinary" value="5" />
                        <Picker.Item label="Octal" value="8" />
                        <Picker.Item label="Decimal" value="10" />
                        <Picker.Item label="Hexadecimal" value="16" />
                    </Picker>
                    <View style={styles.text1}>
                        <Text style={styles.text2}> {this.state.result} </Text>
                    </View>
                    <Text ></Text>
                    <Text ></Text>


                    <Body style={styles.body1}></Body>
                </View>
            </>
        );
    }
}