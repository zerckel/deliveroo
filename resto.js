import React, {Component} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Container} from 'native-base';

class resto extends Component {

  static sharedElements = (navigation, otherNavigation, showing) => {
    return [{id: navigation.getParam("id"), animation: 'move', resize: 'auto', align: 'auto'}];
  }

  render() {
    return (
            <Container>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <SharedElement id={'Offers'}>
                  <Image style={{width: Dimensions.get('window').width, height: 257}} resizeMode="contain"
                         source={{uri: 'https://www.barbanews.com/wp-content/uploads/2020/05/mcdonalds.jpg'}}/>
                </SharedElement>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingHorizontal: 10}}>
                  <Text style={{fontWeight: 'bold', fontSize: 40}}>
                    McDonald's
                  </Text>
                  <Text style={{fontWeight: 'bold', paddingVertical: 5}}>
                    American - Sandwiches - Burgers
                  </Text>
                  <Text>
                    2,51km away - 129 Avenue du Maréchal Foch, -View map
                  </Text>
                  <Text>
                    McDonald's, chaîne emblématique de burger's....
                  </Text>
                </View>
              </View>
            </Container>
    );
  }
}

export default resto;
