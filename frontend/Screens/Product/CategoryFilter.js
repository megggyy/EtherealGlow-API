import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import { Badge, Text, VStack, Divider, HStack } from "native-base";

const CategoryFilter = (props) => {
  console.log(props.categories);
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "#ffb3c6" }}
    >
      <VStack space={4} divider={<Divider />} w="100%">
        <HStack justifyContent="space-between">
          <TouchableOpacity
            key={1}
            onPress={() => {
              props.categoryFilter("all"), props.setActive(-1);
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 4 },
                props.active === -1 ? styles.active : styles.inactive,
                Platform.OS === "ios" ? styles.shadowIOS : styles.shadowAndroid,
              ]}
              colorScheme="info"
            >
              <Text style={{ color: "white" }}>All</Text>
            </Badge>
          </TouchableOpacity>
          {props.categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                props.categoryFilter(item.id),
                  props.setActive(props.categories.indexOf(item));
              }}
            >
              <Badge
                style={[
                  styles.center,
                  { margin: 5 },
                  props.active == props.categories.indexOf(item)
                    ? styles.active
                    : styles.inactive,
                  Platform.OS === "ios"
                    ? styles.shadowIOS
                    : styles.shadowAndroid,
                ]}
              >
                <Text style={{ color: "white" }}>{item.name}</Text>
              </Badge>
            </TouchableOpacity>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor:"#cd5c5c",
  },
  inactive: {
    backgroundColor:  "#f08080",
  },
  shadowIOS: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  shadowAndroid: {
    elevation: 5,
  },
});

export default CategoryFilter;
