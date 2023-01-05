import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [active, setActive] = useState("en");

  return (
    <>
      <StatusBar translucent={false} backgroundColor="#191816" style='light'/>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.langWrapper}>
            <TouchableOpacity onPress={() => setActive("en")} activeOpacity={0.8} style={active === "en" ? styles.langButtonActive : styles.langButton}>
              <Text style={styles.LangButtonText}>Inglês</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActive("pt")} activeOpacity={0.8} style={active === "pt" ? styles.langButtonActive : styles.langButton}>
              <Text style={styles.LangButtonText}>Português - Brasil</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>i18Next</Text>

          <View style={styles.loginHeader}>
            <MaterialIcons name="login" size={20} color="#FFC632"/>
            <Text style={styles.loginHeaderTitle}>Faça seu Login</Text>
          </View>

          <Text style={styles.subTitle}>Entre com suas informações de login.</Text>
          <View style={{marginTop: 10}}>
            <Text style={styles.subTitle}>E-mail</Text>
            <TextInput placeholder="Digite seu e-mail" style={styles.input} placeholderTextColor="#AFB6C2" />
          </View>

          <View style={{marginTop: 10}}>
            <Text style={styles.subTitle}>Senha</Text>
            <TextInput placeholder="Digite sua senha" style={styles.input} placeholderTextColor="#AFB6C2" />
          </View>

          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191816",
    alignItems: "center",
    justifyContent: "center",
  },
  modal:{
    width: "90%",
    height: 460,
    backgroundColor: "#24221F",
    borderRadius: 8,
    padding: 10,
  },
  title:{
    marginTop: 6,
    color: "#FFC632",
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center"
  },
  loginHeader:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 10
  },
  loginHeaderTitle:{
    fontSize: 20,
    color: "#D4CCB6",
    marginLeft: 10,
  },
  subTitle:{
    fontSize: 15,
    color: "#AFB6C2",
    marginLeft: 10,
  },
  input:{
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#AFB6C2",
    color: "#AFB6C2",
    marginLeft: 10,
    marginTop: 4,
    borderRadius: 4,
    padding: 10,
    marginBottom: 2
  },
  button:{
    width: "90%",
    height: 50,
    backgroundColor: "#FFC632",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 16,
  },
  textButton: {
    fontWeight: "bold",
    color: "#191816",
    fontSize: 16,
  },
  langWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 12
  },
  langButton: {
    flex: 1,
    margin: 4,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "#AFB6C2",
    borderWidth: 1,
  },
  LangButtonText: {
    color: "#FFFFFF"
  },
  langButtonActive: {
    backgroundColor: "#FFC632",
    flex: 1,
    margin: 4,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0,
  }
});
