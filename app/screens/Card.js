import { ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';

import colors from '../config/colors';

function Card(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require("../assets/bg.jpg")}>
            <View style={styles.container}>
                <Image style={{
                    width: 70, 
                    height: 70, 
                    marginLeft: -250, }} source={require("../assets/visa.png")} />
                <Image style={{
                    width: 100, 
                    height: 30, 
                    marginRight: -250, 
                    position: "relative", 
                    top: -55}} source={require("../assets/citi.png")} />
                <View style={styles.textContainer}>
                <Text style={styles.itemText}>CARD NUMBER</Text>
                <Text style={styles.cardNumber}>**** **** 6745</Text>
                <Text style={styles.valid}>VALID THROUGH</Text>
                <Text style={styles.expiry}>05/25</Text>
                
                </View>
                <View style={styles.about}>
                    <Text style={{
                        fontSize: 25, 
                        color: colors.black, 
                        top: 20,
                        textAlign: "center",
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',}}>CARD DETAILS</Text>
                    <Text style={{fontSize: 25, 
                        color: colors.black, 
                        marginLeft: 50,
                        top: 60,
                        fontWeight: 'bold'}}>Card Number</Text>
                    <Text style={{fontSize: 20, 
                        color: '#0D1266', 
                        marginLeft: 50,
                        top: 60,
                        fontWeight: 'bold'}}>2326 6736 6745</Text>
                    <Text style={{fontSize: 25, 
                        color: colors.black, 
                        marginLeft: 50,
                        top: 160,
                        fontWeight: 'bold'}}>Name</Text>
                    <Text style={{fontSize: 20, 
                        color: '#0D1266', 
                        marginLeft: 50,
                        top: 160,
                        fontWeight: 'bold',
                        }}>Daniel S.</Text>
                        <Text style={{fontSize: 25, 
                        color: colors.black, 
                        marginLeft: 50,
                        top: 20,
                        fontWeight: 'bold'}}>Valid Through</Text>
                    <Text style={{fontSize: 20, 
                        color: '#0D1266', 
                        marginLeft: 50,
                        top: 20,
                        fontWeight: 'bold'}}>05/25</Text>
                </View>
            </View> 
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: colors.primary,
        width: 380,
        height: 230,
        borderRadius: 20,
        alignItems: "center",
        top: -250,
        
    },
    textContainer: {
        marginLeft: -230,
        marginVertical: -20
    },
    valid: {
        fontSize: 20, 
        color: colors.white, 
        marginLeft: 160,
        fontWeight: 'bold'
    },
    expiry: {
        fontSize: 15, 
        color: colors.white, 
        marginLeft: 160,
        fontWeight: 'bold'
    },
    cardNumber: {
        fontSize: 40, 
        color: colors.white, 
        marginLeft: 160,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    itemText: {
        fontSize: 18, 
        color: colors.white, 
        marginLeft: 160,
        fontWeight: 'bold'
    },
    about: {
        backgroundColor: '#E5FF27',
        width: 420,
        height: 400,
        top: 220,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80
    }
})

export default Card;