import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import EditView from '../components/screens/EditView.js';

// 'stateObject' is the object from <Provider store={Store}>
// Provider is given the store as a prop
const mapStateToProps = (store) => ({
  store: store
})


const EditViewContainer = connect(mapStateToProps)(EditView)

export default EditViewContainer 

