// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  className: string;
  username: string | null | undefined;
}

// const profileColors = [
//   '#e95f56',
//   '#c490d1',
//   '#897e95',
//   '#a6ab95',
//   '#e46000',
//   '#1090d8',
//   '#e86d8a',
//   '#1f7551',
//   '#9dc2b7',
//   '#ffe177',
//   '#a9d2fd',
//   '#ffcda5',
//   '#4aac67',
//   '#ffe5a5',
//   '#cd413c',
// ];
// const randomIndex = Math.floor(Math.random() * profileColors.length);
// const randomColor = profileColors[randomIndex];

export default function UserProfileImage({ className, username }: Props) {
  // const [profileColor, setProfileColor] = useState();

  // const circleBackground = {
  //   backgroundColor: randomColor,
  // };
  const [initials, setInitials] = useState('');
  function userNameInitials(username: string) {
    const names = username.split(' ');
    let initials = '';
    for (const name of names) {
      initials += name.charAt(0);
    }
    return initials;
  }

  // const initials = userNameInitials(username);
  useEffect(() => {
    if (username) {
      setInitials(userNameInitials(username));
    }
  }, [username]);
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-orange-500 ${className}`}>
      {initials}
    </div>
  );
}
