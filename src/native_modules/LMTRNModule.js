
var LMTRNModule = require('NativeModules').LMTRNModule


 let squareMe = (num) => {
    if (num == '') {
      return;
    }

    console.log("CALLING TO NATIVE");

    LMTRNModule.squareMe(num, (error, number) => {
      if (error) {
        console.error(error);
      } else {
        console.log("OKIIII");
      }
    })
  }

export default squareMe
