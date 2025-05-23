export default function VideoIntroduction() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Video Introduction</h2>

        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <video
            controls
            className="w-full h-full object-cover"
            poster="/video-thumbnail.jpg"
          >
            <source src="/candidate-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
