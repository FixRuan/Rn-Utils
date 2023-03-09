import { useEffect } from 'react';
import notifee, { AndroidImportance, EventType } from "@notifee/react-native";
import { Button, Text, View } from 'react-native';

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

  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log("Usuário descartou a notificação")
          break;
        case EventType.ACTION_PRESS:
          console.log("Usuário tocou na notificação", detail.notification)
      }
    });
  }, []);

  useEffect(() => {
    return notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log("Usuário tocou na notificação", detail.notification)
      }
    });
  }, []);
  return (
    <View>
      <Text>Notifee</Text>

      <Button title="Enviar Notificação" onPress={displayNotification} />
    </View>
  );
}
