import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div
      style={{
        flex: '1 1 100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <h1 className='next-error-h1'>
          <Image src={'/memoji_shrug.svg'} alt='404' width='75' height='75' />
        </h1>
        <div>
          <h2>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
