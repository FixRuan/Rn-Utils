import { useEffect } from 'react';
import notifee, { AndroidImportance, EventType, TimestampTrigger, TriggerType } from "@notifee/react-native";
import { Button, Text, View } from 'react-native';

export default function App() {
  async function createChannelId() {
    const channelId = await notifee.createChannel({
      id: 'test',
      name: 'sales',
      vibration: true,
      importance: AndroidImportance.HIGH
    });

    return channelId
  }

  async function displayNotification() {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
      id: '1',
      title: '<strong>notification<strong>',
      body: 'notification 1',
      android: { channelId }
    })
  }

  async function updateNotification() {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
      id: '1',
      title: '<strong>notification updated<strong>',
      body: 'notification 1',
      android: { channelId }
    })
  }

  async function cancelNotification() {
    await notifee.cancelNotification('1');
  }

  async function scheduleNotification() {
    const channelId = await createChannelId();

    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 1);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    await notifee.createTriggerNotification({
      title: 'Notificação agendada',
      body: 'Essa é uma notificação agendada',
      android: { channelId },
    }, trigger)
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
      <Button title="Atualizar Notificação" onPress={updateNotification} />
      <Button title="Cancelar Notificação" onPress={cancelNotification} />
      <Button title="Agendar Notificação" onPress={scheduleNotification} />
    </View>
  );
}
