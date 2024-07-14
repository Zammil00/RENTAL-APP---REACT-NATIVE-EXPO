import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const Splashscreen = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Homescreen");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 400,
          height: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./../../assets/animasi/intro.json")}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
