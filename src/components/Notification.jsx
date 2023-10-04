export default function Notification({ messages, setMessages, message }) {
  const { name, action, topic, time, textMessage, picture, read } = message;
  const imgUrl = name.toLowerCase().split(' ').join('-');

  let topicStyles = topic?.includes('Club')
    ? 'text-main-blue font-extrabold'
    : 'text-dark-grey-blue font-extrabold';

  function handleClick(id) {
    const nextMessages = messages.map((message) => {
      if (message.id === id && message.read === false) {
        return {
          ...message,
          read: true,
        };
      } else {
        return message;
      }
    });

    setMessages(nextMessages);
  }

  return (
    <>
      <article
        onClick={() => handleClick(message.id)}
        className={`${
          !read ? 'bg-main-snow' : ''
        } p-4 rounded-lg cursor-pointer`}
      >
        <div className="flex">
          <img
            className="h-10 w-10 mr-3"
            src={`dist/assets/images/avatar-${imgUrl}.webp`}
            alt="profile picture"
          />
          <div className="flex flex-col">
            <p className="font-medium text-sm text-dark-grey-blue">
              <span className="text-very-dark-grey-blue font-extrabold hover:text-main-blue">
                {name}
              </span>{' '}
              {action}{' '}
              <span className={topicStyles + ' hover:text-main-blue'}>
                {topic}
              </span>
              {!read ? (
                <span className="ml-2 inline-block h-2 w-2 bg-main-red rounded-full"></span>
              ) : null}
              <br />
              <span className="text-grey-blue">{time}</span>
            </p>
            {/* only if there is a picture or a text message */}
            {textMessage && (
              <p className="mt-3 border-2 border-very-light-grey-blue p-4 rounded-md text-dark-grey-blue hover:bg-light-grey-blue hover:border-very-light-grey-blue">
                {textMessage}
              </p>
            )}
          </div>
          {picture && (
            <img
              className="h-10 w-10 rounded-md ml-auto"
              src={`src/assets/images/${picture}`}
            />
          )}
        </div>
      </article>
    </>
  );
}
