import { Destination } from '@/components/CategoryItems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface FavoritesContextType {
  toggleFavorite: (destination: Destination) => void;
  favoritesDestinations: Destination[];
}

const FavoritesContext = createContext({} as FavoritesContextType);

function FavoritesContextProvider(props: PropsWithChildren) {
  const [favoritesDestinations, setFavoritesDestinations] = useState<
    Destination[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Load favorites from local storage
  useEffect(() => {
    const getFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavoritesDestinations(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.log('An error occurred when loading from storage', error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, []);

  //Save favorites to local storage
  useEffect(() => {
    const saveFavorite = async () => {
      AsyncStorage.setItem('favorites', JSON.stringify(favoritesDestinations));
    };
    saveFavorite();
  }, [favoritesDestinations]);

  const toggleFavorite = (item: Destination) => {
    setFavoritesDestinations((prev) => {
      if (prev.some((bookmark) => bookmark.id === item.id)) {
        return prev.filter((bookmark) => bookmark.id !== item.id);
      } else {
        console.log('Adding favorite:', item);
        return [...prev, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        toggleFavorite,
        favoritesDestinations,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}

export const useFavoriteDestinations = () => useContext(FavoritesContext);
export default FavoritesContextProvider;
