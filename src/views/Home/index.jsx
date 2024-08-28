
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import { Image } from 'react-native';
import Navigate from '../../components/Navigate';

export default function Home() {

    const movies = [
        {
            name: 'Velozes e Furiosos',
            image: 
        }
    ]

  return ( 
    <View  style={styles.container}>
       <Image
        style={styles.img}
        source={require('../../../assets/fe.png')}
        />
        <Text style={styles.text}>Eu me chamo Felipe Miotto de Oliveira, nasci no ano de 2006 e atualmente estou com 18 anos, 
        estou cusando Técnico de desenvolvimento de sistemas no SENAI Valinhos (4/4).Gosto de sair com os amigos, ver filme, série e 
        ficar junto com a minha famalia e viajar.</Text>
        <Navigate screen={'Movies'} name={'Velozes e Furiosos'} pa/>
        <br/>
        <br/>
        <br/>
        <Image
        style={styles.img}
        source={require('../../../assets/pe.png')}
        />
        <Text style={styles.text}>Eu me chamo Pedro Monteiro, nasci no ano de 2006 e atualmente estou com 17 anos, 
        estou cusando Técnico de desenvolvimento de sistemas no SENAI Valinhos (4/4).Gosto de sair com os amigos, ver filme, série e 
        ficar junto com a minha famalia e viajar.</Text>
       
    </View>
  )
}