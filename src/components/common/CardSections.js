import React from 'react';
import {StyleSheet, View} from 'react-native';
import GLOBALS from './Global_Constant'

const CardSections = (props) => {

    return (
        <View style={styles.cardSectionsContainer}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardSectionsContainer: {
        flexDirection: 'row',
        position: 'relative',
        padding: 2,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: GLOBALS.DefaultTheme.BgClr,
    }
});

export {CardSections};