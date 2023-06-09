import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
        
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
