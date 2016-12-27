import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {
    Container,
    Content,
    Button,
    Icon,
    Fab,
    Footer,
    FooterTab,
    Badge,
    InputGroup,
    Input,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Picker,
    Image
} from 'native-base';

localStyle = {
    button: {
        margin: 5
    }
}

const Item = Picker.Item;

export default class NativeBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fabActive: true,
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        };
    }

    componentDidMount() {}

    static get defaultProps() {
        return {title: 'Home Screen', fabActive: false};
    }

    onValueChange(value : string) {
        this.setState({selected1: value});
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
                            flexDirection: 'row',
                            alignItems: 'center'
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

                    <Fab active={this.state.fabActive} direction="right" style={{
                        backgroundColor: '#5067FF'
                    }} position="bottomLeft" onPress={() => this.setState({
                        fabActive: !this.state.fabActive
                    })}>
                        <Icon name="md-share"/>
                        <Button style={{
                            backgroundColor: '#34A34F'
                        }}>
                            <Icon name="logo-whatsapp"/>
                        </Button>
                        <Button style={{
                            backgroundColor: '#3B5998'
                        }}>
                            <Icon name="logo-facebook"/>
                        </Button>
                        <Button disabled style={{
                            backgroundColor: '#DD5144'
                        }}>
                            <Icon name="ios-mail"/>
                        </Button>
                    </Fab>

                    <View flex>
                        <InputGroup borderType='regular'>
                            <Input style={{
                                width: 200,
                                height: 200,
                                marginBottom: 50
                            }} multiline={true} placeholder='Multiline Text Input'/>
                        </InputGroup>
                    </View>

                    <View flex style={{
                        marginTop: 20
                    }}>
                        <Text>Your Favorite Animal (Picker widget):</Text>
                        <Picker iosHeader="Select one" mode="dialog" selectedValue={this.state.selected1} onValueChange={this.onValueChange.bind(this)}>
                            <Item label="Cats" value="key0"/>
                            <Item label="Dogs" value="key1"/>
                            <Item label="Birds" value="key2"/>
                            <Item label="Elephants" value="key3"/>
                        </Picker>
                    </View>

                    <View flex note="View block for the FAB button" style={{
                        marginBottom: 50
                    }}/>

                </Content>

                <Footer>
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
