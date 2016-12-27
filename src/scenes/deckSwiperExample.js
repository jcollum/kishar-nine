/* @flow */

import React, {Component} from 'react';
import {Image} from 'react-native';
import {
    Container,
    Icon,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text
} from 'native-base';

import {styles} from '../styles'

const cards = [
    {
        title: 'Cat',
        note: 'dreamstimefree_16717102',
        image: require('../resources/dreamstimefree_16717102_small.png')
    }, {
        title: 'Puppies',
        note: 'dreamstimefree_26811888',
        image: require('../resources/dreamstimefree_26811888_small.png')
    }, {
        title: 'Goats',
        note: 'dreamstimefree_9628921',
        image: require('../resources/dreamstimefree_9628921_small.png')
    }
];

export default class DeckSwiperExample extends Component {

    render() {
        return (
            <Container>
                <View>
                    <DeckSwiper dataSource={cards} renderItem={item =>
                      <Card style={{
                            elevation: 3
                        }}>
                            <CardItem>
                                <Thumbnail source={item.image}/>
                                <Text>{item.title}</Text>
                                <Text note>item.note</Text>
                            </CardItem>
                            <CardItem>
                                <Image style={{
                                    resizeMode: 'cover',
                                    width: null
                                }} source={item.image}/>
                            </CardItem>
                            <CardItem>
                                <Icon name="ios-heart" style={{
                                    color: '#ED4A6A'
                                }}/>
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>}/>
                </View>
            </Container>
        );
    }
}
