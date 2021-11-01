import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,TextInput
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { repoActions } from '../../actions';

  function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }



function RepoList() {
    
    const navigation = useNavigation()
    const repoStates = useSelector(state => state.repo)
    let {repoList, loading, searchText} = repoStates;
    const dispatch = useDispatch()
  
    function handleSearchTextChange(e)
    {
        dispatch(repoActions.getReposList(e));
    }

    return (
      <View
        style={{
          flex: 1
        }}>
            <View style={{padding:5, backgroundColor:'lightgray'}}>
            <TextInput placeholder='Search Repo Name Here' placeholderTextColor="gray" 
                 style={{ marginLeft: 20, fontSize: 18, color: '#000' ,
                 backgroundColor:'#fff',
                 borderWidth:1 , borderBottomColor:'gray', margin:10, borderRadius:5 }}
                    onChangeText={handleSearchTextChange}
                    value={searchText}
                />
            </View>
            
        {loading ? <Text style ={{alignSelf:'center'}}>Loading Data</Text> :
         repoList.length > 0 ? (
          <FlatList
            data={repoList}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({ item }) => {
            let imageurl = (item.owner && item.owner.avatar_url ) ? item.owner.avatar_url 
            : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'

            return  <View style={styles.bookItemContainer}>
                <Image source={{ uri: imageurl }} style={styles.thumbnail} />
                <View style={styles.bookItemMetaContainer}>
                  <Text style={styles.textTitle} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.textAuthor}>by : {item.owner.login}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('RepoDetailsComponent',{item})}
                      style={styles.button}>
                      <Text style={styles.buttonText}> View Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }}
          />
        ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartMessage}>Your List is empty :'(</Text>
          </View>
        )}
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    bookItemContainer: {
      flexDirection: 'row',
      padding: 10,
      borderWidth:1,
      marginBottom:10,
      marginLeft:5,
      marginRight:5,
      borderRadius:5
    },
    thumbnail: {
      width: 100,
      height: 100,
      resizeMode:'contain'
    },
    bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10,
      flexDirection:'column',
      flex:1
    },
    textTitle: {
        color:'red',
      fontSize: 22,
      fontWeight: '400'
    },
    textAuthor: {
      fontSize: 18,
      fontWeight: '200',
      color:'green'
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
    },
    emptyCartContainer: {
      marginTop: 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
    emptyCartMessage: {
      fontSize: 28
    }
  })
  
  export default RepoList