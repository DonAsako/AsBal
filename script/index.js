// BarChar

const barLabels = [
    '06/07/2022',
    '05/2022',
    '04/2022',
    '03/2022',
    '02/2022',
    '01/2022',
];

const barData = {
    labels: barLabels,
    datasets: [{
        label: 'Bal',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [320, 312.8, 332.8, 352.8, 326.7, 346.7],
    }]
};

const barConfig = {
    type: 'line',
    data: barData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
    }
};

const barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);

const pieData = {
    labels: [
        'Restaurant',
        'Bar',
    ],
    datasets: [{
        label: 'Out',
        data: [26.10, -7.20],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
        ],
        hoverOffset: 8
    }]
};

const pieConfig = {
    type: 'doughnut',
    data: pieData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
    },
};

const pieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);

const barDoubleLabels = [
    '01/2022',
    '02/2022',
    '03/2022',
    '04/2022',
    '05/2022',
    '06/2022',
    '07/2022',
    '08/2022',
    '09/2022',
    '10/2022',
    '11/2022',
    '12/2022',
];

const barDoubleData = {
    labels: barDoubleLabels,
    datasets: [{
        label: "Entry",
        data: [100, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgb(54, 162, 235)',
        ],
        borderWidth: 1
    },
    {
        label: "Out",
        data: [20.00, 33.0, 20.00, 50.0, 30.00, 45.0, 4.00, 25.0, 40.00, 63.0, 10.00, 33.0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            ],
        borderColor: [
            'rgb(255, 99, 132)',
        ],
        borderWidth: 1
    },
    ],
    

};

const barDoubleConfig = {
    type: 'bar',
    data: barDoubleData,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
};

const barDoubleChart = new Chart(
    document.getElementById('barDoubleChart'),
    barDoubleConfig
);
   