import { Link, Stack } from 'expo-router'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Image } from 'expo-image'
const photo = require('../assets/images/react-logo.png')

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  )
}

export default function Home() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.boxes}>
        <Text>
          {' '}
          Etuile de marseille {'\n'}
          Dimention: L.12 H.25
        </Text>
        <View>
          <Image
            style={styles.image}
            source="https://www.usinenouvelle.com/expo/img/tuile-a-cote-de-marseille-000054811-product_zoom.jpg"
            contentFit="cover"
          />
          <Link href="/details" style={styles.botton}>
            {' '}
            Click{' '}
          </Link>
        </View>
      </View>
      {/* <View style={styles.boxes} /> */}
      {/* <View style={{ flex: 1, backgroundColor: 'green', marginTop: 15 }} />
      <View style={{ flex: 1, backgroundColor: 'blue', marginTop: 15 }} />
      <View style={styles.boxes} />
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      /> */}
      {/* <Text>Here is the Home Screen</Text>
      <Link href="/details">Go to Details</Link>
      <Link href="/details">
        <Image source={photo} />
      </Link> */}
    </View>
    //div
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
    alignSelf: 'center',
    // height :25,
    // width:400,
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    backgroundColor: 'grey',
    marginTop: 15,
    justifyContent: 'space-between',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
  },

  botton: {
    display: 'flex',
    backgroundColor: 'yellow',
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
})
