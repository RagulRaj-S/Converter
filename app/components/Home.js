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

class Home extends React.Component {
        constructor(props) {
                super(props);
                this.state={
                        fromVal:0,
                        toVal:0,
                        from: 'cs',
                        to: 'cs'
                };
        }
    
        render() {
                return(
                        <View backgroundColor='#B2FF66'  style={[styles.container]}>
                           
                                <ScrollView>
                                        <View style={[styles.viewStyle]}>
                                        <Text style={[styles.title]}>EC Converter</Text></View>
                                        <View style={[styles.viewStyle]}>
                                        <Text style={[styles.subtitle]}>Welcome!</Text></View>

                                        <View style={[styles.footer]}>
                                        <Text style={[styles.textStyle]}>Here, you can perform Temperature, Number, Distance, Time and Currency conversions!</Text>
                                        </View>

                                        <View style={[styles.footer]}>
                                        <Text style={[styles.textStyle]}>Swipe from left side of the screen to select the converters</Text>
                                        </View>

                                        <View style={[styles.quotes]}>
                                        <Text style={[styles.textStyle]}>Conversion is a Daily Thing!</Text>
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
                color:"white",
                fontSize:15
        },
        title:{
            color:"white",
            fontSize:30,
            fontWeight:"bold",
            marginLeft:45,
            alignItems:'center',
            justifyContent:"center"                
        },
        subtitle:{
                color:"white",
                fontSize:25,
                fontWeight:"bold",
                marginLeft:75,
                alignItems:'center',
                justifyContent:"center"                
            },
        container:{
            marginTop:60,
            flex:1,
            height,
            width,
            backgroundColor:"black"
        },
        footer:{
                justifyContent:"center",
                alignItems:'center',
                borderColor:'black',
                borderWidth:5,
                padding:10,
                margin:10,
                borderRadius:5,
        },
        quotes:{
                justifyContent:"center",
                alignItems:'center',
                borderColor:'black',
                borderWidth:5,
                marginLeft:55,
                padding:10,
                margin:100,
                width:250,
                borderRadius:5,
        }
})
export default Home;