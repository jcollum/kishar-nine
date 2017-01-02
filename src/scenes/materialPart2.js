import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Linking,
    ScrollView,
    Platform,
    Image
} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {RaisedButton} from './../components/raisedButton';
import {
    mdl,
    MKButton,
    MKColor,
    MKTouchable,
    MKTextField,
    MKIconToggle,
    MKCheckbox,
    TickView,
    getTheme
} from 'react-native-material-kit';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel().withPlaceholder('Type a number...').withStyle(styles.textfieldWithFloatingLabel).withTextInputStyle({flex: 1}).withFloatingLabelFont({fontSize: 10, fontStyle: 'italic', fontWeight: '200'}).withKeyboardType('numeric').build();

const theme = getTheme();

export default class MaterialPart2 extends Component {
    constructor(props) {
        super(props);
        this.state = ({collapsedCard: true, collapsedCardStyle: {}});
        this._onIconClicked = this._onIconClicked.bind(this);
        this._renderEllipsisText = this._renderEllipsisText.bind(this);
        console.log(this.state)
    }

    _onIconClicked() {
        console.log("after click")
        console.log(this.state)
        this.setState({
            collapsedCard: !this.state.collapsedCard
        });
        if (this.state.collapsedCard) {
            this.setState({
                collapsedCardStyle: {
                    height: 20
                }
            });

        } else {
            this.setState({collapsedCardStyle: {height: 200}});
        }

        console.log(this.state)
    }

    _renderEllipsisText() {
        if (this.state.collapsedCard) {
            return (
                <Text style={theme.cardContentStyle}>...</Text>
            )
        } else {
            return (
                <View></View>
            );
        }
    }

    render() {

        var base64Icon = 'https://getmdl.io/assets/compindex_2x.png';
        var action = (
            <Text>
                My action</Text>
        );
        var menu = (
            <MKIconToggle checked={true} onCheckedChange={this._onIconChecked} onPress={this._onIconClicked}>
                <Text pointerEvents="none" style={styles.toggleTextOn}>Expand</Text>
                <Text state_checked={true} pointerEvents="none" style={[styles.toggleText, styles.toggleTextOn]}>Collapse</Text>
            </MKIconToggle>
        );

        return (
            <ScrollView>

                {/* this textbox is messed up in this version of RNMK?  */}
                <View style={{
                    marginTop: 4
                }}>
                    <View style={[styles.viewInner]}>
                        <MKTextField textInputStyle={{
                            flex: 1
                        }} keyboardType="ascii-capable" tintColor={MKColor.Orange} textInputStyle={{
                            color: MKColor.Blue
                        }} placeholder="Text…" style={styles.textfield}/>
                        <Text style={{
                            fontSize: 12
                        }}>(This text box might be broken in RNMK 0.3.x)</Text>
                    </View>
                    <View style={styles.viewInner}>
                        <TextfieldWithFloatingLabel ref="defaultInput"/>
                        <Text style={[
                            styles.legendLabel, {
                                marginTop: 5
                            }
                        ]}>Number of things</Text>
                    </View>
                </View>
                <View style={styles.viewInner}>
                    <Text>Togggles and Switches</Text>
                    <View style={styles.viewInner}>
                        <mdl.Switch style={styles.appleSwitch} onColor="rgba(255,152,0,.3)" thumbOnColor={MKColor.Orange} rippleColor="rgba(255,152,0,.2)" onPress={() => console.log('orange switch pressed')} onCheckedChange={(e) => console.log('orange switch checked', e)}/>
                    </View>
                    <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    ]}>
                        <MKCheckbox checked={true}/>
                        <Text>Email me a receipt</Text>
                    </View>
                    <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    ]}>
                        <Text>Do you like ice cream?</Text>
                        <MKIconToggle checked={true} onCheckedChange={this._onIconChecked} onPress={this._onIconClicked}>
                            <Text pointerEvents="none" style={styles.toggleTextOff}>OK</Text>
                            <Text state_checked={true} pointerEvents="none" style={[styles.toggleText, styles.toggleTextOn]}>No!</Text>
                        </MKIconToggle>
                    </View>
                </View>

                <View style={[styles.container, styles.viewInner]}>
                    {/* Here the magic happens*/}
                    <View style={theme.cardStyle}>
                        <Image source={{
                            uri: base64Icon
                        }} style={theme.cardImageStyle}/>
                        <Text style={theme.cardTitleStyle}>Card Sample</Text>
                        <View // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
                            style={{
                            padding: 15
                        }}>
                            <Text style={[
                                theme.cardContentStyle,
                                this.state.collapsedCardStyle, {
                                    padding: 0
                                }
                            ]}>
                                Liquorice ice cream cake icing. Gummies gummies marshmallow caramels cookie candy canes chupa chups ice cream candy canes. Chocolate bar jelly pie tart powder topping halvah tootsie roll. Chocolate cake cake candy canes. Chocolate bar halvah sugar plum dragée apple pie bear claw gummies. Cotton candy tart powder lemon drops jujubes pastry dessert. Ice cream apple pie liquorice toffee powder tootsie roll cotton candy. Bonbon biscuit cupcake biscuit chocolate dessert. Wafer chupa chups wafer lemon drops apple pie sweet sugar plum dessert. Sweet roll bear claw toffee croissant topping powder pudding pudding ice cream. Dessert chocolate cake macaroon fruitcake. Cotton candy chocolate dragée fruitcake. Macaroon croissant fruitcake danish.
                            </Text>
                            {!this.state.collapsedCard && <Text>...</Text>}
                        </View>
                        <View style={theme.cardMenuStyle}>{menu}</View>
                    </View>
                </View>

                <RaisedButton width={80} text="Home" style={{
                    marginVertical: 40,
                    marginLeft: 20
                }} onPress={Actions.home}/>
            </ScrollView>
        )
    }
}
//
// <Toggle hidden={!this.state.collapsedCart}>
// <Text>...</Text></Toggle>
