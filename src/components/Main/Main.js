// import React, { Component } from "react";
// import { View } from "react-native";
// import { Button } from "react-native-elements";
// import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
// import {
//     minLengthNumber,
//     maxLengthNumber,
//     minLengthStr,
//     maxLengthStr
// } from '../ValidationMethod/FormValidation';


// class Main extends Component {

//     state = {

//         disabledSubmit: true,

//         txtSiteNameValue: "",
//         siteNameErrorMsg: '',

//         txtPrimaryKeyValue: "",
//         primaryKeyErrorMsg: '',

//     }

//     siteNameHndler = value => {
//         this.setState({
//             txtSiteNameValue: value,

//         });

//         if (!minLengthNumber(value, 100) || !maxLengthNumber(value, 100000)) {
//             this.setState(prevState => { 
//                 siteNameErrorMsg: 'Please enter a number between 100 and 10,0000' });

//             return;
//         }
//         else{
//             this.setState({ siteNameErrorMsg: '' });
//         }

//         if(!minLengthStr(value, 4) || !maxLengthStr(value, 5)){
//             this.setState({ siteNameErrorMsg: 'Please enter a number between 4 and 5 char' });
//             return;
//         }
//         else{
//             this.setState({ siteNameErrorMsg: '' })
//         }
//     };

//     primaryKeyHndler = value => {
//         this.setState({
//             txtPrimaryKeyValue: value
//         });
//     };

//     // formValidation = () => {
//     //     const { txtSiteNameValue, txtPrimaryKeyValue } = this.state;

//     //     const form = [
//     //         [
//     //             txtSiteNameValue,
//     //             [
//     //                 ['minLength', 1, 'Please enter a number between 1 and 10'],
//     //                 ['maxLength', 10, 'Please enter a number between 1 and 10'],
//     //             ]
//     //         ],
//     //         [
//     //             txtPrimaryKeyValue,
//     //             [
//     //                 ['minLength', 11, 'Please enter a number between 11 and 20'],
//     //                 ['maxLength', 20, 'Please enter a number between 11 and 20'],
//     //             ]
//     //         ]
//     //     ]
//     //     FormValidation(form);
//     // };

//     scramble = () => {

//         // this.formValidation();

//         alert(this.state.txtSiteNameValue + " & " + this.state.txtPrimaryKeyValue);
//     }


//     render() {

//         return (
//             <View>
//                 <FormLabel>Site Name:</FormLabel>
//                 <FormInput
//                     autoCorrect={true}
//                     onChangeText={this.siteNameHndler}
//                     placeholder='please enter a site name'
//                 />
//                 <FormValidationMessage>{this.state.siteNameErrorMsg}</FormValidationMessage>

//                 <FormLabel>Primary Key:</FormLabel>
//                 <FormInput
//                     // keyboardType={'numeric'}
//                     autoCorrect={false}
//                     secureTextEntry
//                     onChangeText={this.primaryKeyHndler}
//                     placeholder='please enter your primary key'
//                     maxLength={10}

//                 />
//                 <FormValidationMessage>{this.state.primaryKeyErrorMsg}</FormValidationMessage>
//                 <Button
//                     disabled={this.state.disabledSubmit}
//                     onPress={this.scramble}
//                     title="Press Me To Scramble!"
//                     icon={{ name: 'cached' }}
//                     backgroundColor={'#FFA500'}
//                     borderRadius={10}
//                 />
//             </View>


//         );
//     }
// }

// export default Main;

// // const styles = {
// //     textStyle: {
// //         fontSize: 20
// //     },
// //     viewStyle: {
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#F8F8F8',
// //         heigth: 550,
// //         paddingTop: 15,
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, heigth: 2 },
// //         shadowOpacity: 0.2,
// //         elevation: 2,
// //         position: 'relative'
// //     }
// // }


