import React from 'react';
import { Dimensions } from 'react-native';
import {Text, View, StyleSheet, ToucableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../config';

export default class SwipeableFlatlist extends React.Component{
    constructor(props){
        super(props)
        this.setState = {
            allNotifications:this.props.allNotifications
        }
    }
    updatemarkasread=(Notification)=>{
        db.collection("all_notification").doc(notification.doc_id).update({
            "notification_status":"read"
        })
    }
    onSwipeValueChange = swipeData=>{
        var allNotifications = this.state.allNotifications
        const {key, value} = swipeData
        if(value<-Dimensions.get("window").width){
            const newData = {...allNotifications}
            const previousindex = allNotifications.findIndex(item=>item.key==key)
            this.updatemarkasread(allNotifications[key])
            newData.splice(key, 1)
            this.setState({
                allNotifications:newData
            })
        }
    }
    renderItem = data =>{
          <ListItem
            leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
            title={data.item.book_name}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            subtitle={data.item.message}
            bottomDivider
          />
   }
   renderHiddenitem = ()=>{
        <View>
            <View>
                <Text style = {{backgroundColor:'blue'}}>
                    Mark as read</Text>
            </View>
        </View>
   }
   
    render(){
        return(
            <View>
           <SwipeListView
           disableRightSwipe
           data = {this.state.allNotifications}
           renderItem = {this.renderItem}
           renderHiddenItem = {this.renderHiddenitem}
           rightOpenValue = {-Dimensions.get('window').width}
           previewRowKey = {'0'}
           previewOpenValue = {-40}
           previewOpenDelay = {3000}
           onSwipeValueChange = {this.onSwipeValueChange}
           />
            </View>
        )
    }
}