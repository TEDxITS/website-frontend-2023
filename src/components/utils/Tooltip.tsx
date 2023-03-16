import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import React from 'react';

import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/scale.css';

type TooltipTextProps = {
  /** Elements to be shown in the tooltip */
  content?: React.ReactNode;
  /** Tooltip trigger */
  children?: React.ReactNode;
  /** Add underline to children, useful for texts */
  withUnderline?: boolean;
  /** If using underline, you can customize the CSS */
  spanClassName?: string;
};

export default function Tooltip({
  content,
  children,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  return (
    <Tippy
      trigger='mouseenter'
      interactive
      hideOnClick={false}
      content={<span>{content}</span>}
      placement='top-start'
      delay={100}
      animation='fade'
      arrow={false}
      {...rest}
    >
      {withUnderline ? (
        <span className={clsx(spanClassName, 'underline')}>{children} </span>
      ) : (
        <span className={spanClassName}>{children}</span>
      )}
    </Tippy>
  );
}
