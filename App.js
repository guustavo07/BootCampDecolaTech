import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native'
import { Text } from 'react-native-web'

const colorDarkGithub = '#4D565E'
const colorFontGithub = '#C9D1D9'
const colorGithub = '#010409'
const imageProfileGit = 'https://avatars.githubusercontent.com/u/84508964?v=4'
const urlToMyGithub = 'https://github.com/guustavo07'

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub)
    if (res) {
      await Linking.openURL(urlToMyGithub)
    }
  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />

      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de perfil Gustavo"
          style={style.avatar}
          source={{ uri: imageProfileGit }}
        />
        <Text
          accessibilityLabel="Nome Gustavo Henrique"
          style={[style.defaultText, style.name]}
        >
          Gustavo Henrique
        </Text>
        <Text
          accessibilityLabel="NickName guustavo07"
          style={[style.defaultText, style.nickname]}
        >
          guustavo07
        </Text>
        <Text
          accessibilityLabel="Descrição Student of Systems Analysis and Development at Newton Paiva"
          style={[style.defaultText, style.description]}
        >
          Student of Systems Analysis and Development at Newton Paiva
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={style.defaultText}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center',
    padding: 20
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  defaultText: {
    color: colorFontGithub
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  nickname: {
    fontSize: 18,
    color: colorDarkGithub
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkGithub,
    borderRadius: 10,
    padding: 20
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
