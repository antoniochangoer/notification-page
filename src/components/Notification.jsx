export default function Notification({
  read,
  image,
  name,
  action,
  topic,
  time,
}) {
  return (
    <>
      <article className="flex bg-main-snow p-4 rounded-lg">
        <img
          className="h-10 w-10 mr-3"
          src="src/assets/images/avatar-mark-webber.webp"
          alt="profile picture"
        />
        <p className="font-medium text-sm text-dark-grey-blue">
          <span className="text-very-dark-grey-blue font-extrabold">
            Mark Webber
          </span>{' '}
          reacted to your recent post <span>My first tournament today!</span>
          <div className="ml-2 inline-block h-2 w-2 bg-main-red rounded-full"></div>
          <br />
          <span className="text-grey-blue">1m ago</span>
        </p>
      </article>
    </>
  );
}

// check if read is false then add bg snow and circle unread!
// check if post or club
