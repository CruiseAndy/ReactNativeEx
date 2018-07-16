/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

/* Components */
import { Text, View, Dimensions, Image, Linking, StyleSheet } from 'react-native';
import { Card, CardSection, Button, IconBlock, AnimatedMoveFromLeft } from '../common';

/* Images */
import { LOGO } from '../images/image';

/* data */
import BookmarkData from './BookmarkData.json';

import { menuOpenChange } from '../../actions';


class Header extends Component {

    constructor(props) {
        super(props);
    }


    openMenuChange(open){
        debugger;
        if(open != null && open != undefined)
            this.props.menuOpenChange(open);
        else 
            this.props.menuOpenChange(!this.props.isOpen);

    }

    render() {
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

        const { width } = Dimensions.get('window');

        const btnPCVer = {
            "title": "切換電腦版",
            "url": "https://www.fundsyes.com/?mobileConvert"
        }

        return (
            <View>
                <AnimatedMoveFromLeft style={{ marginTop: 66 }} ref="child" openChangeFun={this.openMenuChange.bind(this)} isOpen={this.props.isOpen}>
                    <View style={bookmarkList}>
                        {
                            Object.entries(BookmarkData).map(( item, index ) => {
                                const [ title, url ] = [ item[0], item[1] ];

                                if (title.match(/line/i)) {
                                    return (
                                        <View key={index} style={bookmarkHrStyle}></View>
                                    );
                                } else if (url === "") {
                                    return (
                                        <Text key={index} style={bookmarkGroup}>{title}</Text>
                                    );
                                }
                                else {
                                    return (
                                        <Text
                                            key={index}
                                            style={bookmarkItem}
                                            onPress={() => Linking.openURL(url)}
                                        >{title}</Text>
                                    );
                                }
                            })
                        }
                        <Button
                            style={{ marginTop: 10, marginBottom: 60 }}
                            onPress={() => Linking.openURL(btnPCVer.url)}
                        >{btnPCVer.title}</Button>
                    </View>
                </AnimatedMoveFromLeft>
                <View style={headerContainer} >
                    <View style={headerStyle}>
                        <View>
                            <IconBlock
                                name="bars"
                                size={25}
                                style={iconStyle}
                                onPress={ () => this.props.menuOpenChange(!this.props.isOpen)}
                            />
                        </View>
                        <View>
                            <Image
                                resizeMode="contain"
                                source={LOGO}
                                style={{ height: 30, width: width * 0.8, margin: 5 }}
                            />
                        </View>
                    </View>
                    
                    {/* <View style={hrStyle}></View> */}
                </View>
            </View>
        );
    }
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
        paddingTop: 30,
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
        marginTop: 15,
        marginBottom: 15,
        opacity: 0.8,
    },
    hrStyle: {
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
    },
}

const mapStateToProps = ({ menu }) => {
    const { isOpen } = menu;

    return { isOpen };
}

export default connect(mapStateToProps, { menuOpenChange })(Header);