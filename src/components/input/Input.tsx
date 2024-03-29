'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { EyesClosed, EyesOpen } from '@/assets/svg/PasswordEyes';
import clsxm from '@/utils/clsxm';

type InputProps = {
  id: string;
  labelClassName?: string;
  helperText?: React.ReactNode | string;
  topHelperText?: React.ReactNode | string;
  label?: React.ReactNode | string;
  showError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  className,
  labelClassName,
  type = 'text',
  label = '',
  helperText,
  topHelperText,
  showError = true,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  return (
    <div className='block w-full space-y-1'>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <div className='text-xs text-ccream'>{topHelperText}</div>
      <div className='flex items-center'>
        <input
          {...register(id)}
          {...rest}
          id={id}
          type={
            type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          className={clsxm(
            'block w-full rounded-full border border-gray-300 bg-cwhite p-2.5 text-sm text-gray-900 transition ease-in-out focus:border-cblue focus:outline-none focus:ring-1 focus:ring-cblue',
            className
          )}
        />
        {type === 'password' && (
          <div className='-ml-9 mt-2'>
            <button
              type='button'
              className='p-0'
              onClick={() => setIsPasswordVisible((old) => !old)}
            >
              {isPasswordVisible ? <EyesClosed /> : <EyesOpen />}
            </button>
          </div>
        )}
      </div>
      <p className='text-xs text-ccream'>{helperText}</p>
      {showError && (
        <p className='text-sm text-red-400'>
          {errors[id] && String(errors[id]?.message)}
        </p>
      )}
    </div>
  );
}
