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

class Distance extends React.Component {
        constructor(props) {
                super(props);
                this.state={
                        fromVal:0,
                        toVal:0,
                        from: 'inch',
                        to: 'inch'
                };
        }

        cs_change(unit,from,to) {
                unit = parseFloat(unit)
                console.log(from,to, unit)
                if(from == "inch" && to == "feet" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/12;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/36;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/63360;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*25.4;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*2.54;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/39.37;
                        this.setState({
                        });   
                }
                if(from == "inch" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/39370;
                        this.setState({
                        });   
                }

                if(from == "feet" && to == "inch" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*12;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/3;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/5280;                        ;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*305;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*30.48;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/3.281;
                        this.setState({
                        });   
                }
                if(from == "feet" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/3281;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "inch" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*36;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "feet")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*3;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1760;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*914;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*91.44;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1.094;
                        this.setState({
                        });   
                }
                if(from == "yard" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1094;
                        this.setState({
                        });   
                }

                if(from == "mile" && to == "inch" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*63360;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "feet")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*5280;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "yard" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1760;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1609000.0;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*160934;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1609;
                        this.setState({
                        });   
                }
                if(from == "mile" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1.609;
                        this.setState({
                        });   
                }

                if(from == "mm" && to == "inch")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/25.4;
                        this.setState({
                        });   
                }
                if(from == "mm" && to == "feet" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/305;
                        this.setState({
                        });   
                }

                if(from == "mm" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/914;
                        this.setState({
                        });   
                }
                if(from == "mm" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1609000.0;
                        this.setState({
                        });   
                }
                if(from == "mm" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit/10;
                        this.setState({
                        });   
                }
                if(from == "mm" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1000;
                        this.setState({
                        });   
                }
                if(from == "mm" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1000000;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "feet" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/30.48;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/91.44;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/160934;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*10;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "inch")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit/2.54;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/100;
                        this.setState({
                        });   
                }
                if(from == "cm" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/100000;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "feet" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*3.281;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1.094;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1609;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1000;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*100;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "inch")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*39.37;
                        this.setState({
                        });   
                }
                if(from == "m" && to == "km")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1000;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "feet" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*3281;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "yard")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1094;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "mile" )
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit/1.609;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "mm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1000000;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "cm")
                {
                        this.state.fromVal = unit;
                        this.state.toVal =unit*100000;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "m")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*1000;
                        this.setState({
                        });   
                }
                if(from == "km" && to == "inch")
                {
                        this.state.fromVal = unit;
                        this.state.toVal = unit*39370;
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
                            <Text style={[styles.title]}>Distance Conversion</Text>
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
                                                <Picker.Item label="Inch" value="inch" />
                                                <Picker.Item label="Feet" value="feet" />
                                                <Picker.Item label="Yard" value="yard" />
                                                <Picker.Item label="Mile" value="mile" />
                                                <Picker.Item label="Millimetre" value="mm" />
                                                <Picker.Item label="Centimetre" value="cm" />
                                                <Picker.Item label="Metre" value="m" />
                                                <Picker.Item label="Kilometre" value="km" />
                                                </Picker>
                                                <Text style={[styles.textStyle]}>To</Text>
                                                <Picker
                                                style={[styles.pick]}
                                                selectedValue={this.state.to}
                                                onValueChange={(itemValue) =>
                                                this.setState({to: itemValue})
                                                }>
                                                <Picker.Item label="Inch" value="inch" />
                                                <Picker.Item label="Feet" value="feet" />
                                                <Picker.Item label="Yard" value="yard" />
                                                <Picker.Item label="Mile" value="mile" />
                                                <Picker.Item label="Millimetre" value="mm" />
                                                <Picker.Item label="Centimetre" value="cm" />
                                                <Picker.Item label="Metre" value="m" />
                                                <Picker.Item label="Kilometre" value="km" />
                                                </Picker>
                                                {/* <Button title='Convert' color='purple' onPress={()=>this.cs_change(a_cs,this.state.from)}></Button> */}
                                        </View>
                                        <View style={[styles.viewStyle]}>
                                                <Text style={[styles.textStyle]}>Resulting Value</Text>
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
                width: 150,
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
export default Distance;

