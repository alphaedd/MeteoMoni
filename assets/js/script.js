Highcharts.chart('container', {
			chart: {
				type: 'column'
			},
			colors: [
				'#00e6e6', 
				'#99ccff' 
				],
			title: {
				text: 'Website Audience Metrics'
			},
			subtitle: {
				text: 'Audience to which the users belonged while on the current date range.'
			},
			
			yAxis: {
				min: 80,
				title: {
					text: null
				},
			},
			xAxis: {
				categories: [''],
				title: {
					text: null
				},
				labels: {
					enabled:false,//default is true
				}
			},
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
			tooltip: {
				enabled: false
			},
			legend: {
				enabled: false
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				data: [80, 90.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

			}, {
				data: [90.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

			}]
		});
		
		var chart1 = new Highcharts.Chart({
			  title: {
				text: 'NEW USERS',
				align: 'left',
				margin: 0,
			  },
			  chart: {
				renderTo: 'container1',
				type: 'bar',
				height: 70,
			  },
			  credits: false,
			  tooltip: false,
			  legend: false,
			  navigation: {
				buttonOptions: {
				  enabled: false
				}
			  },
			  xAxis: {
				visible: false,
			  },
			  yAxis: {
				visible: false,
				min: 0,
				max: 100,
			  },
			  series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightgray',
				pointWidth: 25,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				  className: 'highlight',
				  format: '20,000',
				  enabled: true,
				  align: 'right',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }, {
				enableMouseTracking: false,
				data: [65],
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: '#00e6e6',
				borderWidth: 0,
				pointWidth: 25,
				animation: {
				  duration: 250,
				},
				dataLabels: {
				  enabled: true,
				  inside: true,
				  align: 'left',
				  format: '{point.y}%',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }]
		});
		var chart2 = new Highcharts.Chart({
			  title: {
				text: 'PAGE VIEWS',
				align: 'left',
				margin: 0,
			  },
			  chart: {
				renderTo: 'container2',
				type: 'bar',
				height: 70,
			  },
			  credits: false,
			  tooltip: false,
			  legend: false,
			  navigation: {
				buttonOptions: {
				  enabled: false
				}
			  },
			  xAxis: {
				visible: false,
			  },
			  yAxis: {
				visible: false,
				min: 0,
				max: 100,
			  },
			  series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightgray',
				pointWidth: 25,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				  className: 'highlight',
				  format: '250,000',
				  enabled: true,
				  align: 'right',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }, {
				enableMouseTracking: false,
				data: [45],
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: ' #ff9966',
				borderWidth: 0,
				pointWidth: 25,
				animation: {
				  duration: 250,
				},
				dataLabels: {
				  enabled: true,
				  inside: true,
				  align: 'left',
				  format: '{point.y}%',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }]
		});
		var chart3 = new Highcharts.Chart({
			  title: {
				text: 'PAGE SESSIONS',
				align: 'left',
				margin: 0,
			  },
			  chart: {
				renderTo: 'container3',
				type: 'bar',
				height: 70,
			  },
			  credits: false,
			  tooltip: false,
			  legend: false,
			  navigation: {
				buttonOptions: {
				  enabled: false
				}
			  },
			  xAxis: {
				visible: false,
			  },
			  yAxis: {
				visible: false,
				min: 0,
				max: 100,
			  },
			  series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightgray',
				pointWidth: 25,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				  className: 'highlight',
				  format: '85,000',
				  enabled: true,
				  align: 'right',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }, {
				enableMouseTracking: false,
				data: [20],
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: ' #ff66d9',
				borderWidth: 0,
				pointWidth: 25,
				animation: {
				  duration: 250,
				},
				dataLabels: {
				  enabled: true,
				  inside: true,
				  align: 'left',
				  format: '{point.y}%',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }]
		});
		var chart4 = new Highcharts.Chart({
			  title: {
				text: 'BOUNCE RATES',
				align: 'left',
				margin: 0,
			  },
			  chart: {
				renderTo: 'container4',
				type: 'bar',
				height: 70,
			  },
			  credits: false,
			  tooltip: false,
			  legend: false,
			  navigation: {
				buttonOptions: {
				  enabled: false
				}
			  },
			  xAxis: {
				visible: false,
			  },
			  yAxis: {
				visible: false,
				min: 0,
				max: 100,
			  },
			  series: [{
				data: [100],
				grouping: false,
				animation: false,
				enableMouseTracking: false,
				showInLegend: false,
				color: 'lightgray',
				pointWidth: 25,
				borderWidth: 0,
				borderRadiusTopLeft: '4px',
				borderRadiusTopRight: '4px',
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				dataLabels: {
				  className: 'highlight',
				  format: '30.50%',
				  enabled: true,
				  align: 'right',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }, {
				enableMouseTracking: false,
				data: [85],
				borderRadiusBottomLeft: '4px',
				borderRadiusBottomRight: '4px',
				color: '#99ccff',
				borderWidth: 0,
				pointWidth: 25,
				animation: {
				  duration: 250,
				},
				dataLabels: {
				  enabled: true,
				  inside: true,
				  align: 'left',
				  format: '{point.y}%',
				  style: {
					color: 'white',
					textOutline: false,
				  }
				}
			  }]
		});
		var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container5',
                type: 'pie'
            },
			colors: [
				'#00e6e6',
				'#ff66d9',
				'#ff9966',
				'#99ccff' 
				],
            title: {
                text: 'Sessions By Channel'
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
			credits: {
				enabled: false
			},
			exporting: {
				enabled: false
			},
            series: [{
                name: '	',
                data: [["ORGANIC SEARCH <br> 1,320 <span style='color:lightgray'> 25% </span>",25],
				["EMAIL <br> 987 <span style='color:lightgray'> 20% </span>",20],
				["REFERRAL <br> 2,010 <span style='color:lightgray'> 30% </span>",30],
				["SOCIAL MEDIA <br> 1,054 <span style='color:lightgray'> 25% </span>",25]],
                size: '60%',
                innerSize: '50%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                }
            }]
        });