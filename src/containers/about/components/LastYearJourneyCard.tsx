interface LastYearJourneyCardProps {
  statistics: string;
  explanation: string;
}

export default function LastYearJourneyCard(props: LastYearJourneyCardProps) {
  return (
    <div className='flex w-full flex-col items-end p-2 text-end text-cwhite'>
      <h2 className='text-[42px]'>{props.statistics}</h2>
      <p>{props.explanation}</p>
    </div>
  );
}
