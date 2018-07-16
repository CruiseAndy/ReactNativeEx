/*
 * Date : 2017/12/01
 * Writer : kevin
 */

/* Tools */
import React, { Component } from 'react';

/* Components */
import {
    View,
    ScrollView,
    Dimensions,
    Animated,
    Alert,
    PanResponder,
    PixelRatio
} from 'react-native';

const { width, height } = Dimensions.get('window');

class AnimatedMoveFromLeft extends Component {

    constructor (props) {
        super(props);

        this.state = {
            moveAnimatedWidth: new Animated.Value(0)
        };

        this._panResponder = {};
    }
    

    componentWillReceiveProps(nextProps) {

        nextProps.isOpen ? this.scrollView.scrollTo({ x: 0, y: 0 }) : "";
        
        Animated.timing(                    // 隨時間邊畫執行的動畫類型
            this.state.moveAnimatedWidth,            // 動畫中的變量
            {
              toValue: nextProps.isOpen ? width * 0.7 : 0,         // 寬度最終變為 state === true ? 0 : window.width * 0.8
              duration: 800,
            }
        ).start();
    }
    
    componentWillMount = () => {

        if(this.props.openChangeFun != undefined){

            this._panResponder = PanResponder.create({

                onStartShouldSetPanResponder: (evt, gestureState) => true,

                onStartShouldSetPanResponderCapture: (evt, gestureState) => true,

                onMoveShouldSetPanResponder: (evt, gestureState) => true,

                onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

                onPanResponderRelease: (evt, { dx, dy }) =>{

                    if(dx < -50)
                        this.props.openChangeFun(false);
                }
            });
        }
    };

    render() {
        const { containerStyle } = styles;

        return(
            <Animated.View style={{ ...containerStyle, width: this.state.moveAnimatedWidth, height, ...this.props.style }} >
                <ScrollView ref={ (ref) => this.scrollView = ref } {...this._panResponder.panHandlers }>
                    {this.props.children}
                </ScrollView>
            </Animated.View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
}

export { AnimatedMoveFromLeft };