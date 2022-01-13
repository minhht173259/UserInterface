import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import s from './Charts.module.scss';
import Dot from '../../../components/Dot/Dot';

const chartsSettings = {
  donut: {
    data: [
      { name: 'Custom Classes', value: 300, color: '#FFC405' },
      { name: 'Different Types', value: 400, color: '#FF5668' },
      { name: 'Credit Card', value: 400, color: '#4D53E0' },
    ],
  },
};
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RechartsPie2 = ({ data }) => {
  return (
    <div style={{ height: 'auto' }}>
      <ResponsiveContainer width='100%' height={200}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={s.donutLabels}>
        {data.map((entry, index) => (
          <div key={uuidv4()} className={s.label}>
            <Dot color={entry.color} />
            <span className='body-3 ml-2'>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RechartsPie2);
