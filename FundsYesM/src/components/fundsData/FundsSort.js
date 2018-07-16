/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';
import {
    Card,
    CardSection,
    Footer,
    IconBlock,
} from '../common';
import Header from '../header/Header';

/* Actions */
import {
    sortChanged,
} from '../../actions';

const { width } = Dimensions.get('window');

const sortData = [
    {
        text: "帳戶總覽",
        icon: "user"
    },
    {
        text: "單筆申購",
        icon: "check-square-o"
    },
    {
        text: "定期定額",
        icon: "calendar"
    }
]

class FundsSort extends Component {

    render() {
        const {
            footerContainer,
            blockStyle,
            chiosedItem,
        } = styles;

        return(
            <Footer height={Platform.OS === 'ios' ? 60 : 85} style={footerContainer}>
                {
                    sortData.map((item, index) => {
                        const { text, icon } = item;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[ blockStyle, this.props.sortIndex == index && chiosedItem ]}
                                onPress={() => this.props.sortChanged(index)}>
                                <IconBlock
                                    name={icon}
                                    size={20}
                                    viewStyle={{ justifyContent: 'center' }}
                                />
                                <Text>{text}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </Footer>
        );
    }
};

const styles = {
    footerContainer: {
        borderTopWidth: 0.5,
        borderColor: '#A9A9A9',
        zIndex: -1,
        backgroundColor: '#fff',
        // opacity: 0.5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
    },
    blockStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: width / 3 - 1,
    },
    chiosedItem: {
        backgroundColor: '#fffcd9',
    }
}

const mapStateToProps = ({ fundsData }) => {
    const { sortIndex } = fundsData;

    return { sortIndex };
}

export default connect(mapStateToProps, { sortChanged })(FundsSort);