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
} from 'react-native';
import {
    Card,
    CardSection,
    Spinner,
    Selector,
    IconBlock,
    Notice,
} from '../common';
import CheckBox from 'react-native-checkbox';
import Caption from '../captions/Caption';

/* Actions */
import {
    getFundsData,
} from '../../actions';

/* Images */
import { BT_DOWN_BLACK, BT_UP_BLACK } from '../images/image';

/* Json */
import {
    overviewNotice
} from './Notice.json';

class FundsInvestDetailRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFundsInvestDetail: false,
        }
    }
    
    showDetail() {
        this.setState({
            showFundsInvestDetail: !this.state.showFundsInvestDetail,
        })
    }

    render() {
        const {
            tableStyle,
            tableBorder,
            textAlignLeft,
            textAlignRight,
            tableContent,
            tableRow,
            textNavColor,
            textPosColor,
            detailTitle,
            detailContent,
        } = styles;

        const { FundID, FundName, Currency, Ratio, Detail } = this.props.data;

        return(
            <View>
                <View style={{ ...tableContent, ...tableBorder }}>
                    <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 3 }}>
                        <Text style={textAlignLeft}>{FundID}</Text>
                        <Text style={textAlignLeft}>{FundName}</Text>
                    </View>
                    <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 1 }}>
                        <Text style={textAlignLeft}>{Currency}</Text>
                    </View>
                    <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 2 }}>
                        <Text style={[
                            textAlignRight,
                            (/-/).test(Ratio) ? textNavColor : Number(Ratio) !== 0 ? textPosColor : ""
                        ]}>{Ratio}</Text>
                    </View>
                    <View style={{ ...tableRow, flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this.showDetail()}
                        >
                            <Image
                                source={ this.state.showFundsInvestDetail ? BT_UP_BLACK : BT_DOWN_BLACK }
                                style={{ width: 30, height: 30, alignSelf: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.showFundsInvestDetail
                    ?   <View style={{ ...tableBorder, borderTopWidth: 0.5, padding: 5 }}>
                            <View style={{ ...tableStyle, ...tableBorder }}>
                            {
                                Object.values(Detail).map((text, index) => {
                                    const detailTitleArr = [ "計價幣別", "淨值", "淨值日期", "參考匯率", "總投資成本", "約當市值", "持有單位數", "已配息金額", "損益" ]
                                    return (
                                        <View key={index} style={[ tableBorder, index !== 0 && { borderTopWidth: 0.5 } ]}>
                                            <View style={{ flexDirection: 'row', height: 25 }}>
                                                <View style={{
                                                    ...tableRow,
                                                    ...tableBorder,
                                                    borderRightWidth: 0.5,
                                                    height: 25,
                                                    backgroundColor: '#F2F2F3',
                                                }}>
                                                    <Text style={detailTitle}>{detailTitleArr[index]}</Text>
                                                </View>
                                                <View style={{ ...tableRow, ...tableBorder, height: 25 }}>
                                                    <Text style={[
                                                        detailContent,
                                                        index === detailTitleArr.length - 1
                                                        ? (/-/).test(text) ? textNavColor : Number(text) !== 0 ? textPosColor : ""
                                                        : null
                                                    ]}>{text}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                            </View>
                        </View>
                    :   null
                }
            </View>
        );
    }
}

class Overview extends Component {
    constructor(props){
        super(props);

        this.state = {
            currencyText: '新台幣',
            interestChecked: false,
        }
    }

    componentWillMount() {
        this.props.getFundsData();
    }

    currencyChanged(currencyText) {
        this.setState({
            currencyText,
        });
    }

    render() {
        const {
            titleStyle,
            tableStyle,
            tableTitle,
            tableTitleText,
            tableBorder,
            textAlignLeft,
            textAlignRight,
            tableContent,
            tableRow,
            tableCell,
            textNavColor,
            textPosColor,
            noticeText,     
        } = styles;

        if(this.props.data == null) {
            return (
                <Card>
                    <Spinner size='large' />
                </Card>
            );
        }

        const { TransactionCurrency, Assets, FundsInvest } = this.props.data;
        const currencyList = [
            { key: 0, section: true, label: '幣別' },
            { key: 1, label: '新台幣' },
            { key: 2, label: '美元' },
            { key: 3, label: '南非幣' }
        ]

        const { title, list, TDCCUrl } = overviewNotice;

        return(
            <Card>
                <CardSection>
                    <Text style={titleStyle}>帳戶總覽</Text>
                </CardSection>
                
                {/* 以交易幣別合計 */}
                <CardSection>
                    <View style={{ ...tableStyle, ...tableBorder, marginBottom: 20 }}>
                        <View style={{ ...tableTitle, backgroundColor: '#dff0d8' }}>
                            <Text style={tableTitleText}>以交易幣別合計</Text>
                        </View>
                        <View style={{ ...tableContent, ...tableBorder, backgroundColor: '#fffae6' }}>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                <Text style={textAlignLeft}>幣別</Text>
                            </View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                <View style={{ ...tableCell, ...tableBorder, borderBottomWidth: 0.5 }}>
                                    <Text style={textAlignRight}>約當市值</Text>
                                </View>
                                <View style={tableCell}>
                                    <Text style={textAlignRight}>投資成本</Text>
                                </View>
                            </View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                <View style={{ ...tableCell, ...tableBorder, borderBottomWidth: 0.5 }}>
                                    <Text style={textAlignRight}>損益</Text>
                                </View>
                                <View style={tableCell}>
                                    <Text style={textAlignRight}>已配息金額</Text>
                                </View>
                            </View>
                            <View style={tableRow}>
                                <Text style={textAlignRight}>參考報酬率</Text>
                                <Text style={textAlignRight}>(已含息)</Text>
                            </View>
                        </View>
                        {
                            TransactionCurrency.map(( item, index ) => {
                                const { Currency, MarketWorth, Cost, ProfitLoss, Reconciliation, RefRatio } = item;

                                return (
                                    <View key={index}>
                                        <View style={{ ...tableContent, ...tableBorder }}>
                                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, backgroundColor: '#f2f2f2' }}>
                                                <Text style={textAlignLeft}>{Currency}</Text>
                                            </View>
                                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                                <View style={{ ...tableCell, ...tableBorder, borderBottomWidth: 0.5 }}>
                                                    <Text style={[
                                                        textAlignRight,
                                                        (/-/).test(MarketWorth) ? textNavColor : Number(MarketWorth) !== 0 ? textPosColor : ""
                                                    ]}>{MarketWorth}</Text>
                                                </View>
                                                <View style={tableCell}>
                                                    <Text style={textAlignRight}>{Cost}</Text>
                                                </View>
                                            </View>
                                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                                <View style={{ ...tableCell, ...tableBorder, borderBottomWidth: 0.5 }}>
                                                    <Text style={[
                                                        textAlignRight,
                                                        (/-/).test(ProfitLoss) ? textNavColor : Number(ProfitLoss) !== 0 ? textPosColor : ""
                                                    ]}>{ProfitLoss}</Text>
                                                </View>
                                                <View style={tableCell}>
                                                    <Text style={textAlignRight}>{Reconciliation}</Text>
                                                </View>
                                            </View>
                                            <View style={tableRow}>
                                                <Text style={[ textAlignRight, (/-/).test(RefRatio) && textNavColor ]}>{RefRatio}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        }
                        <View style={{ ...tableContent, ...tableBorder, backgroundColor: '#e1e1e1' }}>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                <Text style={textAlignLeft}>資產總額</Text>
                            </View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, borderColor: '#e1e1e1' }}></View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5 }}>
                                <Text style={{ ...textAlignRight, color: "#f26400" }}>{Assets.Total}</Text>
                            </View>
                            <View style={{ ...tableRow, flexDirection: 'row' }}>
                                <Selector
                                    data={currencyList}
                                    value={this.state.currencyText}
                                    modalStyle={{ marginLeft: 3, backgroundColor: '#e1e1e1' }}
                                    textStyle={{ textAlign: 'right', fontSize: 14 }}
                                    onChange={ option => this.currencyChanged(option.label) }
                                />
                                <IconBlock
                                    name="unsorted"
                                    size={16}
                                    viewStyle={{ justifyContent: 'center' }}
                                    style={{ alignSelf: 'center', padding: 0, paddingRight: 5 }}
                                />
                            </View>
                        </View>
                    </View>
                </CardSection>
                
                {/* 境外基金投資組合 */}
                <CardSection>
                    <View style={{ ...tableStyle, ...tableBorder, marginBottom: 20 }}>
                        <View style={{ ...tableTitle, backgroundColor: '#dff0d8' }}>
                            <Text style={tableTitleText}>境外基金投資組合</Text>
                        </View>
                        <View style={{ ...tableContent, ...tableBorder, backgroundColor: '#fffae6' }}>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 3 }}>
                                <Text style={textAlignLeft}>基金代碼</Text>
                                <Text style={textAlignLeft}>基金名稱</Text>
                            </View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 1 }}>
                                <Text style={textAlignLeft}>交易</Text>
                                <Text style={textAlignLeft}>幣別</Text>
                            </View>
                            <View style={{ ...tableRow, ...tableBorder, borderRightWidth: 0.5, flex: 2 }}>
                                <View style={{ ...tableCell, height: null }}>
                                    <Text style={{ alignSelf: 'center' }}>參考報酬率</Text>
                                </View>
                                <View style={{ ...tableCell, height: null, flexDirection: 'row' }}>
                                    <CheckBox
                                        label=""
                                        checked={this.state.interestChecked}
                                        checkboxStyle={{ height: 15, width: 15, marginTop: 5, marginRight: 3 }}
                                        onChange={ checked => this.setState({ interestChecked: !checked }) }
                                    />
                                    <Text style={{ alignSelf: 'center' }}>含息</Text>
                                </View>
                            </View>
                            <View style={{ ...tableRow, flex: 1 }}>
                                <Text style={{ alignSelf: 'center' }}>明細</Text>
                            </View>
                        </View>
                        {
                            FundsInvest.map(( item, index ) => {
                                return(
                                    <FundsInvestDetailRow key={index} data={item} />
                                );
                            })
                        }
                    </View>
                </CardSection>
                
                {/* 提醒 */}
                <CardSection>
                    <Text style={{ fontSize: 14, color: '#707070', fontWeight: '600' }}>提醒你</Text>
                </CardSection>
                
                <CardSection>
                    <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ color: '#707070' }}>{`\u2022`}</Text>
                        <Text style={{ fontSize: 10, color: '#707070', fontWeight: '600', padding: 3 }}>
                            以上成本未含手續費，上述參考報酬率未計入已領回之現金利息。
                        </Text>
                    </View>
                </CardSection>
                
                <CardSection>
                    <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ color: '#707070' }}>{`\u2022`}</Text>
                        <Text style={{ fontSize: 10, color: '#707070', fontWeight: '600', padding: 3 }}>
                            自2016/11/3起，為滿足投資人投資參考需求，轉換交易成本計算原則，更改為「轉入成本=轉入基金淨值x轉入單位數」。
                        </Text>
                    </View>
                </CardSection>
                
                {/* 注意事項 */}
                <CardSection>
                    <Notice>
                        <View>
                            <Text style={{ ...noticeText, fontSize: 12, paddingTop: 10 }}>{title}</Text>
                        </View>
                        {
                            list.map((text, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                                        <Text style={{ ...noticeText, fontSize: 10 }}>{`${index + 1}. `}</Text>
                                        <Text style={{ ...noticeText, fontSize: 10 }}>{text}</Text>
                                    </View>
                                );
                            })
                        }
                    </Notice>
                </CardSection>
                
                <Caption />
            </Card>
        );
    }
};

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 15,
        color: '#727272',
        fontWeight: '600',
    },
    tableStyle: {
        flex: 1,
        borderWidth: 1,
        paddingBottom: 0.8,
    },
    tableTitle: {
        justifyContent: 'center',
        height: 40,
    },
    tableTitleText: {
        alignSelf: 'center',
        paddingLeft: 5,
        fontWeight: '600',
        fontSize: 16,
    },
    tableBorder: {
        borderColor: '#808080',
    },
    textAlignLeft: {
        alignSelf: 'flex-start',
        paddingLeft: 5,
        fontSize: 14,
    },
    textAlignRight: {
        alignSelf: 'flex-end',
        paddingRight: 5,
        fontSize: 14,
    },
    tableContent: {
        flexDirection: 'row',
        height: 60,
        borderTopWidth: 1,
    },
    tableRow: {
        justifyContent: 'center',
        height: 60,
        flex: 1,
    },
    tableCell: {
        justifyContent: 'center',
        height: 29,
    },
    textNavColor: {
        color: '#00b200',
    },
    textPosColor: {
        color: '#FF0000',
    },
    detailTitle: {
        alignSelf: 'center',
        fontSize: 12,
    },
    detailContent: {
        alignSelf: 'flex-start',
        fontSize: 12,
        paddingLeft: 5
    },
    noticeText: {
        color: '#707070',
        fontWeight: '600',
    }
}

const mapStateToProps = ({ fundsData }) => {
    const { data } = fundsData;

    return { data };
}

export default connect(mapStateToProps, {
    getFundsData
})(Overview);