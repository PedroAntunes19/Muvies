import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'

import styles from '../theme'
import Cast from '../components/cast'
import MovieList from '../components/movieList'

var { width, height } = Dimensions.get('window')

export default function MovieScreen() {
  const { params: item } = useRoute()
  const [isFavorite, toggleFavorite] = useState(false)
  const [cast, setCast] = useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  const navigation = useNavigation()
  let movieName = 'Joker: Folie à Deux'

  useEffect(() => {
    // call API
  }, [item])

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 pt-3">
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon size={36} color={isFavorite ? 'red' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

      </View>

      {/* Gêneros */}
      <View className="flex-row justify-center mx-4 space-x-2">
        <Text className="text-neutral-400 font-semibold text-base text-center">Drama</Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">• Crime</Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">• Thriller</Text>
      </View>

      {/* Sinopse */}
      <Text className="text-neutral-400 mx-4 tracking-wide">
        Coringa 2 se passa depois dos acontecimentos do filme de 2019, após ser iniciado um movimento popular contra a...
      </Text>

      {/* Elenco */}
      <Cast navigation={navigation} cast={cast} />

      {/* Filmes Similares */}
      <MovieList title="Filmes Similares" data={similarMovies} />
    </ScrollView>
  )
}