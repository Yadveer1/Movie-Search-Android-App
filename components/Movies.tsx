import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const Movies = ({  id, poster_path, title, vote_average, release_date}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className='flex-1 max-w-[30%]'>
        <Image source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/FFFFFF.png' }} className='w-full h-52 rounded-lg' />
        <View>
            <Text className='text-white text-sm font-bold mt-2' numberOfLines={2}>{title}</Text>
            <View className='flex-row items-center'>
                <Image source={icons.star} className='w-4 h-4' />
                <Text className='text-light-300 ml-3'>{Math.round(vote_average / 2 )}</Text>
            </View>
        <Text className='text-light-300'>{release_date?.split('-')[0]}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default Movies

const styles = StyleSheet.create({})