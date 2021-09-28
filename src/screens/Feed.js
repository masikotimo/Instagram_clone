import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'
import {DATA} from '../utils/data'



 class xFeed extends Component {
  render() {

    const renderItem = ({ item }) => (
      <View style={this.props.themedStyle.card}>
        <Image
          source={{ uri: item.imageURI }}
          style={this.props.themedStyle.cardImage}
        />
        <View style={this.props.themedStyle.cardHeader}>
          <Text category='s1' style={this.props.themedStyle.cardTitle}>
            {item.postTitle}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Avatar
              source={{ uri: item.avatarURI }}
              size='small'
              style={this.props.themedStyle.cardAvatar}
            />
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.cardContent}>
          <Text category='p2'>{item.randomText}</Text>
        </View>
      </View>
    )

    return (
      <List
        style={this.props.themedStyle.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={DATA.id}
      />
    )
  }
}

export default Feed = withStyles(xFeed, theme => ({
  container: {
    flex: 1
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    marginBottom: 25
  },
  cardImage: {
    width: '100%',
    height: 300
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: theme['color-basic-1000']
  },
  cardAvatar: {
    marginRight: 16
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: theme['color-basic-600']
  }
}))