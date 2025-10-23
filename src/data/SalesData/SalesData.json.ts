function generateDates() {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + i);
        dates.push(newDate);
    }
    return dates;
}

const dates = generateDates();

export const jsonData = [
    {
        date: dates[0],
        sales: 85000,
    },
    {
        date: dates[1],
        sales: 79000,
    },
    {
        date: dates[2],
        sales: 92000,
    },
    {
        date: dates[3],
        sales: 88000,
    },
    {
        date: dates[4],
        sales: 100000,
    },
    {
        date: dates[5],
        sales: 96000,
    },
    {
        date: dates[6],
        sales: 130000,
    },
];
