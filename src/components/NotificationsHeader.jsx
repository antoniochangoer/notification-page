export default function NotificationsHeader() {
  return (
    <>
      <header className="flex justify-between mb-6">
        <div className="flex gap-2">
          <h1 className="font-extrabold text-xl text-very-dark-grey-blue">
            Notifications{' '}
          </h1>
          <div className="text-white text-center font-extrabold bg-main-blue w-8 h-6 rounded-md">
            3
          </div>
        </div>
        <button className="text-dark-grey-blue text-sm font-medium hover:text-main-blue">
          Mark all as read
        </button>
      </header>
    </>
  );
}
