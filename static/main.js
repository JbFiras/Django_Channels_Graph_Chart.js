var socket = new WebSocket('ws://localhost:8000/ws/graph/');

socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData)
    var newGraphData  = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value);
    graphData.data.datasets[0].data = newGraphData;
    myChart.update()

}

const ctx = document.getElementById('myChart').getContext('2d');

var graphData = {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}
const myChart = new Chart(ctx, graphData);