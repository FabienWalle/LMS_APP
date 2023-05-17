import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Grades = async (data) => {
  const Id = await AsyncStorage.getItem("id");
  return api.get(`/api/grades/${Id}`, data);
};

const Certification = async (data) => {
  const CertificationId = AsyncStorage.getItem("Grades");
  return api.get(`/api/courses/${CertificationId}`, data);
};

const Course = (data) => {
  const CourseId = AsyncStorage.getItem("Grades");
  return api.get(`/api/courses/${CourseId}`, data);
};

const GradesServices = {
  Grades,
  Certification,
  Course,
};

export default GradesServices;
