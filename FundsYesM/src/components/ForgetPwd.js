/*
 * Date : 2017/11/27
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

/* Components */
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    Card,
    CardSection,
    IconBlock,
    Input,
    Selector,
    Button,
    Spinner,
} from './common';
import Caption from './captions/Caption';
import Header from './header/Header';

/* Actions */
import {
    initCalendar,
    idChanged,
    yearChanged,
    monthChanged,
    dayChanged,
    emailChanged,
    sendData,
    backingOut
} from '../actions';

class ForgetPwd extends Component {

    componentWillMount() {
        this.props.initCalendar();
    }

    render() {
        const {
            titleView,
            titleText,
            descriptionText,
            selectorText,
            noteText,
            buttonSendData,
            buttonBack,
        } = styles;

        if (this.props.calendar === null || this.props.calendar === undefined) {
            return <Spinner size='large' />
        }
        
        const { yearList, monthList, dayList } = this.props.calendar;

        return(
            <View>
                <Header />
                <Card>
                    {/* <CardSection>
                        <View style={titleView}>
                            <Text style={titleText}>忘記密碼</Text>
                        </View>
                    </CardSection> */}

                    <CardSection style={{ marginTop: 30 }}>
                        <Text style={descriptionText}>請提供以下資訊，在確認您的資料後，我們將發送郵件至您的 Email 信箱。請您按步驟操作、重新設定密碼。</Text>
                    </CardSection>
                    
                    <CardSection>
                        <IconBlock  name="user">身份證字號</IconBlock>
                    </CardSection>
                    
                    <CardSection style={{ marginBottom: 10 }}>
                        <Input
                            value={this.props.id}
                            onChangeText={value => this.props.idChanged(value)}
                        />
                    </CardSection>
                    
                    <CardSection>
                        <IconBlock name="calendar">出生年月日</IconBlock>
                    </CardSection>
                    
                    <CardSection>
                        <Selector
                            data={yearList}
                            value={this.props.year.toString()}
                            onChange={ option => this.props.yearChanged(option.key) }
                        />
                        <Text style={selectorText}>年</Text>
                    </CardSection>
                    
                    <CardSection>
                        <Selector
                            data={monthList}
                            value={this.props.month.toString()}
                            onChange={ option => this.props.monthChanged(option.key) }
                        />
                        <Text style={selectorText}>月</Text>
                    </CardSection>
                    
                    <CardSection style={{ marginBottom: 10 }}>
                        <Selector
                            data={dayList}
                            value={this.props.day.toString()}
                            onChange={ option => this.props.dayChanged(option.key) }
                        />
                        <Text style={selectorText}>日</Text>
                    </CardSection>
                    
                    <CardSection>
                        <IconBlock name="envelope-open-o">Email信箱</IconBlock>
                    </CardSection>
                    
                    <CardSection>
                        <Input
                            value={this.props.email}
                            onChangeText={value => this.props.emailChanged(value)}
                        />
                    </CardSection>
                    
                    <CardSection>
                        <Text style={noteText}>※ 提醒您：需與原留信箱相符</Text>
                    </CardSection>
                    
                    <CardSection style={{ marginTop: 30, marginBottom: 30}}>
                        <Button
                            style={buttonBack}
                            onPress={() => this.props.backingOut()}
                        >返 回</Button>
                        <Button
                            style={buttonSendData}
                            onPress={() => {this.props.sendData();}}
                        >確認送出</Button>
                    {/* {
                        this.props.sending
                            ?   <Spinner size='large' />
                            :   <Button
                                    style={buttonStyle}
                                    onPress={() => this.props.sendData()}
                                >確認送出</Button>
                    } */}
                    </CardSection>

                    <Caption />
                </Card>
            </View>
        );
    }
};

const styles = {
    titleView: {
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 5,
        marginBottom: 5,
    },
    titleText: {
        alignSelf: 'center',
        color: '#727272',
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    descriptionText: {
        alignSelf: 'center',
        color: '#727272',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 30,
    },
    selectorText: {
        padding: 10,
        fontSize: 18,
        color: '#727272',
    },
    noteText: {
        color: '#727272',
        fontSize: 12,
        fontWeight: '600',
    },
    buttonSendData: {
        marginLeft: 5,
        marginRight: 5,
    },
    buttonBack: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#808080',
        borderWidth: 0,
    }
}

const mapStateToProps = ({ forgetPwd }) => {
    const { calendar, id, year, month, day, email, sending } = forgetPwd;

    return { calendar, id, year, month, day, email, sending };
}

export default connect(mapStateToProps, {
    initCalendar,
    idChanged,
    yearChanged,
    monthChanged,
    dayChanged,
    emailChanged,
    sendData,
    backingOut,
})(ForgetPwd);