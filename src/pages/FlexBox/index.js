import React, { Component, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

// class component
// class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log('constructor');
//         this.state = {
//             subscriber: 100,
//         }
//     }

//     componentDidMount() {
//         console.log('component did mount');
//         setTimeout(() => {
//           this.setState({
//               subscriber: 600,
//           }); 
//         }, 2000);
//     }

//     componentDidUpdate() {
//         console.log('component did update');

//     }

//     componentWillUnmount() {
//         console.log('component will amount');
//     }
//     render(){
//         console.log('render');
//         return (
//             <View>
//                 <View style={{
//                 flexDirection: 'row', 
//                 backgroundColor: '#c8d6e5', 
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 }}>
//                 <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
//                 <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
//                 <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
//                 <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-around'
//                 }}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//                     <Image source={{
//                         uri: 'https://placeimg.com/100/100/tech'
//                     }}
//                     style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
//                     />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}}>React Native</Text>
//                         <Text>{this.state.subscriber} OKe</Text>
//                     </View>
//                 </View>
//             </View>
//         );
         
//     }
// }


// functional component (Hooks)
const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200)
    useEffect(() => {
        console.log('did amount')
        setTimeout(() => {
            setSubscriber(400);
        }, 2000);
        return () => {
            console.log('did update');
        };
    }, [subscriber]);

    // useEffect(() => {
    //     console.log('did update')
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     }, 2000);
    // }, [subscriber]);
    return (
        <View>
                <View style={{
                flexDirection: 'row', 
                backgroundColor: '#c8d6e5', 
                alignItems: 'center',
                justifyContent: 'space-between',
                }}>
                <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Image source={{
                        uri: 'https://placeimg.com/100/100/tech'
                    }}
                    style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
                    />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>React Native</Text>
                        <Text>{subscriber} OKe</Text>
                    </View>
                </View>
            </View>
    )
}

export default FlexBox;