import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Govedar Photography</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Column 1 */}
        <div>
          <Image
            src="/images/events/photo1.jpg"
            alt="Event photo 1"
            width={300}
            height={400}
          />
          <Image
            src="/images/events/photo2.jpg"
            alt="Event photo 2"
            width={300}
            height={400}
          />
        </div>

        {/* Column 2 */}
        <div>
          <Image
            src="/images/portraits/photo1.jpg"
            alt="Portrait photo 1"
            width={300}
            height={400}
          />
          <Image
            src="/images/portraits/photo2.jpg"
            alt="Portrait photo 2"
            width={300}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
