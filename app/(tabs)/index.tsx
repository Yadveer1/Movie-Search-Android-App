import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { images } from "../../constants/images";
import { icons } from "../../constants/icons";
import SearchBar from "../../components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import Movies from "@/components/Movies";

export default function Index() {

  const router = useRouter();
  const {data: movies, loading:moviesLoading, error:moviesError } = useFetch(() => fetchMovies({query:""}));

  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Image source={images.bg} className="absolute top-0 w-full z-0" />
        <ActivityIndicator size="large" color="#000ff" />
      </View>
    );
  }

  if (moviesError) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Image source={images.bg} className="absolute w-full top-0 z-0" />
        <Text className="text-red-500">{moviesError?.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full top-0 z-0" />
      <FlatList
        className="flex-1 px-5"
        data={movies?.results || []}
        keyExtractor={(item) => item.id?.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'flex-start',
          gap:20,
          paddingRight:5,
          marginBottom:10
        }}
        renderItem={({ item }) => (
          <Movies {...item} />
        )}
        ListHeaderComponent={
          <>
            <Image source={icons.logo} className="w-12 h-10 mt-10 mb-5 mx-auto" />
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for Movies"
            />
            <Text className="text-white font-bold text-lg mt-5 mb-3">Latest Movies</Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}
