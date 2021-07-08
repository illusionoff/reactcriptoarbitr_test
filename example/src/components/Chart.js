import React from 'react';
import { Line } from 'react-chartjs-2';

// Chart.defaults.global.legend.display = false; // eslint-disable-next-line no-unused-vars
// const chart = new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: arrName,
//     datasets: [
//       {
//         backgroundColor: arrColor,
//         data: arrCosts,
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//   },
// });

const data = canvas => {
  const ctx = canvas.getContext('2d');
  // const g = ctx.createLinearGradient(...);

  return {
    labels: ['a', 'b', 'c'],
    datasets: [{
      backgroundColor: ['red',
        'blue',
        'green'
      ],
      data: [100, 200, 300]
      // ...the rest
    }],
  };
}

export const Chart = () => {
  return (
    <div >
      <h3 className="page-title white-text">About</h3>
      <div className="container">
        <blockquote>
          Я начинающий Back-end, Full Stack Nodejs разработчик, которому интересно создавать новое, пробираться через ошибки и проблемы, постоянно обучаться.
          Чувствую себя наполненным восторгом и эйфорией, как ребенок, видя результат своих творений, осознавая полезность своих способностей. dsds
                </blockquote>
        <Line data={data} />
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div >
    </div>
  )
}