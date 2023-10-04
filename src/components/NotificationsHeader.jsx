export default function NotificationsHeader({ messages, setMessages }) {
  const unReadMessages = messages.filter((message) => {
    if (!message.read) return message;
  });

  function handleClick() {
    const readMessages = messages.map((msg) => {
      if (msg.read) {
        return msg;
      } else {
        return {
          ...msg,
          read: true,
        };
      }
    });

    setMessages(readMessages);
  }

  return (
    <>
      <header className="flex justify-between mb-6">
        <div className="flex gap-2">
          <h1 className="font-extrabold text-xl text-very-dark-grey-blue">
            Notifications{' '}
          </h1>
          <div className="text-white text-center font-extrabold bg-main-blue w-8 h-6 rounded-md">
            {unReadMessages.length}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="text-dark-grey-blue text-sm font-medium hover:text-main-blue"
        >
          Mark all as read
        </button>
      </header>
    </>
  );
}
