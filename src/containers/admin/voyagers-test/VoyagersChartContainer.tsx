'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';

import { localApi } from '@/utils/local-api';

const data = [
  { name: 'Pie 1', value: 400 },
  { name: 'Pie 2', value: 300 },
  { name: 'Pie 3', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Define colors for each pie slice

export default function VoyagersChartContainer() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const voyagersQuery = useQuery({
    queryKey: ['voyagers'],
    queryFn: async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: response } = await localApi.get<any>('/voyagers-test');
        return response;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className='layout z-20'>
      {isLoading ? (
        <h1 className='text-cwhite'>Loading...</h1>
      ) : (
        <div className='rounded-md bg-cwhite'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey='value'
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill='#8884d8'
              label
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
        </div>
      )}
    </section>
  );
}
