import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useTheme } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import MoviesList from '../components/movieList';

const { width, height } = Dimensions.get('window');

export default function PersonScreen() {
  const params = useRoute();
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
        minHeight: '100%',
      }}
      className="flex-1 bg-neutral-900"
    >
      {/* Botões de Navegação */}
      <SafeAreaView className="z-20 w-full flex-row justify-between items-center p-3">
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background}>
          <ChevronLeftIcon size={28} strokeWidth={1.5} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
          <HeartIcon size={36} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

{/* Dados da Pessoa */}
<View className="flex-row justify-center">
  <Shadow
    className="items-center overflow-hidden h-72 w-72 border-3 border-neutral-500"
    startColor="rgb(60, 60, 60)"
  >
    <Image
      style={{ height: height * 0.42, width: width * 0.70, borderRadius: 150 }}
      source={require('../assets/images/actor.jpg')}
    />
  </Shadow>
</View>

<View className="mt-5">
  <Text className="text-3xl text-white font-bold text-center">
    Joaquin Phoenix
  </Text>
  <Text className="text-base text-neutral-500 text-center">
    San Juan, Puerto Rico
  </Text>
</View>

<View className="mx-3 p-4 mt-6 flex-row items-center bg-neutral-700 rounded-full">
  <View className="basis-1/3 border-r-2 border-neutral-400 px-2 items-center">
    <Text className="text-white font-semibold">Gênero</Text>
    <Text className="text-neutral-300 text-sm">Masculino</Text>
  </View>
  <View className="basis-1/3 border-r-2 border-r-neutral-400 px-2 items-center">
    <Text className="text-white font-semibold">Nascimento</Text>
    <Text className="text-neutral-300 text-sm">28/10/1974</Text>
  </View>

  <View className="basis-1/3 px-2 items-center">
    <Text className="text-white font-semibold">Popularidade</Text>
    <Text className="text-neutral-300 text-sm">89</Text>
  </View>
</View>

<View className="my-6 mx-4 space-y-2">
  <Text className="text-white text-lg">Biografia</Text>
  <Text className="text-neutral-400 tracking-wide">
    Joaquin Rafael Phoenix, nascido Joaquin Rafael Bottom
    (San Juan, Porto Rico, 28 de outubro de 1974) é um ator,
  </Text>
</View>

{/* Filmes */}
<MoviesList title={"Filmes"} hideSeeAll={true} data={personMovies} />
</View>
</ScrollView>
    )
}
