import { StyleSheet, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  Drawer,
} from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="logout" color={color} size={size} />
            )}
            label="Déconnexion"
            onPress={() => {
              AsyncStorage.removeItem("token")
              props.navigation.navigate("LoginScreen");
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
