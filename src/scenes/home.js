/* @flow */

import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {Container, Content, Card, CardItem} from 'native-base';

import {Column as Col, Row} from 'react-native-flexbox-grid';

class SimpleButton extends Component {

    render() {
        return (
            <TouchableHighlight style={[
                styles.button, {
                    marginHorizontal: 20
                }
            ]} onPress={this.props.action}>
                <Text style={styles.white}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {title: 'Home Screen'};
    }

    _navigate(key) {
        this.props.navigator.push({
            name: key // Matches route.name
        })
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>

                    <View flex style={{
                        flexDirection: "column"
                    }}>
                        <View>
                            <Text style={styles.heading}>Welcome to Kishar Nine.</Text>
                            <Text style={styles.subheading}>This is the {this.props.title}
                                screen</Text>
                        </View>

                        <View>
                            <Text style={{
                                marginVertical: 20
                            }}>Here are some samples:</Text>
                        </View>

                        <Row size={12}>
                            <Col sm={6} md={4} lg={3}>
                                <SimpleButton text="Counter" action={Actions.counter}/>
                                <SimpleButton text="RNMK (Material)" action={Actions.material}/>
                                <SimpleButton text="RNMK (Material)" action={Actions.materialPart2}/>
                            </Col>
                            <Col sm={6} md={4} lg={3}>
                                <SimpleButton text="Native Base" action={Actions.nativeBase}/>
                                <SimpleButton text="Native Base Deck Swiper" action={Actions.deckSwiper}/>
                            </Col>
                        </Row>
                    </View>
                </Content>
            </Container>
        )
    }
}
