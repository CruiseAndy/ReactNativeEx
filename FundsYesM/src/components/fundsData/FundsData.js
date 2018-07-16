/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

/* Components */
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    BackHandler,
} from 'react-native';
import {
    Card,
    CardSection,
} from '../common';
import Header from '../header/Header';
import FundsSort from '../fundsData/FundsSort';
import Overview from './Overview';
import Subscription from './Subscription';

/* Actions */
import {
    sortChanged,
} from '../../actions';

class FundsData extends Component {
    
    constructor (props) {
        super(props)
        this.handleBack = this._handleBack.bind(this) // 返回一个绑定好this的方法并存储于当前实例中
    }

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }

    _handleBack () {
        console.log("Back");

        Actions.login();
    }

    render() {
        return(
            <View>
                <Header />
                {
                    this.props.sortIndex === 0
                    ?   <Overview />
                    :   this.props.sortIndex === 1
                        ?   <Subscription />
                        :   <Subscription />
                }
                <FundsSort />
            </View>
        );
    }
};

const mapStateToProps = ({ fundsData }) => {
    const { sortIndex } = fundsData;

    return { sortIndex };
}

export default connect(mapStateToProps, {
    sortChanged
})(FundsData);