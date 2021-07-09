import React from 'react';
import { Line } from 'react-chartjs-2';


// 1,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192271,1625823192373,true
// 2,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192584,1625823192492,true
// 3,0.61492768,0.61202401,0.61755264,0.6190815,-0.00552863,-0.00415382,1625823192830,1625823192492,false
// 4,0.61439874,0.61202401,0.61800354,0.6190815,-0.00597953,-0.00468276,1625823193001,1625823192492,false

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
// let canvas = document.getElementById("myChart");
const data = canvas => {
  const ctx = canvas.getContext('2d');
  console.log('ctx=', ctx);
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
    // backgroundColor: gradient,
    // labels: ['a', 'b', 'c'],
    // datasets: [{
    //   label: 'test label',
    //   backgroundColor: ['red', 'blue', 'green'],
    //   data: [100, 200, 300]
    //   // ...the rest
    // },
    // {
    //   backgroundColor: ['red',
    //     'red',
    //     'red'
    //   ],
    //   data: [150, 250, 350]
    //   // ...the rest
    // },
    //   // {
    //   //   backgroundColor: ['green',
    //   //     'green',
    //   //     'green'
    //   //   ],
    //   //   data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }],
    //   //   options: {
    //   //     parsing: {
    //   //       xAxisKey: 'id',
    //   //       yAxisKey: 'nested.value'
    //   //     }
    //   //   }
    //   //   // ...the rest
    //   // }
    // ],
    // options: {
    //   responsive: false
    // }



    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      label: 'A',
      yAxisID: 'A',
      // backgroundColor: ['red', 'red', 'red', 'red', 'red'],
      borderColor: 'red',
      // color: "#F7464A",
      // fillColor: "rgba(255, 187, 0, 1)",
      // color: 'blue',
      data: [100, 96, 84, 76, 69]
    }, {
      label: 'B',
      yAxisID: 'B',
      borderColor: 'green',
      data: [1, 1, 1, 1, 0]
    }]






  };
}


const options = {
  // scales: {
  //   yAxes: [{
  //     id: 'A',
  //     type: 'linear',
  //     // position: 'left',
  //   }, {
  //     id: 'B',
  //     type: 'linear',
  //     position: 'right',
  //     ticks: {
  //       max: 1,
  //       min: 0
  //     }
  //   }]
  // }
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
        <div>
          <canvas id="myChart"></canvas>
        </div>
        <Line data={data}
          // ref={ref}
          // width={100}
          // height={50}
          // options={{ maintainAspectRatio: false }} 
          options={options}
        />

      </div >
    </div>
  )
}