import React from 'react';
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'; 
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarsBottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons-outline';
import { styles } from '../theme';

const ios = Platform.OS === "ios";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        
        {/* Header */}
        <View className="flex-row justify-between items-center mx-4 mt-2">
          {/* Menu Button and Title */}
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <BarsBottomLeftIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>

            <Text className="text-white text-3xl font-bold">
              <Text style={styles.text}>GM</Text>ovies
            </Text>
          </View>

          {/* Search Button */}
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
      </ScrollView>
    </View>
  );
}
