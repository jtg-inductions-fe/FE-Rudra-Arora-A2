import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const data = [
    { date: '2025-04-01', sales: 85000 },
    { date: '2025-04-02', sales: 79000 },
    { date: '2025-04-03', sales: 92000 },
    { date: '2025-04-04', sales: 88000 },
    { date: '2025-04-05', sales: 100000 },
    { date: '2025-04-06', sales: 96000 },
    { date: '2025-04-07', sales: 130000 },
];

export const Chart = () => (
    <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data} margin={{ bottom: 50 }}>
            <CartesianGrid vertical={false} />
            <XAxis
                dataKey="date"
                padding={{ left: 60, right: 60 }}
                tickLine={false}
                axisLine={false}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="sales"
                stroke="red"
                strokeWidth={2}
            />
        </LineChart>
    </ResponsiveContainer>
);
