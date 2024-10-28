import useMovieVideo from "../hooks/useMovieVideo";

const BannerMedia = ({ movieId }) => {
  const trailerVideo = useMovieVideo(movieId);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="relative w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&showinfo=0&modestbranding=0&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BannerMedia;
