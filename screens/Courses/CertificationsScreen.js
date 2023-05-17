import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import AuthServices from "../../api/services/auth.services";

const CertificationsScreen = ({ navigation }) => {
  const [CertificationsList, setCertificationsList] = useState();
  const GrabCertifications = async () => {
    try {
      let res = await AuthServices.Me();
      res = res.data.userGrades;
      console.log(res);
      setCertificationsList(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GrabCertifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ma liste de cours</Text>
      <View style={styles.list}>
        <FlatList
          data={CertificationsList}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CertificationCoursesScreen");
                }}>
                <Text style={styles.title}>{item.grade.name}</Text>
                <Text style={styles.description}>Ceci est une belle description</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CertificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  list: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 10,
  },
  header: {
    fontSize: 40,
    textAlign: "center",
  },
  card: {
    marginVertical: 10,
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 3,
  },
});
