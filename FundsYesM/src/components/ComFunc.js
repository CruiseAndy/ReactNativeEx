/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { Linking, Button, Text } from 'react-native';
import ReactStringReplace from 'react-string-replace';

/*
 * @parm doneIndex : step index
 * @return component
 */
export const StepPrecess = (doneIndex) => {
    let arrStep = [];

    for (let i = 1; i <= 4; i++) {
        if (i === doneIndex)
            arrStep.push(<div key={i} className="steps done"></div>);
        else
        arrStep.push(<div key={i} className="steps"></div>);
    }
    return arrStep;
}

/*
 * @parm string
 * @parm regex : compare regex
 * @parm link : link address
 * @parm openTab : true is open tab site
 * @return : translate string
 */
export const StringLink = (string, regex, link) => {
    let transString = string;

    transString = ReactStringReplace(transString, regex, (match, i) => (
        <Text key={match} onPress={() => Linking.openURL(link)}>{match}</Text>
    ))

    return transString;
}

/*
 * @parm idNum : ID Number
 * @return : if ID number illegal return error message, or not return nothing
 * Ref Rule : http://returnbool.pixnet.net/blog/post/10268673-%5B%E7%9F%A5%E8%AD%98%5D%E8%BA%AB%E5%88%86%E8%AD%89%E5%AD%97%E8%99%9F%E7%9B%B8%E9%97%9C%E6%A6%82%E5%BF%B5
 */

const errIDMsg = 
{
    Length: "身份證字號長度不對",
    Format: "身份證字號格式不對",
    Illegal: "身份證字號不合法"
};

export const IdentityValidation = (idNum) => {
    // valid length
    if (idNum.length !== 10)
        return errIDMsg.Length;
    
    // valid fotmat
    if ( !(/[A-Z]/.test(idNum.substr(0, 1))) // first character must english
            || !(/[1-2]/.test(idNum.substr(1, 1))) //second character must 1 or 2
            || !Number.isInteger(Number(idNum.substr(2, 8))) ) // other character must number
        return errIDMsg.Format;
    
    // calculate id number
    let idHeader = "ABCDEFGHJKLMNPQRSTUVXYWZIO"; //按照轉換後權數的大小進行排序
    let studIdNumber = idHeader.indexOf(idNum.substring(0,1)) + 10;
    let sum = studIdNumber / 10 + studIdNumber % 10 * 9;
    let checkNum = Number(idNum.substr(9, 1));
    
    for (let i = 1, weight = 8; i < 10; i++, weight--) {
        sum += weight * idNum.substr(i, 1);
    }

    if (checkNum !== (10 - sum % 10))
        return errIDMsg.Illegal;
}