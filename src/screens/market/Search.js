/* @flow */

import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Button, Item, Input,Icon,Header } from 'native-base'
import colors from '../../components/colors'
export default class Search extends Component {

  constructor(){
    super()
    this.searchValue = ''
  }

  _onChangeText = (text) => {
      this.searchValue = text
  }

  _handleSearch = () => {
      this.props.onSearch(this.searchValue)
  }

  render() {
    return (
        <View style={[styles.container]}>
            <Input
                placeholder='Search'
                returnKeyType='search'
                onChangeText={this._onChangeText}
                style={[styles.input]}
                onSubmitEdit={ () => this._handleSearch()}
                />
            <Button transparent onPress={()=>this._handleSearch()}>
                <Icon name='ios-search' style={{color:colors.theme}}/>
            </Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        borderRadius:50,
        height:30,
    },
    input :{
        height:25,
    }
})