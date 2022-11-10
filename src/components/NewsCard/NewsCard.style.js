/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    color: 'black',
    fontFamily: 'Calibri',
  },
  image: {height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,},
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    fontFamily: 'Calibri',
  },
  description: {
    marginTop: 3,
    color: 'black',
    fontFamily: 'Calibri',
  },
  inner_container: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'black',
    fontFamily: 'Calibri',
  }
});
