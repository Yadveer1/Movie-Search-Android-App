# 🎬 Movie Search App

A modern React Native movie discovery application built with Expo, featuring movie search, detailed information, and a sleek user interface powered by NativeWind (Tailwind CSS).

## ✨ Features

- 🔍 **Movie Search**: Search for movies using The Movie Database (TMDB) API
- 🎭 **Movie Details**: View detailed information about movies including ratings, overview, and cast
- 💾 **Save Movies**: Save your favorite movies for later viewing
- 📱 **Cross-Platform**: Runs on iOS, Android, and Web
- 🎨 **Modern UI**: Beautiful interface styled with NativeWind (Tailwind CSS)
- 🚀 **Tab Navigation**: Easy navigation with bottom tab bar
- ⚡ **Fast Performance**: Optimized with Expo Router and React Native

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS)
- **Navigation**: Expo Router with file-based routing
- **HTTP Client**: Axios
- **API**: The Movie Database (TMDB)
- **State Management**: React Hooks
- **Icons**: Expo Vector Icons & React Native Vector Icons

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- A TMDB API key (free from [TMDB](https://www.themoviedb.org/settings/api))

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yadveer1/Movie-Search-Android-App.git
   cd Movie-Search-Android-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run the app**
   - **Android**: Press `a` or run `npm run android`
   - **iOS**: Press `i` or run `npm run ios`
   - **Web**: Press `w` or run `npm run web`
   - **Expo Go**: Scan the QR code with the Expo Go app

## 📱 App Structure

```
app/
├── _layout.tsx          # Root layout with navigation
├── globals.css          # Global Tailwind styles
└── (tabs)/              # Tab navigation group
    ├── _layout.tsx      # Tab layout configuration
    ├── index.tsx        # Home screen (movie listing)
    ├── search.tsx       # Search screen
    ├── saved.tsx        # Saved movies screen
    └── profile.tsx      # User profile screen
└── movies/
    └── [id].tsx         # Dynamic movie details screen

components/
├── Movies.tsx           # Movie card component
└── SearchBar.tsx        # Search input component

services/
├── api.ts              # TMDB API integration
└── useFetch.ts         # Custom fetch hook

constants/
├── icons.ts            # Icon exports
└── images.ts           # Image exports
```

## 🎯 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### Movie Search
- Real-time search functionality using TMDB API
- Displays popular movies when no search query is provided
- Responsive search results with movie posters and details

### Navigation
- Tab-based navigation for easy access to different sections
- File-based routing with Expo Router
- Dynamic routes for individual movie details

### Styling
- Modern UI components styled with NativeWind
- Responsive design that works across different screen sizes
- Custom Tailwind configuration for consistent theming

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `metro.config.js` - Metro bundler configuration
- `babel.config.js` - Babel transpiler settings
- `eslint.config.js` - ESLint rules and configuration
- `tsconfig.json` - TypeScript compiler options

## 📊 API Integration

This app uses The Movie Database (TMDB) API to fetch movie data:
- **Popular Movies**: Displays trending and popular movies
- **Search Movies**: Search functionality across TMDB's extensive database
- **Movie Details**: Detailed information including cast, ratings, and synopsis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Expo](https://expo.dev/) for the amazing React Native framework
- [NativeWind](https://www.nativewind.dev/) for bringing Tailwind CSS to React Native

## 📞 Support

If you have any questions or run into issues, please:
- Check the [Issues](https://github.com/Yadveer1/Movie-Search-Android-App/issues) section
- Create a new issue if needed
- Reach out to the maintainers

---

Made with ❤️ by [Yadveer1](https://github.com/Yadveer1)
