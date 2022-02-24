import React from 'react';
import {View,Text} from 'react-native';
import {lightBlack} from "../../constants/colors";

const WelcomePage=()=>{

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:30,color:lightBlack}}> Welcome Page</Text>
        </View>
    )
}

export default WelcomePage;