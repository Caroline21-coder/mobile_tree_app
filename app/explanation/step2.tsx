import { View, Text, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function Step2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressDot, styles.activeDot]} />
        <View style={[styles.progressDot, styles.activeDot]} />
        <View style={styles.progressDot} />
      </View>
      <Text style={styles.title}>BECOME A CITIZEN SCIENTIST</Text>
      <Text style={styles.description}>
        Take pictures of some places in your city and{"\n"}rate the biodiversity in those areas.
      </Text>
      <Image
        source={require("../../assets/images/citizen.png")}
        style={styles.illustration}
        resizeMode="contain"
      />
      <View style={styles.buttonRow}>
        <Pressable style={styles.secondaryButton} onPress={() => router.replace("/explanation/step1")}>
          <Text style={styles.secondaryButtonText}>Previous</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.replace("/explanation/step3")}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
    justifyContent: "flex-start",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  progressDot: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#6fd1c2",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 18,
    textAlign: "center",
    color: "#222",
  },
  description: {
    fontSize: 15,
    color: "#222",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 8,
    fontWeight: "500",
  },
  illustration: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#19c2a6",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderColor: "#19c2a6",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
    marginRight: 10,
  },
  secondaryButtonText: {
    color: "#19c2a6",
    fontSize: 16,
    fontWeight: "500",
  },
});