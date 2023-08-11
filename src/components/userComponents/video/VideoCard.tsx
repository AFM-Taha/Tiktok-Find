export default function VideoCard() {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-[rgba(26,42,59,0.68)] text-white">
      <iframe
        className="h-[320px] w-[180px] rounded-3xl"
        src={`https://www.youtube.com/embed/TIEiQW_AjEs?autoplay=1&mute=1&modestbranding=1&fs=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
  );
}
