import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Certifications = async (data) => {
  const Id = await AsyncStorage.getItem("id");
  return api.get(`/api/users/${Id}/certifications`, data);
};

const CertificationCourses = async (data) => {
  const Certification_id = await AsyncStorage.getItem("Certification_id");
  return api.get(`/api/certifications/${Certification_id}/courses`, data);
};

const Course = (data) => {
  // const Course_id = await AsyncStorage.getItem("Course_id");
  return api.get(`/api/courses/3`, data)
};

const CertificationsServices = {
  Certifications,
  CertificationCourses,
  Course,
};

export default CertificationsServices;
