import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {Container, Content, Button} from 'native-base';

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
                <Content>
                    <Button block>
                        Primary
                    </Button>
                    <Button block success>
                        Success
                    </Button>
                    <Button block info>
                        Info
                    </Button>
                    <Button block warning>
                        Warning
                    </Button>
                    <Button block danger>
                        Danger
                    </Button>

                    <Button block style={{
                        marginTop: 40
                    }} onPress={Actions.home}>Home</Button>

                </Content>
            </Container>
        );
    }
}
