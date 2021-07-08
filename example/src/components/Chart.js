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
  const gradient = ctx.createLinearGradient(100, 0, 100, 2);
  // const g = ctx.createLinearGradient(...);
  // const data = [{ x: 'Jan', net: 100, cogs: 50, gm: 50 }, { x: 'Feb', net: 120, cogs: 55, gm: 75 }];
  // const cfg = {
  //   type: 'bar',
  //   data: {
  //     labels: ['Jan', 'Feb'],
  //     datasets: [{
  //       label: 'Net sales',
  //       data: data,
  //       parsing: {
  //         yAxisKey: 'net'
  //       }
  //     }, {
  //       label: 'Cost of goods sold',
  //       data: data,
  //       parsing: {
  //         yAxisKey: 'cogs'
  //       }
  //     }, {
  //       label: 'Gross margin',
  //       data: data,
  //       parsing: {
  //         yAxisKey: 'gm'
  //       }
  //     }]
  //   },
  // };
  return {
    backgroundColor: gradient,
    labels: ['a', 'b', 'c'],
    datasets: [{
      backgroundColor: ['red', 'blue', 'green'],
      data: [100, 200, 300]
      // ...the rest
    },
    {
      backgroundColor: ['red',
        'red',
        'red'
      ],
      data: [150, 250, 350]
      // ...the rest
    },
    {
      backgroundColor: ['green',
        'green',
        'green'
      ],
      data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }],
      options: {
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'nested.value'
        }
      }
      // ...the rest
    }],

  };
}

export const Chart = () => {
  // const ref = useRef();
  return (
    <div >
      <h3 className="page-title white-text">About</h3>
      <div className="container">
        <blockquote>
          Я начинающий Back-end, Full Stack Nodejs разработчик, которому интересно создавать новое, пробираться через ошибки и проблемы, постоянно обучаться.
          Чувствую себя наполненным восторгом и эйфорией, как ребенок, видя результат своих творений, осознавая полезность своих способностей. dsds
                </blockquote>
        <Line data={data}
        // ref={ref}
        // width={100}
        // height={50}
        // options={{ maintainAspectRatio: false }} 
        />
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div >
    </div>
  )
}