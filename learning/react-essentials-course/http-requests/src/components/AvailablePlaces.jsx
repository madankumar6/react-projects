import Places from './Places.jsx';
import {useState, useEffect} from "react";
import Error from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:3000/places')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((resData) => {
    //             setAvailablePlaces(resData.places);
    //         });
    // }, []);

    useEffect(() => {
        setIsLoading(true);
        async function loadPlaces() {
            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.latitude, position.coords.longitude);
                    setAvailablePlaces(places);
                    setIsLoading(false);
                });
            }
            catch (error) {
                setError({message: error.message || 'Unable to fetch places, please try again.'});
                setIsLoading(false);
            }
        }

        loadPlaces();
    }, []);

    if (error) {
        return <Error title="An error occurred" message={error.message} />
    }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={false}
      loadingText="Loading places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
