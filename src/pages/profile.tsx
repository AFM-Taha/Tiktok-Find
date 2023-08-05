export default function Profile() {
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
  const circleStyle = {
    backgroundColor: randomColor,
  };

  return (
    <div className="mx-auto mt-32 max-w-md text-white">
      <h1 className="mb-8 text-center text-3xl font-black md:text-7xl">
        Your Profile
      </h1>
      <div className="flex items-center justify-between rounded-3xl px-8 py-4">
        <div
          style={circleStyle}
          className={`h-16 w-16 rounded-full md:h-32 md:w-32 bg-[${randomColor}] flex items-center justify-center text-2xl font-bold md:text-5xl`}>
          J
        </div>
        <p className="text-xl font-bold sm:text-3xl">John Doe</p>
      </div>
      <div className="orders"></div>
      <div className="favorites"></div>
    </div>
  );
}
