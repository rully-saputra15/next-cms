'use client';

import { InformationCard } from '@/components/core';
import { lilacColor, mainColor } from '@/helpers/colors';
import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';

const data = [
  {
    name: 'Article A',
    views: '500',
  },
  {
    name: 'Article B',
    views: '280',
  },
  {
    name: 'Article C',
    views: '200',
  },
  {
    name: 'Article D',
    views: '600',
  },
  {
    name: 'Article E',
    views: '300',
  },
  {
    name: 'Article F',
    views: '100',
  },
  {
    name: 'Article G',
    views: '50',
  },
  {
    name: 'Article H',
    views: '400',
  },
  {
    name: 'Article I',
    views: '300',
  },
  {
    name: 'Article J',
    views: '100',
  },
  {
    name: 'Article K',
    views: '50',
  },
  {
    name: 'Article L',
    views: '400',
  },
];

const pieData = [
  {
    name: 'Group A',
    value: 400,
  },
  {
    name: 'Group B',
    value: 500,
  },
  {
    name: 'Group C',
    value: 150,
  },
  {
    name: 'Group D',
    value: 340,
  },
];

const pieData2 = [
  {
    name: 'Group A',
    value: 200,
  },
  {
    name: 'Group B',
    value: 173,
  },
  {
    name: 'Group C',
    value: 300,
  },
  {
    name: 'Group D',
    value: 340,
  },
];

function ChartSection() {
  return (
    <section className="flex flex-row flex-wrap justify-between items-stretch gap-5 min-h-48">
      <InformationCard
        title="Chart 1"
        description="Lorem ipsum dor selamet"
        containerClassName="flex-1"
      >
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill={lilacColor}
              innerRadius={60}
              label
            />
            <Pie
              data={pieData2}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill={mainColor}
              outerRadius={50}
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </InformationCard>
      <InformationCard
        title="Chart 2"
        description="Lorem ipsum dor selamet"
        containerClassName="flex-1"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="views"
              fill={mainColor}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </InformationCard>
    </section>
  );
}

export default ChartSection;
