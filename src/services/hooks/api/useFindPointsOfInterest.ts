import Config from 'react-native-config';
import {Place} from '../../../interfaces/place';

export const getPointsOfInterest = async (
  location: string,
): Promise<Place[]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&language=en&type=tourist_attraction&radius=11265&key=${Config.GOOGLE_MAPS_API_KEY}`,
  );
  const result = await response.json();
  if(result.results){
    result.results.sort((a: Place, b: Place) => (b.user_ratings_total - a.user_ratings_total));
    result.results.map((place: Place) => {
      place.has_user_visited = false;
    })
  }
  return result.results;
};

// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}+city+point+of+interest&language=en&&key=${Config.GOOGLE_MAPS_API_KEY}`,


// const API_KEY = 'c240f199db98fe5687d78fa219c30e6b';
// const BASE_URL = 'https://api.musixmatch.com/ws/1.1/'

// export const getTrackLyricsByArtistAndSongName = async (artist, songName) => {
//   const artistToSearch = formatEnteredText(artist);
//   const songNameToSearch = formatEnteredText(songName);
//   const url = generateFindTracksUrl(artistToSearch, songNameToSearch)
//   const tracksFound = await fetch(url);
//   const tracksFoundResponse = await tracksFound.json();
//   if(tracksFoundResponse.message.header.available >= 1){
//     const trackId = tracksFoundResponse.message.body.track_list[0].track.track_id;
//     const lyricUri = generateFindLyricsUrl(trackId)
//     const lyricResponse = await fetch(lyricUri);
//     const lyricResult = await lyricResponse.json();
//     return lyricResult.message.body.lyrics.lyrics_body.split('...')[0]
//   }else{
//     console.log('NO SONGS FOUND')
//   }
// }

// const formatEnteredText = (text) => {
//   return text.replace(/ /g, '+')
// }

// const generateFindTracksUrl = (artist, songName) => {
//   return `${BASE_URL}track.search?q_track=${songName}&q_artist=${artist}&apikey=${API_KEY}`
// }

// const generateFindLyricsUrl = (trackId) => {
//   return  `${BASE_URL}track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`
// }