import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import AuthServices from "../../api/services/auth.services";

const CertificationCoursesScreen = ({ navigation }) => {
  const [CertificationCoursesList, setCertificationCoursesList] = useState();
  const GrabCertificationCourses = async () => {
    try {
      let res = await AuthServices.Me();
      res = res.data.userGrades.grade.certificationCourses;
      setCertificationCoursesList(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GrabCertificationCourses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Détails de la formation</Text>
      <View style={styles.list}>
        <FlatList
          data={CertificationCoursesList}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CourseScreen");
                }}>
                <Text style={styles.title}>{item.course.title}</Text>
                <Text style={styles.detail}>{item.course.name}</Text>
                <Text style={styles.detail}>{item.course.picture}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CertificationCoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 30,
    color: "red",
  },
  card: {
    border: 5,
    borderColor: "blue",
    borderWidth: 5,
    marginVertical: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
