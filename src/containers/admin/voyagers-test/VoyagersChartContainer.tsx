/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { localApi } from '@/utils/local-api';

const data = [
  { name: 'Pie 1', value: 400 },
  { name: 'Pie 2', value: 300 },
  { name: 'Pie 3', value: 200 },
];

const COLORS = ['#e83525', '#42779B', '#1A5B38']; // Define colors for each pie slice

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  value: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor='middle'
      dominantBaseline='central'
    >
      {`${value} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

export default function VoyagersChartContainer() {
  const voyagersQuery = useQuery({
    queryKey: ['voyagers'],
    queryFn: async () => {
      try {
        const { data: response } = await localApi.get<any>('/voyagers-test');
        return response.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  if (voyagersQuery.isLoading) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-20 text-center font-baron text-cwhite'>
          VOYAGERS TEST RESULT
        </h1>
        <div role='status' className='mb-4'>
          <svg
            aria-hidden='true'
            className='h-8 w-8 animate-fast-spin fill-black text-cwhite'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
        </div>
        <p className='text-center text-cwhite'>Loading...</p>
      </section>
    );
  }

  if (voyagersQuery.isError) {
    return (
      <section className='z-20 flex flex-col items-center p-5 px-10'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          VOYAGERS TEST RESULT
        </h1>

        <p className='mb-5 text-center text-cwhite'>
          There is a problem when getting your data. Please try again later
        </p>
      </section>
    );
  }

  const formattedData = voyagersQuery.data.map((voyager: any) => {
    return {
      name: voyager.result,
      value: voyager._count.result,
    };
  });

  return (
    <section className='layout z-20 pb-10'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>
        VOYAGERS TEST RESULT
      </h1>
      <div className='rounded-md bg-cwhite p-4'>
        <ResponsiveContainer width='100%' height={500}>
          <PieChart>
            <Pie
              data={formattedData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#8884d8'
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
