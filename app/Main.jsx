import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import AppBar from "./components/AppBar";
import RepositoryInfo from "./components/Repositories/RepositoryInfo";
import RepositoryList from "./components/Repositories/RepositoryList";
import Review from "./components/Review";
import MyReviews from "./components/Review/MyReviews";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repository/:id" element={<RepositoryInfo />} />
        <Route path="/review" element={<Review />} />
        <Route path="/myreviews" element={<MyReviews />} />
      </Routes>
    </View>
  );
}