import { MerchTypes } from '@/types/merch.types';

interface MerchProps {
  merchandise: MerchTypes[];
}

export default function MerchItemContainer(props: MerchProps) {
  return (
    <div className='grid grid-cols-1 justify-center gap-10 p-5 lg:grid-cols-2'>
      {props.merchandise.map((merch: MerchTypes) => (
        <div key={merch.id}>
          {/* <img src={merch.image} /> */}
          <p>{merch.name}</p>
          <p>{merch.type}</p>
          <p>
            <span>Rp.</span>
            {merch.price}
          </p>
        </div>
      ))}
    </div>
  );
}
