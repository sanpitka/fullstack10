import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import AppBar from "./components/AppBar";
import RepositoryInfo from "./components/RepositoryInfo";
import RepositoryList from "./components/RepositoryList";
import SignIn from "./components/SignIn";

import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repository/:id" element={<RepositoryInfo />} />
      </Routes>
    </View>
  );
}