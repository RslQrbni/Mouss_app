import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet,TextInput,Button,Alert ,TouchableOpacity} from 'react-native';
import React from 'react';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [text, onChangeText] = React.useState('Useless Text');
  const [numLar, onChangeNumLarge] = React.useState('');
  const [numHaut, onChangeNumHaut] = React.useState('');


  const [calculate , setCalculte] = React.useState(false);
  const [showResult,setShowResult] = React.useState(false);

  const largeurNum = parseFloat(numLar);
  const hauteurNum = parseFloat(numHaut);

  // to calculat
  let calculLargeur =0;
  let largeurFinal = 0;
  let numresult = 0;
  
  for (let i = 1 ; i< 36; i++){
     calculLargeur = largeurNum /i;
     //console.log("befor if",i);
    if (32 < calculLargeur && calculLargeur < 36){
      calculLargeur
      numresult = i;
    largeurFinal = Number.parseFloat(calculLargeur).toFixed(2);
    }
  }
// clacul de Hauteur
let calculHauteur = 0;
let hauterFinal = 0;
let numHauteur = 0
for (let i = 1 ; i<87; i++){
  calculHauteur = hauteurNum /i;
  console.log("befor if",i);
 if (87.5 <= calculHauteur && calculHauteur <= 88.5){
   calculHauteur
   numHauteur = i;
 hauterFinal = Number.parseFloat(calculHauteur).toFixed(2);
 console.log("fucking Final result",hauterFinal);
 console.log("fucking number",numHauteur);
 }
 //console.log("th R",calculHauteur);
 
}

  return (
    
    <View style={styles.boxe}>


      {/* Largeur text and box view */}
      <View style = {styles.textAndBox}>
      <Text> Largeur :</Text>
     {/* first text box */}
      <TextInput
          style={styles.input}
          onChangeText={onChangeNumLarge}
          value={numLar}
          placeholder="useless placeholder"
          keyboardType="number-pad"
        />
        </View>

        {/* Hauteru text and box view */}
        <View style = {styles.textAndBox}>
        <Text> Hauteur :</Text>
      {/* second text box */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumHaut}
          value={numHaut}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        </View>

        {/* Button view */}
        <View>
        <TouchableOpacity style={styles.button} 
        onPress={() => {
          setCalculte(true);
          setShowResult(true);
        }}

      >
        <Text style={styles.buttonText}>Calculer</Text>
      </TouchableOpacity>

        </View>

        <View>
          <Text>
          {calculate ?"mytext":"clcikc kon"} 

          </Text>
          </View>

      {/* the result part after clicking on calculate */}

        {showResult && (
      <View style = {styles.resultSection}>

          <Text>text of the result part</Text>

          {largeurFinal >32 && largeurFinal <36 ?
          (<View><Text> the Result :{largeurFinal}</Text> </View>):(
          <View><Text>Error message</Text> </View>)}; 

           {(hauterFinal > 87.5 && hauterFinal < 88.5) ?
          <Text>Resultat Hauteur : {hauterFinal}</Text>:(
            <Text> Erreur de hauteur</Text> )};
          

      </View>
        )}
      
        
    
      

    </View>
        
    // <View style={styles.container}>
    //   <Stack.Screen
    //     options={{
    //       title: params.name,
    //     }}
    //   />
    //   <Text
    //     onPress={() => {
    //       router.setParams({ name: 'Updated' });
    //     }}>
    //     Update the title
    //   </Text>
    //     <Link href='/' > my text </Link>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxe:{
    //display: 'flex',
    flexDirection: 'column',
    width: 350,
    backgroundColor: 'grey',
    marginTop: 15,
    //justifyContent:'space-evenly',
    padding: 5,
    //alignItems: 'flex-start',
    alignSelf: 'center',
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 5,
    },
    textAndBox:{
     alignContent:'flex-end',
      flexDirection :'row',
      alignItems:'center',
      marginRight : 5,
    },

    button:{
      color:'green',
      backgroundColor:'green',
      //height:20,
      width : 80,
      alignSelf :'center',
      
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    resultSection: {
      backgroundColor : 'yellow',
      width : 350,
    }
});
