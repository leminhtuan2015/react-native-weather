import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Place from "../models/Place"
import DetailView from '../components/screens/DetailView.js';

let places = Place.all()

// 'store' is the object from <Provider store={Store}>
// Provider is given the store as a prop
const mapStateToProps = (store) => ({
  store: store,
  places: places
})

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => {
    dispatch({type: ActionTypes.GET_WEATHER_DATA, 
      data: {city: "French", countyCode: "fr"}})
  },
})

//const DetailViewContainer = connect(mapStateToProps, mapDispatchToProps)(DetailView)
const DetailViewContainer = connect(mapStateToProps)(DetailView)

export default DetailViewContainer 
