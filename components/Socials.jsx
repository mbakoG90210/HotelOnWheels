import Link from 'next/link';
import { InstagramIcon, TwitterIcon, FacebookIcon, YoutubeIcon } from 'lucide-react';

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href='/https://www.instagram.com/hotelonwheelsbw/'>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href='/https://www.facebook.com/profile.php?id=61567063560210'>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link href='/https://www.youtube.com/@HotelOnWheelsBW'>
          <YoutubeIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
