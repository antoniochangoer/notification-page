import Notification from './Notification';
import NotificationsHeader from './NotificationsHeader';

export default function NotificationList() {
  return (
    <main className="bg-white py-8 px-4">
      <NotificationsHeader />
      <div className="flex flex-col gap-3">
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
      {/* 6 notifications components hieronder uiteindelijk sinds je geen data file hebt */}
    </main>
  );
}
