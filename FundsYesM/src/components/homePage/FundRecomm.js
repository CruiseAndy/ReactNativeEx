import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableHighlight , Linking } from 'react-native';
import { IconBlock ,Button } from '../common';

import Icon from 'react-native-vector-icons/FontAwesome';

class FundRecomm extends Component {

    constructor(props) {
        
        super(props);

        let itemData = this.props.itemData;

        this.Title = itemData.Title;
        this.FundName = itemData.FundName;
        this.Warning = itemData.Warning;
        this.StarRating = itemData.StarRating;
        this.AccReturn2Year = itemData.AccReturn2Year;
        this.AccReturn3Year = itemData.AccReturn3Year;
        this.AccReturnInception = itemData.AccReturnInception;
        this.FundID = itemData.FundID;
        this.LastUpdate = itemData.LastUpdate;
        this.Return1Year = itemData.Return1Year;
        this.Return3Month = itemData.Return3Month;
        this.Return6Month = itemData.Return6Month;
        this.Tags = itemData.Tags;
    }

    render() {

        //晨星評等
        const starRatingV = [];
        for(let i = 0 ; i <= Number(this.StarRating) -1 ; i++){
            starRatingV.push(<Icon key={i} name={"star"} style={{color:"#f8b623"}}/>);
        }

        const tagsV = [];
        for(let j = 0 ; j <= this.Tags.length -1 ; j++){
            tagsV.push(
                <TouchableHighlight key={j} style={fundRecommStyle.contentTagsTouch} onPress={ () => { Linking.openURL(this.Tags[j].URL)} }>
                    <Text style={fundRecommStyle.contentTagsText}>{this.Tags[j].TagName}</Text>
                </TouchableHighlight>
            );
        }
        return (
            <View style={fundRecommStyle.BlockView}>
                <View style={fundRecommStyle.titleView}>
                    <Text style={fundRecommStyle.titleText}>{this.Title}</Text>
                </View>
                <View style={fundRecommStyle.contentView}>
                    <Text style={fundRecommStyle.contentText}>{this.FundName + "(" + this.Warning +")"}</Text>
                    <Text >
                        晨星評等
                        { starRatingV }
                    </Text>
                    <Button style={fundRecommStyle.contentBuy}>立即購買</Button>
                </View>
                <View>
                    <View style={fundRecommStyle.contentPerformanceTitle}>
                        <Text style={fundRecommStyle.contentPerformanceTitleText}>3月</Text>
                        <Text style={fundRecommStyle.contentPerformanceTitleText}>6月</Text>
                        <Text style={fundRecommStyle.contentPerformanceTitleText}>1年</Text>
                        <Text style={fundRecommStyle.contentPerformanceTitleText}>2年</Text>
                        <Text style={fundRecommStyle.contentPerformanceTitleText}>3年</Text>
                        <Text style={[fundRecommStyle.contentPerformanceTitleText , {width:"25%"}]}>成立至今</Text>
                    </View>
                    <View style={fundRecommStyle.contentPerformanceValue}>
                        <Text style={fundRecommStyle.contentPerformanceValueText}>{this.Return3Month}</Text>
                        <Text style={fundRecommStyle.contentPerformanceValueText}>{this.Return6Month}</Text>
                        <Text style={fundRecommStyle.contentPerformanceValueText}>{this.Return1Year}</Text>
                        <Text style={fundRecommStyle.contentPerformanceValueText}>{this.AccReturn2Year}</Text>
                        <Text style={fundRecommStyle.contentPerformanceValueText}>{this.AccReturn3Year}</Text>
                        <Text style={[fundRecommStyle.contentPerformanceValueText , {width:"25%"}]}>{this.AccReturnInception}</Text>
                    </View>
                    <View style={fundRecommStyle.contentTagsView}>
                        { tagsV }
                        <View style={{margin : 20}}>
                            <Text style={{color:"#757575"}}>資料來源：晨星，由鉅亨網提供，基金績效截至{this.LastUpdate}。</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const fundRecommStyle = StyleSheet.create({

    BlockView : {
        backgroundColor:"#f5f5f5",
        margin : 20 
    },
    titleView : {
        alignItems : "center",
        backgroundColor:"#f6cbc5"
    },
    titleText : {
        color:"#be5251",
        fontSize:25,
        fontWeight:"bold",
        margin:20,
        alignSelf: 'stretch',
        textAlign :  'center'
    },
    contentView : {
        alignItems : "center",
    },
    contentText : {
        textDecorationLine:"underline",
        alignSelf: 'stretch',
        textAlign :  'center',
        fontSize:20,
        fontWeight:"bold",
        margin:30,
        color:"#757575"
    },
    contentBuy : {
        marginTop : 30,
        width:"40%",
        alignSelf: 'center',
        marginBottom : 30
    },
    contentPerformanceTitle : {
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"#e9e9e9"
    },
    contentPerformanceTitleText : {
        width:"15%",
        alignSelf: 'stretch',
        textAlign :  'center'
    },
    contentPerformanceValue : {
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"white",
        marginLeft :2,
        marginRight:2
    },
    contentPerformanceValueText : {
        width:"15%",
        alignSelf: 'stretch',
        textAlign :  'center',
        color:"#be5251"
    },
    contentTagsView :{
        flexDirection:'row',
        flexWrap : "wrap",
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"white",
        width : "99%",
        marginTop : 5,
        marginLeft : 2,
        marginRight: 2,
        marginBottom : 2
    },
    contentTagsTouch : {
        marginRight : 5 ,
        marginBottom : 5
    },
    contentTagsText : {
        borderWidth : 1 ,
        borderStyle : "solid" ,
        borderColor : "#E7634F" ,
        borderRadius:10 ,
        color: "#E7634F" ,
        paddingTop : 1 ,
        paddingBottom : 1 ,
        paddingLeft : 4 ,
        paddingRight : 4
    }

})

export default FundRecomm;