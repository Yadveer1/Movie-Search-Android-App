import Movies from "@/components/Movies";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { icons } from "../../constants/icons";
import { images } from "../../constants/images";

export default function Search() {
  const [query, setQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query }), true); // Changed to true to load initially

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.trim()) {
        await loadMovies();
      } else if (query === "") {
        // Load default movies when query is empty
        await loadMovies();
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute top-0 w-full z-0" />
        <Image source={icons.logo} className="w-12 h-10 mt-10 mb-5 mx-auto" />
        <SearchBar
          placeholder="Search for movies..."
          value={query}
          onChange={(text: string) => setQuery(text)}
        />
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#000ff" />
        </View>
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
      <Image source={icons.logo} className="w-12 h-10 mt-10 mb-5 mx-auto" />
      <SearchBar
        placeholder="Search for movies..."
        value={query}
        onChange={(text: string) => setQuery(text)}
      />
      <FlatList
        className="flex-1 px-5"
        data={movies?.results || []}
        keyExtractor={(item) => item.id?.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        renderItem={({ item }) => <Movies {...item} />}
        ListHeaderComponent={
          <>
            {query.length > 0 && movies?.results.length === 0 ? (
              <Text className="text-white text-center mt-20">
                No movies found for "{query}"
              </Text>
            ) : query.length > 0 ? (
              <Text className="text-white font-bold text-lg mt-5 mb-3">
                Search results for {query}
              </Text>
            ) : (
              <Text className="text-white font-bold text-lg mt-5 mb-3">
                Popular Movies
              </Text>
            )}
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}
