import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getColorByLetter } from '../utils/index';

const ContactCard = ({contactInfo}) => {
  //const {displayName}=contactInfo
  console.log(contactInfo);
  const { displayName } = contactInfo;
  const color = getColorByLetter(displayName[0]);
  return (
    <View style={styles.card}>
         <View style={styles.infoContainer}>
            <View style={{...styles.icon, backgroundColor: color}}>
               <Text style={styles.iconContent}>{displayName[0]}</Text>
            </View>
            <Text style={styles.primaryText}>{displayName}</Text>
         </View>
      </View>
  )
}

export default ContactCard

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5
 },
 infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
 },
 primaryText: {
    fontSize: 18
 },
 iconContent: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10
 },
 icon:{
    borderRadius: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    padding: 1,
    backgroundColor: 'green'
 }
})
