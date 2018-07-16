/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';

/* Components */
import { Text, View } from 'react-native';
import { AnimatedMoveFromLeft } from '../common';

const Bookmark = props => {
    const {
        headerContainer,
        headerStyle,
        iconStyle,
        bookmarkList,
        bookmarkGroup,
        bookmarkItem,
        bookmarkHrStyle,
        hrStyle,
    } = styles;
    
    return (
        <AnimatedMoveFromLeft ref="child">
            <View style={bookmarkList}>
                <Text style={bookmarkGroup}>會員管理</Text>
                <Text style={bookmarkItem}>會員管理</Text>
                <Text style={bookmarkItem}>會員管理</Text>
                <View style={bookmarkHrStyle}></View>
                <Text style={bookmarkGroup}>會員管理</Text>
                <Text style={bookmarkItem}>會員管理</Text>
                <Text style={bookmarkItem}>會員管理</Text>
            </View>
        </AnimatedMoveFromLeft>
    );
}

const styles = {
    headerContainer: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        top: 0,
        height: 40,
        width: '100%',
    },
    headerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    iconStyle: {
        padding: 10,
    },
    bookmarkList: {
        flex: 1,
        padding: 20,
    },
    bookmarkGroup: {
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 20,
        paddingBottom: 20,
    },
    bookmarkItem: {
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#727272',
    },
    bookmarkHrStyle: {
        flex: 1,
        borderBottomColor: '#727272',
        borderBottomWidth: 0.5,
        marginTop: 20,
        marginBottom: 20,
        opacity: 0.8,
    },
    hrStyle: {
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
    },
}

export default Bookmark;