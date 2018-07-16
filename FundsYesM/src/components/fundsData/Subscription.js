/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image,
    Linking,
} from 'react-native';
import {
    Card,
    CardSection,
    Selector,
    Notice,
    Spinner,
    Button,
    IconBlock,
    RadioBox,
    Input,
} from '../common';
import CheckBox from 'react-native-checkbox';
import Caption from '../captions/Caption';

/* Actions */
import {
    // Step 1
    getFundsCompany,
    companyChanged,
    fundsChanged,
    selectedFunds,
    // Step 2
    amountChanged,
    selectCurrency,
    inputedData,
    // Step 3
    checkedSubscribeData,
    // Step 4
    subscribeComplete,
} from '../../actions';

/* Images */
import {
    B31008_I_0, B31008_P_0
} from '../images/image';

/* Json */
import {
    periodinvestNotice
} from './Notice.json';

const stepTitle = [ "1. 選擇交易基金", "2. 申購輸入", "3. 申購確認", "4. 申購完成" ];
const currencyArr = [
    {label: '台幣', value: 0 },
    {label: '外幣', value: 1 }
];
const promotionsArr = [
    {label: '英傑華持有客戶單筆優惠手續費率 0.00%', value: 0 },
    {label: '適用優惠手續費率 0.89%', value: 1 }
];

class Subscription extends Component {
    constructor(props){
        super(props);

        this.state = {
            stepIndex: 0,
        }
    }

    componentWillMount() {
        this.props.getFundsCompany();
    }

    render() {
        const { titleStyle, noticeText, errorText } = styles;
        const { title, list } = periodinvestNotice;
        const { width, height } = Dimensions.get('window');

        if(this.props.companyList == []) {
            return (
                <Card>
                    <View style={{ flex: 1, backgroundColor: '#000', opacity: 0.4, height: height - 60 }}>
                        <Spinner size='large' />
                    </View>
                </Card>
            );
        }

        return(
            <Card>
                {
                    this.props.error
                    ?   <CardSection>
                            <Text style={errorText}>{this.props.error}</Text>
                        </CardSection>
                    :   null
                }

                <CardSection>
                    <Text style={titleStyle}>單筆申購</Text>
                </CardSection>

                <CardSection>
                    <Text style={{ ...titleStyle, fontSize: 16, paddingTop: 5, paddingBottom: 5 }}>{stepTitle[this.props.stepIndex]}</Text>
                </CardSection>
                
                {/* 單筆申購 Step 1 */}
                <CardSection>
                    {
                        /* Step 1 */
                        this.props.stepIndex === 0
                        ?   <SelectFunds
                                companyList={this.props.companyList}
                                companyName={this.props.companyName}
                                companyChanged={this.props.companyChanged.bind(this)}
                                fundsList={this.props.fundsList}
                                fundsName={this.props.fundsName}
                                fundsChanged={this.props.fundsChanged.bind(this)}
                                fundsSelectorDisable={this.props.fundsSelectorDisable}
                                selectedFunds={this.props.selectedFunds}
                            />
                            /* Step 2 */
                        :   this.props.stepIndex === 1
                            ?   <InputData
                                    fundsName={this.props.fundsName}
                                    selectCurrency={this.props.selectCurrency}
                                    amount={this.props.amount}
                                    amountChanged={this.props.amountChanged.bind(this)}
                                    account={this.props.account}
                                    bank={this.props.bank}
                                    inputedData={this.props.inputedData}
                                />
                            :   this.props.stepIndex === 2
                                ?   <CheckSubscribeData
                                        fundsName={this.props.fundsName}
                                        amount={this.props.amount}
                                        account={this.props.account}
                                        bank={this.props.bank}
                                        checkedSubscribeData={this.props.checkedSubscribeData}
                                    />
                                :   <SubscribeComplete
                                        fundsName={this.props.fundsName}
                                        amount={this.props.amount}
                                        account={this.props.account}
                                        bank={this.props.bank}
                                        subscribeComplete={this.props.subscribeComplete}
                                    />
                    }
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

class SelectFunds extends Component {
    render() {
        const {
            containerStyle,
            tableStyle,
            tableTopBorder,
            tableRow,
            textAlignCenter,
            selectorModal,
            selectorText,
        } = styles;

        return(
            <View style={containerStyle}>
                <View style={tableStyle}>
                    <View style={{ backgroundColor: '#dff0d8' }}>
                        <View style={tableRow}>
                            <Text style={{ ...textAlignCenter, fontSize: 16 }}>基金公司</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <View style={tableRow}>
                            <Selector
                                modalStyle={selectorModal}
                                value={this.props.companyName}
                                data={this.props.companyList}
                                onChange={ option => this.props.companyChanged(option.label) }
                            />
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder, backgroundColor: '#dff0d8' }}>
                        <View style={tableRow}>
                            <Text style={{ ...textAlignCenter, fontSize: 16 }}>基金名稱</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <View style={tableRow}>
                            <Selector
                                modalStyle={selectorModal}
                                value={this.props.fundsName}
                                data={this.props.fundsList}
                                onChange={ option => this.props.fundsChanged(option.label) }
                                disabled={this.props.fundsSelectorDisable}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Button onPress={ () => this.props.selectedFunds(1) }>
                        <Text>確認選取基金</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

class InputData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agreeChecked: false,
        }
    }

    render() {
        const {
            containerStyle,
            tableStyle,
            tableTopBorder,
            tableRow,
            textAlignCenter,
            table2Row,
            table2TitleRow,
        } = styles;

        return(
            <View style={containerStyle}>
                <View style={tableStyle}>
                    <View style={{ backgroundColor: '#dff0d8', flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>基金名稱</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>計價幣別</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder, flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>{this.props.fundsName}</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>歐元</Text>
                        </View>
                    </View>
                </View>

                <View style={tableStyle}>
                    <View style={tableTopBorder}>
                        <View style={tableRow}>
                            <Text style={textAlignCenter}>{`參考淨值(日期)：`}</Text>
                        </View>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow, justifyContent: 'space-between' }}>
                            <Text style={textAlignCenter}>申購金額</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <IconBlock
                                    name="question-circle"
                                    size={10}
                                    color="blue"
                                />
                                <Text style={{ ...textAlignCenter, color: 'blue', fontSize: 14 }}>說明</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder }}>
                        <View style={table2Row}>
                            <RadioBox
                                data={currencyArr}
                                formHorizontal
                                initial={-1}
                                buttonSize={6}
                                buttonOuterSize={16}
                                onPress={value => this.props.selectCurrency(value)}
                            />
                        </View>
                        <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                            <Input
                                value={this.props.amount}
                                keyboardType = 'numeric'
                                onChangeText={value => this.props.amountChanged(value)}
                            />
                        </View>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>扣款帳號</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>{`銀行：${this.props.account}`}</Text>
                        <Text style={table2Row}>{`帳號：${this.props.bank}`}</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>優惠活動</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <View style={table2Row}>
                            <RadioBox
                                data={promotionsArr}
                                initial={-1}
                                buttonSize={6}
                                buttonOuterSize={16}
                                onPress={() => console.log("select promotion")}
                            />
                        </View>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>參考手續費</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>{}</Text>
                    </View>
                </View>

                <View style={tableRow}>
                    <Text
                        style={{ fontSize: 12, color: '#939393', fontWeight: '600' }}
                    >參考淨值說明：資料由晨星（Morningstar）提供，不代表實際交易淨值，實際交易淨值將以基金公司公告為準。</Text>
                </View>

                <View style={{ paddingTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Linking.openURL("http://b2b.cnyes.com/news/b2bfunc/pdf/B31008-I.pdf")}>
                        <IconBlock
                            name="download"
                            size={20}
                            color="blue"
                        >
                        <Text style={{ ...textAlignCenter, color: 'blue' }}>投資人須知</Text>
                        </IconBlock>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, borderWidth: 0.5 }}>
                    <ScrollView>
                        <Image
                            resizeMode="contain"
                            source={B31008_I_0}
                            style={{ width: "100%" }}
                        />
                    </ScrollView>
                </View>

                <View style={{ paddingTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Linking.openURL("http://b2b.cnyes.com/news/b2bfunc/pdf/B31008-P.pdf")}>
                        <IconBlock
                            name="download"
                            size={20}
                            color="blue"
                        >
                        <Text style={{ ...textAlignCenter, color: 'blue' }}>公開說明書</Text>
                        </IconBlock>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, borderWidth: 0.5 }}>
                    <ScrollView>
                        <Image
                            resizeMode="contain"
                            source={B31008_P_0}
                            style={{ width: "100%" }}
                        />
                    </ScrollView>
                </View>

                <View style={tableRow}>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                        <CheckBox
                            label=""
                            checked={this.state.agreeChecked}
                            checkboxStyle={{ height: 12, width: 12, marginRight: 3 }}
                            onChange={ checked => this.setState({ agreeChecked: !checked }) }
                        />
                        <Text style={{ fontSize: 12, color: '#727272' }}>本人已於交易前取得並詳閱投資人須知及公開說明書</Text>
                    </View>
                </View>
                <View>
                    <Button onPress={() => this.props.inputedData(2)}>
                        <Text>下一步</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

class CheckSubscribeData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agreeChecked: false,
        }
    }

    render() {
        const {
            containerStyle,
            tableStyle,
            tableTopBorder,
            tableRow,
            textAlignCenter,
            table2Row,
            table2TitleRow,
        } = styles;

        return(
            <View style={containerStyle}>
                <View style={tableStyle}>
                    <View style={{ backgroundColor: '#dff0d8', flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>基金名稱</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>計價幣別</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder, flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>{this.props.fundsName}</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>歐元</Text>
                        </View>
                    </View>
                </View>

                <View style={tableStyle}>
                    <View style={tableTopBorder}>
                        <View style={tableRow}>
                            <Text style={textAlignCenter}>{`參考淨值(日期)：`}</Text>
                        </View>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>申購金額</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder }}>
                        <Text style={table2Row}>{this.props.amount}</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>扣款帳號</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>{`銀行：${this.props.account}`}</Text>
                        <Text style={table2Row}>{`帳號：${this.props.bank}`}</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>優惠活動</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder }}>
                        <Text style={table2Row}>英傑華持有客戶單筆優惠</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>參考手續費</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>100</Text>
                    </View>
                </View>

                <View style={tableRow}>
                    <Text
                        style={{ fontSize: 12, color: '#939393', fontWeight: '600' }}
                    >參考淨值說明：資料由晨星（Morningstar）提供，不代表實際交易淨值，實際交易淨值將以基金公司公告為準。</Text>
                </View>

                <View style={{ paddingTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Linking.openURL("http://192.168.6.2:82/EC/pdf/001.pdf")}>
                        <IconBlock
                            name="download"
                            size={20}
                            color="blue"
                        >
                        <Text style={{ ...textAlignCenter, color: 'blue' }}>基金銷售通路報酬揭露</Text>
                        </IconBlock>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, borderWidth: 0.5 }}>
                    <ScrollView>
                        <Image
                            resizeMode="contain"
                            source={B31008_I_0}
                            style={{ width: "100%" }}
                        />
                    </ScrollView>
                </View>

                <View style={{ paddingTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Linking.openURL("http://b2b.cnyes.com/news/b2bfunc/pdf/B31008-P.pdf")}>
                        <IconBlock
                            name="download"
                            size={20}
                            color="blue"
                        >
                        <Text style={{ ...textAlignCenter, color: 'blue' }}>基金風險預告</Text>
                        </IconBlock>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, borderWidth: 0.5 }}>
                    <ScrollView>
                        <Image
                            resizeMode="contain"
                            source={B31008_P_0}
                            style={{ width: "100%" }}
                        />
                    </ScrollView>
                </View>

                <View style={tableRow}>
                    <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                        <CheckBox
                            label=""
                            checked={this.state.agreeChecked}
                            checkboxStyle={{ height: 12, width: 12, marginRight: 3 }}
                            onChange={ checked => this.setState({ agreeChecked: !checked }) }
                        />
                        <Text style={{ fontSize: 12, color: '#727272' }}>本人已於交易前取得並詳閱投資人須知及公開說明書</Text>
                    </View>
                </View>

                <View style={tableRow}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#727272' }}>請再次輸入密碼</Text>
                        <Input
                            // value={this.props.id}
                            // onChangeText={value => this.props.identityChanged(value)}
                        />
                    </View>
                </View>

                <View>
                    <Button onPress={() => this.props.checkedSubscribeData(3)}>
                        <Text>下一步</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

class SubscribeComplete extends Component {

    render() {
        const {
            containerStyle,
            tableStyle,
            tableTopBorder,
            tableRow,
            textAlignCenter,
            table2Row,
            table2TitleRow,
        } = styles;

        return(
            <View style={containerStyle}>
                <View style={tableStyle}>
                    <View style={{ backgroundColor: '#dff0d8', flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>基金名稱</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>計價幣別</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder, flexDirection: 'row' }}>
                        <View style={{ ...tableRow, flex: 3, borderRightWidth: 0.5 }}>
                            <Text style={textAlignCenter}>{this.props.fundsName}</Text>
                        </View>
                        <View style={{ ...tableRow, flex: 1 }}>
                            <Text style={textAlignCenter}>歐元</Text>
                        </View>
                    </View>
                </View>

                <View style={tableStyle}>
                    <View style={tableTopBorder}>
                        <View style={tableRow}>
                            <Text style={textAlignCenter}>{`參考淨值(日期)：`}</Text>
                        </View>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>申購金額</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder }}>
                        <Text style={table2Row}>{this.props.amount}</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>扣款帳號</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>{`銀行：${this.props.account}`}</Text>
                        <Text style={table2Row}>{`帳號：${this.props.bank}`}</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>優惠活動</Text>
                        </View>
                    </View>
                    <View style={{ ...tableTopBorder }}>
                        <Text style={table2Row}>英傑華持有客戶單筆優惠</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>參考手續費</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={table2Row}>100</Text>
                    </View>

                    <View style={tableTopBorder}>
                        <View style={{ ...table2Row, ...table2TitleRow }}>
                            <Text style={textAlignCenter}>委託結果</Text>
                        </View>
                    </View>
                    <View style={tableTopBorder}>
                        <Text style={{ ...table2Row, color: '#ff0000', textAlign: 'center'}}>成功</Text>
                    </View>
                </View>

                <View>
                    <Button onPress={() => this.props.subscribeComplete(0)}>
                        <Text>繼續下單</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    errorText: {
        flex: 1,
        fontSize: 20,
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 5,
    },
    titleStyle: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 15,
        color: '#727272',
        fontWeight: '600',
    },
    noticeText: {
        color: '#707070',
        fontWeight: '600',
    },
    tableStyle: {
        borderWidth: 0.5,
        marginBottom: 15,
    },
    tableTopBorder: {
        borderTopWidth: 0.5,
    },
    tableRow: {
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textAlignCenter: {
        alignSelf: 'center',
    },
    selectorModal: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
    },
    table2Row: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 7,
        paddingBottom: 7,
    },
    table2TitleRow: {
        backgroundColor: '#e9e9e9',
        flexDirection: 'row',
    },
}

const mapStateToProps = ({ subscribeData }) => {
    const {
        stepIndex, error,
        // Step 1
        companyList, companyName, fundsList, fundsName, fundsSelectorDisable,
        // Step 2
        amount, account, bank,
    } = subscribeData;

    return {
        stepIndex, error, companyList, companyName, fundsList, fundsName, fundsSelectorDisable,
        amount, account, bank
    };
}

export default connect( mapStateToProps, {
    // Step 1
    getFundsCompany, companyChanged, fundsChanged, selectedFunds,
    // Step 2
    amountChanged, selectCurrency, inputedData,
    // Step 3
    checkedSubscribeData,
    // Step 4
    subscribeComplete
} )(Subscription);