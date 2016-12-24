import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {
    Container,
    Content,
    Button,
    Icon,
    Footer,
    FooterTab,
    Badge,
    InputGroup,
    Input
} from 'native-base';

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

    static get defaultProps() {
        return {title: 'Home Screen'};
    }

    render() {
        return (
            <Container >
                <Content style={[
                    styles.content, {
                        flex: 1,
                        flexDirection: 'row'
                    }
                ]} contentContainerStyle={{
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                        <View>
                            <Text>Buttons</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row', alignItems: 'center' 
                        }}>
                            <Button style={localStyle.button} block>
                                Primary
                            </Button>

                            <Button rounded style={localStyle.button} danger>
                                Danger
                            </Button>

                            <Button danger>
                                <Icon name='ios-close-circle'/>
                            </Button>
                        </View>

                    </View>

                    <InputGroup borderType='regular'>
                        <Input style={{
                            width: 200,
                            height: 200
                        }} multiline={true} placeholder='Multiline Text Input'/>
                    </InputGroup>
                </Content>

                <Footer >
                    <FooterTab>
                        <Button disabled>
                            <Badge>2</Badge>
                            Apps
                            <Icon name='ios-apps-outline'/>
                        </Button>

                        <Button disabled>
                            Navigate
                            <Icon name='ios-compass'/>
                        </Button>
                        <Button active onPress={Actions.home}>
                            Home
                            <Icon name='ios-home'/>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}
