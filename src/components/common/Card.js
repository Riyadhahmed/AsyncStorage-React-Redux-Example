import React from 'react';
import {StyleSheet, View} from 'react-native';
import GLOBALS from './Global_Constant'

const Card = (props) => {

    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#f2f2f2',
        marginLeft: 1,
        marginRight: 1,
        padding: 2,
        backgroundColor: GLOBALS.DefaultTheme.BgClr,
    }

});

export {Card};