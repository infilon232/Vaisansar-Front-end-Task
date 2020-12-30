import { CommonActions } from "@react-navigation/native";
// helper
const Home = CommonActions.reset({
  index: 0,
  routes: [{ name: "Home" }],
})

export default {
   Home
}