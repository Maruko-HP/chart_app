document.addEventListener('turbolinks:load', () => {
// 折れ線グラフのデータ（値を変更するとグラフが変化することを確認してみて下さい）
    const lineLabel = ['1/5', '1/10', '1/15', '1/20', '1/25', '1/30']
    const lineData = [60.3, 61.1, 60.8, null, 60.5, 61.4]

    // 折れ線グラフのオプション

    const lineChartData = {
        labels: lineLabel,
        datasets: [{
            label: '体重(kg)',
            data: lineData,
            // グラフの色はここで変更できます
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(120, 99, 100, 1)',
            borderWidth: 1,
            spanGaps: true
        }]
    }

    const lineChartOption = {
        title: {
            display: true,
            text: '体重管理'
        },
        tooltips: {
            callbacks: {
                // ホバー（スマホならタップ）時のラベル表示を変更
                title: function (tooltipItems) {
                    return tooltipItems[0].xLabel.replace(/^(\d+).(\d+)$/, ' $1 月 $2 日')
                },
                label: function (tooltipItem) {
                    return '体重: ' + tooltipItem.yLabel + 'kg'
                }
            }
        }
    }

    // 折れ線グラフを表示
    const lineChartContext = document.getElementById("line-chart").getContext('2d')
    new Chart(lineChartContext, {
        type: 'line',
        data: lineChartData,
        options: lineChartOption
    })
})