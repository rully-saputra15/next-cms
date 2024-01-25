'use client';

import { PATH_PAGE } from '@/helpers/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiAccountCircleFill } from 'react-icons/ri';

function Header() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-between items-center border-b p-5">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-md font-bold">Next CMS</h1>
        <ul className="flex flex-row gap-5">
          <Link
            className={pathname === PATH_PAGE.HOME ? 'font-bold' : 'font-light'}
            href="/"
          >
            Home
          </Link>
          <Link
            href="/analytics"
            className={
              pathname === PATH_PAGE.ANALYTICS ? 'font-bold' : 'font-light'
            }
          >
            Analytics
          </Link>
          <Link
            className={
              pathname === PATH_PAGE.CONTENT ? 'font-bold' : 'font-light'
            }
            href="/content"
          >
            Content
          </Link>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-3xl">
          <RiAccountCircleFill />
        </h1>
      </div>
    </nav>
  );
}

export default Header;
