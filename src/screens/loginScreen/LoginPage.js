import React from 'react';
import {View,Text} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { TextInput,Button } from 'react-native-paper';
import {Container,TextView} from "./LoginStyle";
import {lightBlack, lightGray, orangeColor} from "../../constants/colors";

const LoginPage=()=>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <Container>
            <SvgUri
                style={{ alignSelf:'center',marginTop:80 }}
                width='80'
                height='80'
                uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            />
            <TextView> Login To Kite</TextView>
            <TextInput
                style={{marginLeft:20,marginRight:20,marginTop:20,marginBottom:10,fontSize:10,height:45}}
                label="Email"
                value={email}
                mode='outlined'
                outlineColor={lightGray}
                activeOutlineColor={lightBlack}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,fontSize:10,height:45}}
                label="Password"
                value={password}
                mode='outlined'
                outlineColor={lightGray}
                activeOutlineColor={lightBlack}
                onChangeText={text => setPassword(text)}
            />
            <Button
                style={{margin:20,padding:5,backgroundColor:orangeColor,fontSize:14}}
                mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button>
        </Container>
    )
}

export default LoginPage;