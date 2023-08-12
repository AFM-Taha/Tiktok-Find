interface Props {
  shorts_link: string;
}

export default function VideoCard({ shorts_link }: Props) {
  // extract the shorts_id from the link

  const shorts_id = shorts_link.split('shorts/')[1];

  return (
    <div className="rounded-3xl bg-[rgba(26,42,59,0.68)]">
      <iframe
        className="z-50 h-[320px] w-[180px] rounded-3xl lg:h-[480px] lg:w-[270px]"
        // Change the parameters after the shorts_id in the link
        // To see which parameters do what, visit https://developers.google.com/youtube/player_parameters#autoplay
        src={`https://www.youtube.com/embed/${shorts_id}?autoplay=0&mute=1&controls=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
  );
}
