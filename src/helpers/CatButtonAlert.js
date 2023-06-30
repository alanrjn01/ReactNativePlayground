import {Alert} from "react-native";
import { Linking } from "react-native";

const CatButtonAlert = () =>

    Alert.alert('добро пожаловать в обновленную игру марамба', 'hola', [
      {
        text: 'rechazar',
        onPress: ()=>Linking.openURL('vnd.youtube://watch?v=Zh3KU-hPLy0&ab_channel=Sound_effects'),
        style: 'cancel',
      },
      {text: 'aceptar',
      onPress: ()=>Linking.openURL('vnd.youtube://watch?v=8Go6dHuylyM&ab_channel=Speeds30'),
      },
    ]);
export default CatButtonAlert