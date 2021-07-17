import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, PermissionsAndroid, Touchable } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Contacts from "react-native-contacts"
import { useIsFocused } from '@react-navigation/native'
import ContactCard from '../components/ContactCard'

const MyContacts = ({navigation}) => {

  const isfocused=useIsFocused();
const [MyContact,setMyContact] = useState([]);

useEffect(()=>{
  getAllContact();
},[isfocused]);
 async function getAllContact(){
   try {
       const permisssion = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
       if(permisssion==="granted"){
         const contacts=await Contacts.getAll();
         setMyContact(contacts);
         //console.log(MyContact);
       }
   } catch (error) {
     console.log(error);
   }
 }

  return (
    <View style={styles.container}>
     
     <FlatList
        data={MyContact}
        keyExtractor={(item)=>item.recordID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', {
             contactInfo: { id: item.recordID }
          })}>
             <ContactCard contactInfo={item} />
          </TouchableOpacity>
       )}
     />
     <Ionicons name="add-circle"
       size={62}
       color="green"
       style={styles.AddIcon}
       onPress={()=>navigation.navigate('CreateContact')}
     />
    </View>
  )
}

export default MyContacts

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white"
},
AddIcon:{
  bottom:20,
  right:20,
  position:"absolute",
  zIndex:1,
}
})
