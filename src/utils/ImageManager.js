import React, { Component } from 'react';
import {Image}
  from "react-native"


const ImageManager = (image) => {
   
   if(image == "sunny"){
     return (
           <Image
             style={{width: 32, height: 32}}
             source={require("../resources/images/sunny.png")} />
      )
   } else {
   
   }
}

export default ImageManager
