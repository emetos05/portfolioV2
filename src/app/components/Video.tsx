export default async function VideoComponent({
  fileName,
}: {
  fileName: string;
}) {
  return (
    <video
      src={fileName}
      autoPlay
      loop
      muted
      playsInline
      className="rounded-lg w-full h-auto object-cover"
      style={{ aspectRatio: "16/9" }}
    >
      Your browser does not support the video tag.
    </video>
  );
}
