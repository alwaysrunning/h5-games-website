export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">
          HTML5 Games is an online platform dedicated to providing high-quality HTML5 games for players. Our mission is to make web games easily accessible to everyone.
        </p>
        <p className="mb-4">
          Our platform features:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Curated quality HTML5 games</li>
          <li>Completely free and no download required</li>
          <li>Multi-device support</li>
          <li>Regular game updates</li>
          <li>Focus on user experience</li>
        </ul>
        <p>
          Thank you for choosing HTML5 Games. We will continue to work hard to bring you better gaming experiences!
        </p>
      </div>
    </div>
  );
} 