/*
 * Date : 2017/11/27
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

/* Components */
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    BackAndroid,
    BackHandler,
    TextInput,
} from 'react-native';
import {
    Card,
    CardSection,
    IconBlock,
    Input,
    Spinner,
    Button,
} from './common';
import Caption from './captions/Caption';
import Header from './header/Header';

/* Actions */
import {
    identityChanged,
    passwordChanged,
    loginUser
} from '../actions';

/* Images */
import { KV } from './images/image';

class LoginForm extends Component {

    state = { btnAction: false };

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

        Actions.home();
    }

    onLoginUser() {
        const { id, password } = this.props;
        
        this.props.loginUser({ id, password });
    }
    
    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        const {
            titleView,
            titleText,
            iconDesc,
            buttonText,
            buttonView,
            noteView,
            noteText,
        } = styles;
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = 440 / 960 * windowWidth;   // 原圖大小 : 960 X 440

        return(
            <View>
                <Header />
                <Card>
                    <Image
                        resizeMode="contain"
                        style={{ width: windowWidth, height: windowHeight }}
                        source={KV}
                    />

                    <CardSection>
                        <View style={titleView}>
                            <Text style={titleText}>網路交易登入</Text>
                        </View>
                    </CardSection>
                    
                    <CardSection style={{ marginTop: 20 }}>
                        <IconBlock name="user">身份證字號</IconBlock>
                    </CardSection>
                    
                    <CardSection>
                        <Input
                            value={this.props.id}
                            onChangeText={value => this.props.identityChanged(value)}
                        />
                    </CardSection>
                    
                    <CardSection>
                        <IconBlock name="lock">登入密碼</IconBlock>
                    </CardSection>
                    
                    <CardSection style={{ marginBottom: 30 }}>
                        <Input
                            secureTextEntry
                            value={this.props.password}
                            onChangeText={value => this.props.passwordChanged(value)}
                        />
                    </CardSection>

                    {this.renderError()}
                    
                    <CardSection>
                        {
                            this.props.loading
                                ?   <Spinner size='large' />
                                :   <Button onPress={this.onLoginUser.bind(this)}>登入</Button>
                        } 
                    </CardSection>
                    
                    <CardSection style={{ marginBottom: 30 }}>
                        <View style={noteView}>
                            <TouchableOpacity onPress={() => Actions.forgetPwd({ type: 'replace' })}>
                                <Text style={noteText}>忘記密碼？</Text>
                            </TouchableOpacity>
                            <Text style={noteText}>|</Text>
                            <TouchableOpacity>
                                <Text style={noteText}>新手上路 》</Text>
                            </TouchableOpacity>
                        </View>
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
        marginTop: 20,
        marginBottom: 20
    },
    titleText: {
        alignSelf: 'center',
        color: '#727272',
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    noteView: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    noteText: {
        color: '#727272',
        fontSize: 16,
        paddingTop: 20,
        paddingBottom: 10,
        fontWeight: '600',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ login }) => {
    const { id, password, loading, error } = login;

    return { id, password, loading, error };
}

export default connect(mapStateToProps, {
    identityChanged, passwordChanged, loginUser
})(LoginForm);