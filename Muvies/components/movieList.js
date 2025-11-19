import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

var { width, height } = Dimensions.get('window');

export default function MovieList({ title, data }) {
  const navigation = useNavigation();
  const movieName = "Joker: Folie a Deux";  // Se esse é o nome fixo, ok, mas normalmente você usaria algo dinâmico

  return (
    <View style={{ marginBottom: 36, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MoviesListScreen')}>
          <Text style={styles.text} className='text-lg'>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate('Movie', { movieId: item.id })}
          >
            <View style={{ marginRight: 15, alignItems: 'center' }}>
              <Image
                source={{ uri: item.poster }} // Supondo que cada item tenha uma URL de poster
                style={{
                  width: width * 0.35,
                  height: height * 0.26,
                  borderRadius: 16,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  marginTop: 8,
                  textAlign: 'center',
                  fontSize: 14,
                  maxWidth: width * 0.35,
                  overflow: 'hidden',
                }}
              >
                {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}