import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,Linking
} from 'react-native'






function RepoDetailsComponent({ navigation,route }) {
debugger;
    const { id, node_id,name,owner,description,html_url,language,score } = route.params.item;

    let authorname = owner ? owner.login : 'No Availble'
let imageurl = (owner && owner.avatar_url ) ? owner.avatar_url 
: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'

function openInWebView(url){
    Linking.openURL(url)
  
}

function renderRow(label, value){
    return <View style={{flexDirection:'row',padding:5}}>
            <Text style={{fontWeight:'bold',marginRight:10}}>{label} {' :'}</Text>
            <Text>{value}</Text>
    </View>
}

    return (
      <View
        style={{
          flex: 1,
          margin:5,
          borderWidth:1,
          borderRadius:5,
        }}>
            <View style={{padding:10, justifyContent:'center',alignItems:'center'}}>
               <Image source={{ uri: imageurl }} style={styles.thumbnail} />
            </View>
            {renderRow('ID',id)}
            {renderRow('Language',language)}
            {renderRow('Full Name',name)}
            {renderRow('Author Name',authorname)}
            {renderRow('Node Id',node_id)}
            {renderRow('Description',description)}
            {renderRow('Score',score)}
            
            <TouchableOpacity
                      onPress={() => openInWebView(html_url)}
                      style={styles.button}>
                      <Text style={styles.buttonText}> Open Repo </Text>
             </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    buttonContainer: {
      //position: 'absolute',
      top: 10,
      //left: 10
      justifyContent:'flex-end',
      alignSelf:'flex-end'
    },
    button: {
      borderRadius: 8,
      backgroundColor: '#ff333390',
      padding: 5,
      width:150
    },
    buttonText: {
      fontSize: 22,
      color: '#fff'
    }
  })
  
  export default RepoDetailsComponent