'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { EyesClosed, EyesOpen } from '@/assets/svg/PasswordEyes';
import clsxm from '@/utils/clsxm';

type InputProps = {
  id: string;
  sizes?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light' | 'outline' | 'ghost';
  helperText?: React.ReactNode | string;
  label?: React.ReactNode | string;
} & React.ComponentPropsWithoutRef<'input'>;

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       id,
//       className,
//       type = 'text',
//       size = 'md',
//       variant = 'default',
//       label = '',
//       helperText,
//       ...rest
//     },
//     ref
//   ) => {
//     const {
//       register,
//       formState: { errors },
//     } = useFormContext();
//     const [isPasswordVisible, setIsPasswordVisible] =
//       React.useState<boolean>(false);
//     const classes = {
//       'text-sm': size === 'sm',
//       'text-md': size === 'md',
//       'text-lg': size === 'lg',
//       tba: variant === 'default',
//     };

//     return (
//       <div className='block w-full space-y-1'>
//         {label && <label htmlFor={id}>{label}</label>}
//         <div className='flex items-center'>
//           <input
//             {...register(id)}
//             {...rest}
//             ref={ref}
//             type={
//               type === 'password'
//                 ? isPasswordVisible
//                   ? 'text'
//                   : 'password'
//                 : type
//             }
//             className={clsxm(
//               'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400',
//               classes,
//               className
//             )}
//           />
//           {type === 'password' && (
//             <div className='-ml-9 mt-2'>
//               <button
//                 className='p-0'
//                 onClick={() => setIsPasswordVisible((old) => !old)}
//               >
//                 {isPasswordVisible ? <EyesClosed /> : <EyesOpen />}
//               </button>
//             </div>
//           )}
//         </div>
//         <p className='text-xs text-gray-500'>{helperText}</p>
//         <p className='text-red-400'>{JSON.stringify(errors)}</p>
//       </div>
//     );
//   }
// );

// export default Input;

export default function Input({
  id,
  className,
  type = 'text',
  sizes = 'md',
  variant = 'default',
  label = '',
  helperText,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  const classes = {
    'text-sm': sizes === 'sm',
    'text-md': sizes === 'md',
    'text-lg': sizes === 'lg',
    tba: variant === 'default',
  };
  return (
    <div className='block w-full space-y-1'>
      {label && <label htmlFor={id}>{label}</label>}
      <div className='flex items-center'>
        <input
          {...register(id)}
          {...rest}
          type={
            type === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          className={clsxm(
            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400',
            classes,
            className
          )}
        />
        {type === 'password' && (
          <div className='-ml-9 mt-2'>
            <button
              className='p-0'
              onClick={() => setIsPasswordVisible((old) => !old)}
            >
              {isPasswordVisible ? <EyesClosed /> : <EyesOpen />}
            </button>
          </div>
        )}
      </div>
      <p className='text-xs text-gray-500'>{helperText}</p>
      <p className='text-red-400'>
        {errors[id] && String(errors[id]?.message)}
      </p>
    </div>
  );
}