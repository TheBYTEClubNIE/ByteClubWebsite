import Link from 'next/link';

const ByteHackathonNavbar = () => {
  return (
    <nav className="text-white p-4 h-20 flex justify-center items-center fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Byte Hackathon</h1>
        </Link>
        <div className="flex space-x-6">
          <Link href="/about">About</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/prizes">Prizes</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/organisers">Organisers</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/community">Community</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/glimpses">Glimpses</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default ByteHackathonNavbar;
