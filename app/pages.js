import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Govedar Photography</h1>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Column 1 */}
        <div>
          <Image
            src="/images/events/1E4A5613-ED73-4D70-AE5F-49E4307591BA.jpeg"
            alt="Event photo 1"
            width={300}
            height={400}
          />
          <Image
            src="public/images/home/90DE72F1-0D46-4868-B742-1A14B6D39B12.jpeg"
            alt="Event photo 2"
            width={300}
            height={400}
          />
        </div>

        {/* Column 2 */}
        <div>
          <Image
            src="public/images/home/IMG_7610.JPG"
            alt="Portrait photo 1"
            width={300}
            height={400}
          />
          <Image
            src="public/images/home/IMG_7623.JPG"
            alt="Portrait photo 2"
            width={300}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
