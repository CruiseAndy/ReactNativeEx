import {
    NUM1_CHANGED,
    NUM2_CHANGED,
    ADD_SUM,
} from './types';

// do something
export const num1Changed = num1Val => {
    console.log(`Action num1 value ${num1Val}`);
    return {
        type: NUM1_CHANGED,
        num1: num1Val
    }
}

export const num2Changed = num2Val => {
    console.log(`Action num2 value ${num2Val}`);
    return {
        type: NUM2_CHANGED,
        num2: num2Val
    }
}

export const addSum = (num1, num2) => {
    return {
        type: ADD_SUM,
        sum: (Number(num1) + Number(num2)).toString()
    }
}