import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/link/UnstyledLink';

import clsxm from '@/utils/clsxm';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline custom-link inline-flex items-center font-medium',
          'border-b border-dotted border-dark hover:border-black/0',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
