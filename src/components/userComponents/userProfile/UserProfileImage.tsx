import { firstCharacterOfUsername } from './userData';

interface Props {
  className: string;
}

export default function UserProfileImage({ className }: Props) {
  const profileColors = [
    '#e95f56',
    '#c490d1',
    '#897e95',
    '#a6ab95',
    '#e46000',
    '#1090d8',
    '#e86d8a',
    '#1f7551',
    '#9dc2b7',
    '#ffe177',
    '#a9d2fd',
    '#ffcda5',
    '#4aac67',
    '#ffe5a5',
    '#cd413c',
  ];

  const randomIndex = Math.floor(Math.random() * profileColors.length);
  const randomColor = profileColors[randomIndex];
  const circleBackground = {
    backgroundColor: randomColor,
  };
  return (
    <div
      style={circleBackground}
      className={`flex items-center justify-center rounded-full ${className}`}>
      {firstCharacterOfUsername}
    </div>
  );
}
