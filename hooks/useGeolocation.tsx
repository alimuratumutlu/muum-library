import { useEffect, useState } from 'react';

interface State {
  loading: boolean;
  coords: {
    latitude: number;
    longitude: number;
  };
  error: GeolocationPositionError | null;
}

const useGeolocation = () => {
  const [state, setState] = useState<State>({
    loading: true,
    coords: {
      latitude: 0,
      longitude: 0,
    },
    error: null,
  });

  let mounted = true;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        if (mounted) {
          setState({
            loading: false,
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            error: null,
          });
        }
      },
      error => {
        if (mounted) {
          setState(prevState => ({
            ...prevState,
            loading: false,
            error, // TypeScript now understands that error can be of type GeolocationPositionError
          }));
        }
      },
    );

    return () => {
      mounted = false;
    };
  }, []);

  return state;
};

export default useGeolocation;
