function generateDates() {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 6; i++) {
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + i);
        dates.push(newDate);
    }
    return dates;
}

const dates = generateDates();

export const jsonData = [
    {
        personName: 'Bonnie Green',
        date: dates[0],
        amount: 2300,
        status: 'Completed',
    },
    {
        personName: 'Bonnie Green',
        date: dates[1],
        amount: -670,
        status: 'Completed',
    },
    {
        personName: 'Jese Leos',
        date: dates[2],
        amount: 234,
        status: 'Cancelled',
    },
    {
        personName: 'Bonnie Green',
        date: dates[3],
        amount: 5000,
        status: 'In progress',
    },
    {
        personName: 'Jese Leos',
        date: dates[4],
        amount: 2300,
        status: 'In progress',
    },
    {
        personName: 'THEMESBERG LLC',
        date: dates[5],
        amount: 280,
        status: 'Completed',
    },
];
