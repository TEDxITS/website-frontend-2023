import { MerchTypes } from '@/types/merch.types';

interface MerchProps {
  merchandise: MerchTypes[];
}

export default function MerchCarouselContainer(props: MerchProps) {
  return (
    <div>
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
