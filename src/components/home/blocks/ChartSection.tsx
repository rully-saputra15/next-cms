'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mainColor } from '@/helpers/colors';
import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Article A',
    views: '500'
  },
  {
    name: 'Article B',
    views: '280'
  },
  {
    name: 'Article C',
    views: '200'
  },
  {
    name: 'Article D',
    views: '600'
  },
  {
    name: 'Article E',
    views: '300'
  },
  {
    name: 'Article F',
    views: '100'
  },
  {
    name: 'Article G',
    views: '50'
  },
  {
    name: 'Article H',
    views: '400'
  }
];

const ChartSection = () => {
  return (
    <section className="flex flex-row flex-wrap justify-between items-stretch gap-5 min-h-48">
      <Card>
        <CardHeader>
          <CardTitle>Chart 1</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={1000} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="views"
              fill={mainColor}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </CardContent>
      </Card>
    </section>
  );
};

export default ChartSection;
