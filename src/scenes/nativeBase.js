import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {Container, Content, Button, Icon} from 'native-base';

localStyle = {
    button: {
        margin: 5
    }
}
export default class NativeBase extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    // static get defaultProps() {
    //     return {title: 'Home Screen'};
    // }

    /*
    <Button block info width={80} text="Home" style={{
        marginTop: 40
    }} />
    */

    render() {
        return (
            <Container>
                <Content marginTop={20}>
                    <Button style={localStyle.button} block>
                        Primary
                    </Button>

                    <Button rounded style={localStyle.button} danger>
                        Danger
                    </Button>

                    <Button danger>
                        <Icon name='ios-close-circle'/>
                    </Button>

                    <Button style={localStyle.button} block style={{
                        marginTop: 40
                    }} onPress={Actions.home}>Home</Button>

                </Content>
            </Container>
        );
    }
}
