import { StyleSheet, Text, View, Button } from 'react-native'

const CourseScreen = ({navigation}) => {
  return (
    <View style={styles.courseDetails}>
      <Text>Détails du cours</Text>
      <Button
        title="Retour à ma liste de formation"
        onPress={() => navigation.navigate('GradesScreen')}
      />
    </View>
  )
}

export default CourseScreen

const styles = StyleSheet.create({
    courseDetails: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})