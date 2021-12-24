import React, { useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {

  //const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type : "SET_TOKEN",
        token : _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(_user => { 
        console.log('user - ', _user)
        dispatch({
          type : "SET_USER",
          user : _user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        console.log('playlst', playlists)
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcPXWmjqbx8gs").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      
    }

    //console.log('token - ', _token)
  }, []);

  //console.log('user', user);
  return (
    <div className="app">
      {
        token? (
          <Player spotify={spotify}/>
        ): (
          <Player spotify={spotify}/>
          // <Login/>
        )
      }
      
    </div>
  );
}

export default App;
