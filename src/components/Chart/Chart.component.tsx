import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

export const Chart = () => (
    <LineChart
        width={680}
        height={500}
        data={data}
        margin={{ top: 50, right: 50, bottom: 20, left: 50 }}
    >
        <CartesianGrid stroke="#aaa" strokeDasharray="0 0" />
        <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Legend align="right" />
        <Tooltip />
    </LineChart>
);
