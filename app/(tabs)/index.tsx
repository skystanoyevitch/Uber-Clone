import { Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-100">
      <Text className="">Open up App.js to start working on your app!</Text>
      <StatusBar />
    </SafeAreaView>
  );
}
