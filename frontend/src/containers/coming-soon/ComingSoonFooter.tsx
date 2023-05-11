import UnstyledLink from '@/components/link/UnstyledLink';

import InstagramIcon from '~/images/icons/instagram.svg';
import LinkedinIcon from '~/images/icons/linkedin.svg';
import TwitterIcon from '~/images/icons/twitter.svg';
import TedIcon from '~/images/logo/tedxits-text.svg';

export default function ComingSoonFooter() {
  return (
    <footer className='flex h-1/3 w-full items-end px-16 pb-12'>
      <div className='flex w-full flex-col flex-col-reverse items-center justify-between gap-y-2 sm:flex-row'>
        <div className='inline-flex items-center gap-x-2'>
          <TedIcon className='h-14 w-24' />
          <p className='text-cwhite'>
            <span>&#169;</span>2023
          </p>
        </div>
        <div className='flex gap-x-5'>
          <UnstyledLink href='https://www.instagram.com/tedxits/' openNewTab>
            <InstagramIcon className='h-8 w-8' />
          </UnstyledLink>
          <UnstyledLink
            href='https://www.linkedin.com/company/tedxits'
            openNewTab
          >
            <LinkedinIcon className='h-8 w-8' />
          </UnstyledLink>
          <UnstyledLink href='https://twitter.com/tedxits' openNewTab>
            <TwitterIcon className='h-8 w-8' />
          </UnstyledLink>
        </div>
      </div>
    </footer>
  );
}
