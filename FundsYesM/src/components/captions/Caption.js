/*
 * Date : 2017/11/29
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
} from 'react-native';

/* Components */
import { Describe } from '../common';

/* Json */
import {
    hankbook,
    MOPSUrl,
    fundClearUrl,
    companyInfo,
    companyEmailUrl,
    companyPhoneUrl,
    info,
} from './Caption.json';

/* common function */
import { StringLink } from '../ComFunc';

const Caption = () => {
    const {
        descViewStyle,
        pointStyle,
        descStyle,
        hrStyle,
        companyViewStyle,
        companyStyle,
    } = styles;

    return (
        <Describe>
            {
                hankbook.map((text, index) => {
                    let replacedText = text;
                    
                    replacedText = StringLink( replacedText, /(公開資訊觀測站)/g, MOPSUrl );
                    replacedText = StringLink( replacedText, /(境外基金資訊觀測站)/g, fundClearUrl );

                    return(
                        <View key={index} style={descViewStyle}>
                            <Text style={pointStyle}>{`\u2022`}</Text>
                            <Text style={descStyle}>{replacedText}</Text>
                        </View>
                    );
                })
            }

            <View style={hrStyle}></View>

            <View style={companyViewStyle}>
                {
                    companyInfo.map((text, index) => {
                        let replacedText = text;

                        replacedText = StringLink( replacedText, /(cs@fundsyes.com)/g, companyEmailUrl );
                        replacedText = StringLink( replacedText, /(\(02\)2720-8126)/g, companyPhoneUrl );

                        return(
                            <Text key={index} style={companyStyle}>{replacedText}</Text>
                        );
                    })
                }
            </View>

            <View style={[ companyViewStyle, { justifyContent: 'center', flexDirection: 'row', marginBottom: 3 }]}>
                <Text style={[ companyStyle, { color: '#94772d' }]}>鉅亨網投顧獨立經營管理</Text>
                <Text style={companyStyle}> | 版權為鉅亨網投顧所有</Text>
            </View>

            <View style={[ companyViewStyle, { justifyContent: 'center', flexDirection: 'row' }]}>
                {
                    Object.entries(info).map((item, index) => {
                        const title = item[0];
                        const url = item[1];

                        return (
                            <Text key={index} style={companyStyle} onPress={() => Linking.openURL(url)}>{title}</Text>
                        );
                    })
                }
            </View>
        </Describe>
    );
}

const styles = StyleSheet.create({
    descViewStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 10,
    },
    pointStyle: {
        paddingRight: 5,
        color: '#757575',
    },
    descStyle: {
        fontSize: 12,
        color: '#757575',
        fontWeight: '800',
        paddingTop: 3,
        paddingRight: 5,
    },
    hrStyle: {
        borderBottomColor: '#8f8f8f',
        borderBottomWidth: 0.5,
        marginTop: 10,
        marginBottom: 15,
    },
    companyViewStyle: {
        flex: 1,
        marginBottom: 20,
    },
    companyStyle: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#8f8f8f',
        fontWeight: '600',
        paddingBottom: 5,
    }
});

export default Caption;