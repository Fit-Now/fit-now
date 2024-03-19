import { LoginProvider } from "./contexts/LoginContext";
import MainStack from "./stacks/MainStack";
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { UserLocationContext } from './contexts/UserLocationContext';

export default function App() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <LoginProvider>
      <UserLocationContext.Provider value={{location,setLocation}} >
      <MainStack />
      </UserLocationContext.Provider>
    </LoginProvider>
  );
}
