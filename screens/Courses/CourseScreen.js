import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { useState, useEffect } from "react";
import CertificationsServices from '../../api/services/certifications.services'

const CourseScreen = () => {
  const [Course, setCourse] = useState();
  const GrabCertifications = async () => {
    try {
      let res = await CertificationsServices.Course();
      res = res.data
      setCourse(res);
      console.log(Course);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GrabCertifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Le cours</Text>
      {Course && <View style={styles.list}>
        <View style={styles.card}>
          <Text style={styles.title}>{Course.name}</Text>
          <Text style={styles.description}>{Course.description}</Text>
          <Text style={styles.duration}>Durée de la formation : {Course.duration}</Text>
        </View>
      </View>}
    </View>
  );



}

export default CourseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 15
  },
  description: {
    flexWrap: "wrap",
  },
  card: {
    border: 5,
    borderColor: "blue",
    borderWidth: 5,
    marginVertical: 5,
  },
  header: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
});