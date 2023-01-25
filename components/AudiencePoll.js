import React from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'

export default function AudiencePoll() {

   const options = {
    'A': '24%',
    'B': '13%',
    'C': '45%',
    'D': '32%',
   }

   const renderOptions = () => {
    const optionColumns = Object.entries(options).map(([key,value])=>{
        let height = value;
        return (
            <View style={styles.optionContainer} key={key}>
                <Text style={styles.optionText}>{value}</Text>
                <View style={[styles.optionColumn, { height}]}>
                    
                </View>
                <Text style={styles.optionText}>{key}</Text>

            </View>
        );
      })
      return optionColumns;
   }
  return (
    <View style={styles.container}>
        <Modal         
            animationType="slide"
            onRequestClose={() => {
            alert('Modal has been closed.');
            }}>
            <View style={styles.optionsContainer}>
                {renderOptions()}
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    optionsContainer:{
        padding: 10,
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        backgroundColor: '#0000cc',
    },
    optionContainer:{
      flex: 1,
      marginHorizontal: 10,
      height: '80%',
      marginBottom: 100,
      width: 50,
      flexDirection: 'column',
      justifyContent:'flex-end',
      alignItems: 'center',
    },
    optionColumn:{
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#2e2eb8'
    },
    optionText:{
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
    }

})