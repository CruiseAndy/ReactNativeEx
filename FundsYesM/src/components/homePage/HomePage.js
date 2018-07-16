/* Tools */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableHighlight , Linking } from 'react-native';

/* Components */
import { Card, CardSection, Button } from '../common';
import Header from '../header/Header';
import  FundRecomm from './FundRecomm';
import  InvestRecomm from './InvestRecomm';
import { BANNER , ADIMG , STARTEGYLONG , BG2} from '../images/image';
import Caption from '../captions/Caption';
/* Data */
import FundrecommData  from './fundrecommData.json';

class LoginForm extends Component {

    onLoginPage() {
        Actions.login();
    }

    render() {

        return (
            <View>
                <Header />
                <Card>
                    <View style={bannderStyle.bannerView}>
                        <Image style={bannderStyle.bannerImg} source={BANNER}/>
                        <View style={bannderStyle.bannerControlView}>
                            <Text style={bannderStyle.bannerText}>鉅亨My基金</Text>
                            <Text style={bannderStyle.bannerText2}>省錢又省心</Text>
                            <Button style={bannderStyle.bannerOpenAcct_btn} onPress={ this.onLoginPage.bind(this) }>立即開戶</Button>
                            <Button style={bannderStyle.bannerLogin_btn} textStyle={bannderStyle.bannerLogin_text} onPress={ this.onLoginPage.bind(this) }>登入</Button>
                        </View>
                    </View>
                    <TouchableHighlight style={{height:"auto"}} onPress={ () => { Linking.openURL("https://www.fundsyes.com/launch/NewBF/") }}>
                        <Image style={{ flex: 1, width: null ,  resizeMode:"contain" ,margin:10 ,height:120}} source={ADIMG}/>
                    </TouchableHighlight>
                    <View style={{width:"100%"}}>
                        <View style={investmentStyle.StrategyView}>
                            <Text style={investmentStyle.titleText}>投資展望</Text>
                            <View style={investmentStyle.StrategyLongView}>
                                <View style={investmentStyle.StartegyLongTextView}>
                                    <Text style={[investmentStyle.StartegyLongText , {fontWeight : "bold"}]}>張榮仁</Text>
                                    <Text style={[investmentStyle.StartegyLongText , {fontWeight : "bold"}]}>鉅亨網投顧 策略長</Text>
                                    <Text style={investmentStyle.StartegyLongText}>
                                    2017即將進入尾聲，股市幾乎漲了一整年。走在山稜上，得要注意腳步是否穩健，才能攀越一座又一座的高峰...
                                        <Text style={{textDecorationLine:"underline"}} onPress={ () => { Linking.openURL("https://www.fundsyes.com/ArticleInfo/365419f0-b66e-4069-b45e-9cbb1390691c") }}>看更多</Text>
                                    </Text>
                                </View>
                                <View style={[investmentStyle.StartegyLongTextView , {alignItems : "flex-end" , width : "40%"}]}>
                                    <Image source={STARTEGYLONG}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    {
                        Object.values(FundrecommData.FundRecomm).map(( item, index ) => {
                            return ( <FundRecomm key={index}  itemData={item}/> )
                        })
                    }
                    <InvestRecomm itemData={FundrecommData.InvestRecomm}/>
                    <View style={FAQStyle.blockView}>
                        <Image style={FAQStyle.brackGroundImg} source={BG2}/>
                        <View style={FAQStyle.controlView}>
                            <Text style={FAQStyle.FAQText}>若有疑問請見「FAQ常見問題」</Text>
                            <Text style={FAQStyle.FAQText}>若仍無法解決、請點擊「聯絡我們」留言</Text>
                            <Button style={FAQStyle.FAQ_btn} onPress={ () => Linking.openURL("https://www.fundsyes.com/Service/FAQ.aspx")}>FAQ常見問題</Button>
                            <Button style={FAQStyle.callMe_btn} textStyle={FAQStyle.callME_text} onPress={ () => Linking.openURL("https://www.fundsyes.com/Service/Contact.aspx") }>聯絡我們</Button>
                        </View>
                    </View>
                    <Caption />
                </Card>
            </View>
        );
    }
}


/*
    Banner 的 css樣式
*/
const bannderStyle = StyleSheet.create({
    bannerView : {
        height : 400,
        margin : 10,
        overflow : "hidden",
        alignItems : "center",
    },
    bannerImg : {
        height : "100%",
        overflow : "hidden"
        
    },
    bannerControlView : {
        position : "absolute",
        alignItems : "center"
    },
    bannerText : {
        marginTop : 100,
        fontSize : 30,
        color : "white",
        fontWeight : "bold",
        backgroundColor:'transparent'
    },
    bannerText2 : {
        marginTop : 30,
        fontSize : 30,
        color : "white",
        fontWeight : "bold",
        backgroundColor:'transparent'
    },
    bannerOpenAcct_btn : {
        width: 200,
        marginTop : 50
    },
    bannerLogin_btn : {
        width: 200,
        marginTop : 20,
        backgroundColor:'transparent'
    },
    bannerLogin_text : {
        backgroundColor : "white",
        color : "#db524c" , 
        width : "100%" , 
        textAlign : "center" , 
        opacity : 0.8
    },
    adImg : {
        margin:10,
        overflow : "hidden",
        backgroundColor : "#f5f5f5",
    }
})

/*
    investment 投資展望 的 css樣式
*/
const investmentStyle = StyleSheet.create({

    StrategyView : {
        width : "auto",
        margin : 10,
        backgroundColor : "#f5f5f5",
        alignItems : "center"
    },
    titleText : {
        marginTop: 30 ,
        fontSize : 20,
        fontWeight : "bold"
    },
    StrategyLongView : {
        flexDirection : "row",
        alignItems : "flex-start",

    },
    StartegyLongTextView : {
        width:"60%",
        marginTop : 30
    },
    StartegyLongText : {
        marginTop:5,
        marginLeft : 20,
        fontSize:14,
        color:"#757575" , 
        lineHeight : 18
    }

});

/*
    下方 FAQ 的 CSS
*/
const FAQStyle = StyleSheet.create({

    blockView : {
        alignItems : "center",
        height:300,
        marginLeft:10,
        marginRight:10,
        overflow:"hidden"
    },
    brackGroundImg:{
        flex:1,
        height:300,
        alignSelf: 'flex-start'
    },
    controlView : {
        position : "absolute",
        alignItems : "center"
    },
    FAQText : {
        alignSelf: 'stretch',
        alignItems : "stretch",
        textAlign :  'center',
        fontSize:16,
        lineHeight : 20,
        color:"#757575"
    },
    FAQ_btn : {
        width: 300,
        marginTop : 150
    },
    callMe_btn : {
        width: 300,
        marginTop : 5,
        backgroundColor:'transparent'
    },
    callME_text : {
        backgroundColor : "white",
        color : "#db524c" , 
        width : "100%" , 
        textAlign : "center" , 
        opacity : 0.8
    }
});

export default LoginForm;