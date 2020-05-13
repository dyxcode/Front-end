// 左1柱状图
(function () {
  const chart = echarts.init(document.querySelector('.bar1 .chart'))

  const option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      top: '10px',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLine: {
        show: false
      }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
          width: 2
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '35%',
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  };
  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 右1柱状图
(function () {
  const barColor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"]
  const chart = echarts.init(document.querySelector('.bar2 .chart'))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '22%',
      top: "10%",
      bottom: '10%',
    },
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['巴西', '印尼', '美国', '印度', '中国'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)"
      }
    }, {
      data: [702, 350, 610, 793, 664],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 12,
          color: "rgba(255,255,255,.6)"
        }
      }
    }],
    series: [{
        name: 'current',
        type: 'bar',
        data: [38, 23, 29, 30, 13],
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            return barColor[params.dataIndex];
          }
        },
        barCategoryGap: 50,
        barWidth: 12,
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: 'percent',
        type: 'bar',
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 左2折线图
(function () {
  const chart = echarts.init(document.querySelector('.line1 .chart'))

  const option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: "10%"
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '20%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [{
        name: '联盟广告',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        smooth: true,
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };
  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 右2折线图
(function () {
  const chart = echarts.init(document.querySelector('.line2 .chart'))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      top: '0',
      textStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '15%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"
      ],
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }],
    series: [{
        name: '联盟广告',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#0184d5',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: 'rgba(0,0,0,0.1)'
        },
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221,220,107,0.1)',
          borderWidth: 12
        },
        data: [30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40
        ]
      },
      {
        name: '视频广告',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#00d887',
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130,10,20,40,30,40,80,60,20,40,90,40,20,140,30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20
        ]
      }
    ]
  };

  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 左3饼形图
(function () {
  const chart = echarts.init(document.querySelector('.pie1 .chart'))

  const option = {
    color: ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 335,
          name: '中国'
        },
        {
          value: 310,
          name: '印度'
        },
        {
          value: 1548,
          name: '美国'
        },
        {
          value: 135,
          name: '印尼'
        },
        {
          value: 234,
          name: '巴西'
        }
      ]
    }]
  };

  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 右3饼形图
(function () {
  const chart = echarts.init(document.querySelector('.pie2 .chart'))

  const option = {
    color: ["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8"
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '10'
      }
    },
    series: [{
      name: '半径模式',
      type: 'pie',
      radius: ["10%", "70%"],
      center: ['50%', '40%'],
      roseType: 'radius',
      label: {
        fontSize: 10
      },
      labelLine: {
        length: 6,
        length2: 8
      },
      data: [
        { value: 20, name: "云南" },
        { value: 26, name: "北京" },
        { value: 24, name: "山东" },
        { value: 25, name: "河北" },
        { value: 20, name: "江苏" },
        { value: 42, name: "湖北" }
      ]
    }]
  };
  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();

// 疫情全国地图
(function () {
  const chart = echarts.init(document.querySelector('.map .chart'))

  const dataList = [{
      name: "南海诸岛",
      value: 0
    },
    {
      name: '北京',
      value: 54
    },
    {
      name: '天津',
      value: 13
    },
    {
      name: '上海',
      value: 40
    },
    {
      name: '重庆',
      value: 75
    },
    {
      name: '河北',
      value: 13
    },
    {
      name: '河南',
      value: 83
    },
    {
      name: '云南',
      value: 11
    },
    {
      name: '辽宁',
      value: 19
    },
    {
      name: '黑龙江',
      value: 15
    },
    {
      name: '湖南',
      value: 69
    },
    {
      name: '安徽',
      value: 60
    },
    {
      name: '山东',
      value: 39
    },
    {
      name: '新疆',
      value: 4
    },
    {
      name: '江苏',
      value: 31
    },
    {
      name: '浙江',
      value: 104
    },
    {
      name: '江西',
      value: 36
    },
    {
      name: '湖北',
      value: 1052
    },
    {
      name: '广西',
      value: 33
    },
    {
      name: '甘肃',
      value: 7
    },
    {
      name: '山西',
      value: 9
    },
    {
      name: '内蒙古',
      value: 7
    },
    {
      name: '陕西',
      value: 22
    },
    {
      name: '吉林',
      value: 4
    },
    {
      name: '福建',
      value: 18
    },
    {
      name: '贵州',
      value: 5
    },
    {
      name: '广东',
      value: 98
    },
    {
      name: '青海',
      value: 1
    },
    {
      name: '西藏',
      value: 0
    },
    {
      name: '四川',
      value: 44
    },
    {
      name: '宁夏',
      value: 4
    },
    {
      name: '海南',
      value: 22
    },
    {
      name: '台湾',
      value: 3
    },
    {
      name: '香港',
      value: 5
    },
    {
      name: '澳门',
      value: 5
    }
  ];
  const option = {
    tooltip: {
      triggerOn: "click",
      formatter: function (e, t, n) {
        return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: 26,
      bottom: 0,
      showLabel: !0,
      text: ["高", "低"],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '10'
      },
      pieces: [{
        gt: 100,
        label: "> 100 人",
        color: "rgba(127,17,0,0.5)"
      }, {
        gte: 10,
        lte: 100,
        label: "10 - 100 人",
        color: "rgba(255,84,40,0.5)"
      }, {
        gte: 1,
        lt: 10,
        label: "1 - 9 人",
        color: "rgba(255,140,113,0.5)"
      }, {
        gt: 0,
        lt: 1,
        label: "疑似",
        color: "rgba(255,215,104,0.5)"
      }, {
        value: 0,
        color: "rgba(255,255,255,0.5)"
      }],
      show: !0
    },
    geo: {
      map: "china",
      roam: !0,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1.23,
      top: 80,
      label: {
        normal: {
          show: !0,
          fontSize: "14",
          color: "rgba(255,255,255,.6)"
        }
      },
      itemStyle: {
        normal: {
          //shadowBlur: 50,
          //shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: "rgba(255, 0, 0, 0.2)"
        },
        emphasis: {
          areaColor: "#f2d5ad",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [{
      name: "确诊病例",
      type: "map",
      geoIndex: 0,
      data: dataList
    }]
  };
  chart.setOption(option);
  // 图表跟随屏幕自适应
  window.addEventListener('resize', function () {
    chart.resize()
  })
})();