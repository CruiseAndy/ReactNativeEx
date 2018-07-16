import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions ,TouchableHighlight , Linking } from 'react-native';

import { IconBlock ,Button } from '../common';
import { INVESTICON } from '../images/image';

class InvestRecomm extends Component {
    
    constructor(props) {
            
        super(props);
    
    }
    
    render() {

        const contentView = [];
        for(let i = 0 ; i <= this.props.itemData.length -1 ; i++){
            let item = this.props.itemData[i];
            contentView.push(
                <View key={i} style={investRecommStyle.contentBlockView}>
                    <View style={investRecommStyle.headerView}>
                        <Image source={INVESTICON} style={{width:16,marginRight:5}}/>
                        <Text style={investRecommStyle.contentTitle}>{item.Title}</Text>
                    </View>
                    <View style={investRecommStyle.contentView}>
                        <Text style={investRecommStyle.contentText}>{item.PostDate}</Text>
                        <Text style={[investRecommStyle.contentText , {lineHeight:20}]}>{item.Context}</Text>
                    </View>
                    <View style={investRecommStyle.touchBlock}>
                        <TouchableHighlight style={investRecommStyle.touchView} onPress={() => { Linking.openURL("https://www.fundsyes.com/ArticleInfo/" + item.GUID)} }>
                            <Text style={investRecommStyle.touchText}>看更多</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }
        
        return (
            <View style={investRecommStyle.blockView}>
                <Text style={investRecommStyle.titleText}>投資情報與建議</Text>
                {contentView}
            </View>
        );
            
    }
}

const investRecommStyle = StyleSheet.create({

    blockView : {
        backgroundColor : "#e74f53",
        margin:10,
        paddingTop : 20,
        alignItems : "center"
    },
    titleText : {
        color:"white",
        fontSize:20,
        alignSelf: 'stretch',
        textAlign :  'center',
        fontWeight:"bold"
    },
    contentBlockView : {
        margin:20,
        backgroundColor:"white"
    },
    headerView :{
        flexDirection:'row',
        margin:10,
        width:"90%"
    },
    contentTitle : {
        fontSize:16,
        fontWeight:"bold"
    },
    contentView : {
        marginLeft:28,
        marginRight:15,
        marginTop:15
    },
    contentText : {
        color:"#757575",
        fontSize:16
    },
    touchBlock : {
        alignItems : "center",
        marginTop:20,
        marginBottom:20
    },
    touchView :{ 
        backgroundColor:"white",
        width:150,
        alignItems : "center",
        justifyContent:"center",
        height:50,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#e74f53"
    },
    touchText : {
        color:"white",
        fontSize:20,
        color:"#e74f53",
        fontWeight:"bold"
    }

});

export default InvestRecomm;