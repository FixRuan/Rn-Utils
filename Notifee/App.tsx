import { Button, Text, View } from 'react-native';
import notifee, { AndroidImportance } from "@notifee/react-native";

export default function App() {
  async function displayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'test',
      name: 'sales',
      vibration: true,
      importance: AndroidImportance.HIGH
    });

    await notifee.displayNotification({
      id: '1',
      title: 'notification',
      body: 'notification 1',
      android: { channelId }
    })
  }

  return (
    <View>
      <Text>Notifee</Text>

      <Button title="Enviar Notificação" onPress={displayNotification} />
    </View>
  );
}
