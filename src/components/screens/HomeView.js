/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'

import * as ActionTypes from "../../constants/ActionTypes"
import User from "../../models/User"

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
} from 'react-native';


class HomeView extends Component<{}> {
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  state = {}

  constructor(props) {
    super(props)

    this.state.dataSource = this.ds.cloneWithRows(this.props.users) 
    //this.state.dataSource = this.ds.cloneWithRows([]) 
  }

  onSelectedItem = (rowData) => {
   console.log("On Selected : " + JSON.stringify(rowData))

    let user = rowData
    this.props.dispatch({type: ActionTypes.SET_DETAIL_DATA, data: user})
    this.props.navigation.navigate('DetailView') 
  }

  onChangeText = (text) => {
    //this.props.dispatch({type:"HELLO"})
    //this.props.dispatch({type:"FILTER_USER", keyword: text, users: this.props.users})

    let data = User.filter(text)

    let dataSource = this.ds.cloneWithRows(data)
    this.setState({dataSource: dataSource})
  }

  renderRow = (rowData, sectionID) => {
    return (
      <ListItem
        roundAvatar
        onPress={()=>this.onSelectedItem(rowData)}
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }

 render1() {
  return (<View/>)
  }

 render() {
    return (
      <View style={styles.container}>
        <SearchBar
          round
          lightTheme
          onChangeText={(text) => {this.onChangeText(text)}}
          placeholder='Type Here...' />

        <ScrollView>          
          <List>
            <ListView 
              style={styles.listView} 
              renderRow={this.renderRow}
              dataSource={this.state.dataSource} >
            </ListView> 
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  listView: {
    flex: 1,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default  HomeView
