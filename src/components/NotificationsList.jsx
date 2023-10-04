import { useState } from 'react';
import Notification from './Notification';
import NotificationsHeader from './NotificationsHeader';
import { data } from '../../data';

export default function NotificationList() {
  const [messages, setMessages] = useState(data);

  return (
    <div className="bg-white py-8 px-4 max-w-3xl">
      <NotificationsHeader messages={messages} setMessages={setMessages} />
      <main className="flex flex-col gap-3">
        {messages.map((message) => (
          <Notification
            key={message.id}
            message={message}
            messages={messages}
            setMessages={setMessages}
          />
        ))}
      </main>
    </div>
  );
}
