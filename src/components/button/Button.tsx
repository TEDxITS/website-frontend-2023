import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/utils/clsxm';

const ButtonVariant = [
  'unstyled',
  'primary',
  'gradient',
  'gradient-alt',
] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'gradient',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-full font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition duration-200 ease-in-out',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-5 py-2.5', 'text-sm md:text-base'],
            size === 'sm' && ['px-2 py-1', 'text-xs md:text-sm'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-cred text-cwhite',
              'hover:scale-105',
              'active:scale-100',
              'disabled:brightness-75',
            ],
            variant === 'gradient' && [
              'bg-gradient-to-r from-cblue to-cred text-white',
              'hover:scale-105 hover:bg-primary-600 hover:from-cwhite hover:to-cblue hover:text-cblack',
              'active:scale-100 active:bg-primary-700',
              'disabled:brightness-75 disabled:hover:scale-100 disabled:hover:from-cblue disabled:hover:to-cred disabled:hover:text-white',
            ],
            variant === 'gradient-alt' && [
              'bg-gradient-to-br from-cblack via-cblue to-cblue text-white',
              'hover:scale-105 hover:bg-primary-600 hover:from-cwhite hover:to-cblue hover:text-cblack',
              'active:scale-100 active:bg-primary-700',
              'disabled:brightness-75 disabled:hover:scale-100 disabled:hover:from-cblue disabled:hover:to-cred disabled:hover:text-white',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              className={clsxm(
                [
                  size === 'base' && 'md:text-md text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              className={clsxm(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                rightIconClassName
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
