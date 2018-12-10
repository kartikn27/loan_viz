betterLoans.controller('loanController',['loanService', function(loanService){

    var self = this;
    self.data = [];
    self.charts=[false,false,false,false,false,false,false, false, false];
    self.chartLabels =[];
    self.options ={};
	days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']

    /// LOAN CHARTS ///

	self.rate2016 = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[3] = true;
		loanService.rate2016().then(function(resp){

            console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.rate2016Data = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'yellow'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'red'
				}
			];
			console.log('self.rate2016Data ', self.rate2016Data);

			self.$apply();

        });
	};

	self.options.rate2016Data = {
		chart: {
			type: 'multiBarChart',
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 40,
				left: 65
			},
			x: function(d){ return d.x; },
			y: function(d){ return d.y; },
			xAxis: {
			},

			yAxis: {
				axisLabel: 'Total applications and funded application for every month',
				tickFormat: function(d){
					return d3.format('f')(d);
				}
			},
			useInteractiveGuideline: false
		}
	};

	self.rate2017 = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[2] = true;
		loanService.rate2017().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.rate2017Data = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'blue'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'black'
				}
			];
			console.log('self.rate2017Data ', self.rate2016Data);

			self.$apply();

		});
	};

	self.options.rate2017Data = {
		chart: {
			type: 'multiBarChart',
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 40,
				left: 65
			},
			x: function(d){ return d.x; },
			y: function(d){ return d.y; },
			xAxis: {
			},

			yAxis: {
				axisLabel: 'Total applications and funded application for every month',
				tickFormat: function(d){
					return d3.format('f')(d);
				}
			},
			useInteractiveGuideline: false
		}
	};


	self.type2016 = function(){
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[0] = true;

		loanService.type2016().then(function(resp){
		   self.type2016Count = resp;
        });
		console.log('self.type2016Count... ', self.type2016Count);
		self.type2017();
	};

	self.options.type2016Count = {
		chart: {
			type: 'pieChart',
			height: 500,
			x: function(d){return d.label;},
			y: function(d){return d.value;},
			showLabels: true,
			duration: 500,
			labelThreshold: 0.01,
			labelSunbeamLayout: true,
			legend: {
				margin: {
					top: 5,
					right: 35,
					bottom: 5,
					left: 0
				}
			}
		}

	};

	self.type2017 = function(){
		loanService.type2017().then(function(resp){
			self.type2017Count = resp;
		});
		console.log('self.type2017Count... ', self.type2016Count);

	};

	self.options.type2017Count = {
		chart: {
			type: 'pieChart',
			height: 500,
			x: function(d){return d.label;},
			y: function(d){return d.value;},
			showLabels: true,
			duration: 500,
			labelThreshold: 0.01,
			labelSunbeamLayout: true,
			legend: {
				margin: {
					top: 5,
					right: 35,
					bottom: 5,
					left: 0
				}
			},
			color: ["#965251", "#00b3ca", "#7dd0b6", "#e38690", "#ead98b"]
		}
	};

	self.conforming2016 = function(){
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[1] = true;

		loanService.conforming2016().then(function(resp){
			self.conforming2016Count = resp;
		});
		console.log('self.conforming2016Count... ', self.conforming2016Count);
		self.conforming2017();
	};

	self.conforming2017 = function(){
		loanService.conforming2017().then(function(resp){
			self.conforming2017Count = resp;
		});
		console.log('self.conforming2017Count... ', self.conforming2017Count);
	};

	self.jumbo2016 = function(){
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[2] = true;

		loanService.jumbo2016().then(function(resp){
			self.jumbo2016Count = resp;
		});
		console.log('self.jumbo2016Count... ', self.jumbo2016Count);
		self.jumbo2017();
	};

	self.jumbo2017 = function(){
		loanService.conforming2017().then(function(resp){
			self.jumbo2017Count = resp;
		});
		console.log('self.jumbo2017Count... ', self.jumbo2017Count);
	};

	self.conforming2016Months = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[3] = true;
		loanService.conforming2016Months().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.conforming2016MonthsData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue'
				}
			];
			console.log('self.conforming2016MonthsData ', self.conforming2016MonthsData);

			self.$apply();

		});
		self.conforming2017Months();
	};

	self.conforming2017Months = function () {
		// for(var i = 0 ; i < self.charts.length; i++){
		// 	self.charts[i] = false;
		// }
		// self.charts[3] = true;
		loanService.conforming2017Months().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.conforming2017MonthsData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue'
				}
			];
			console.log('self.conforming2017MonthsData ', self.conforming2017MonthsData);

			self.$apply();

		});
	};

	self.options.conforming2016MonthsData = {
		chart: {
			type: 'lineChart',
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 40,
				left: 65
			},
			x: function(d){ return d.x; },
			y: function(d){ return d.y; },
			xAxis: {
			},

			yAxis: {
				axisLabel: 'Total applications and funded application for every month',
				tickFormat: function(d){
					return d3.format('f')(d);
				}
			},
			useInteractiveGuideline: false
		}
	};


	self.jumbo2016Months = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[4] = true;
		loanService.jumbo2016Months().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.jumbo2016MonthsData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue'
				}
			];
			console.log('self.jumbo2016MonthsData ', self.jumbo2016MonthsData);

			self.$apply();

		});
		self.jumbo2017Months();
	};

	self.jumbo2017Months = function () {
		// for(var i = 0 ; i < self.charts.length; i++){
		// 	self.charts[i] = false;
		// }
		// self.charts[3] = true;
		loanService.jumbo2017Months().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			self.chartData.forEach(function(d) {
				lineAlpha.push({x: d['month'], y: d['total_applications']});
				lineBeta.push({x: d['month'] , y: d['funded_applications']});
			});
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.jumbo2017MonthsData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black'
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue'
				}
			];
			console.log('self.jumbo2017MonthsData ', self.jumbo2017MonthsData);

			self.$apply();

		});
	};

	self.options.jumbo2016MonthsData = {
		chart: {
			type: 'scatterChart',
			scatter: {
				onlyCircles: true
			},
			pointRange:[95,100],
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 40,
				left: 65
			},
			x: function(d){ return d.x; },
			y: function(d){ return d.y; },
			xAxis: {
			},

			yAxis: {
				axisLabel: 'Total applications and funded application for every month',
				tickFormat: function(d){
					return d3.format('f')(d);
				}
			},
			useInteractiveGuideline: false
		}
	};


	self.conforming2017States = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[5] = true;
		loanService.conforming2017States().then(function(resp){

			console.log('RESP ', resp)

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

            var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
				lineAlpha.push({x: i, y: self.chartData[i]['total_applications'], label: self.chartData[i]['state']});
				lineBeta.push({x: i , y: self.chartData[i]['funded_applications'], label: self.chartData[i]['state']});
				label.push(self.chartData[i]['state']);

            }
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.conforming2017StatesData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black',
                    type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'yellow',
                    type: 'line',
					yAxis: 1
				}
			];
			console.log('self.conforming2017StatesData ', self.conforming2017StatesData);

			self.$apply();

		});
		self.conforming2016States();
	};

	self.options.conforming2017StatesData = {
		chart: {
			type: 'multiChart',
			height: 700,
			margin : {
				top: 30,
				right: 60,
				bottom: 50,
				left: 70
			},
			color: d3.scale.category10().range(),
			//useInteractiveGuideline: true,
			duration: 500,
			xAxis: {
			},
			yAxis1: {
				tickFormat: function(d){
					return d3.format(',.1f')(d);
				},
				ticks :3
			},
			yAxis2: {
				tickFormat: function(d){
					return d3.format(',.1f')(d);
				},
				ticks :3
			},
			interpolate: 'bundle'
		}

	};

	self.conforming2016States = function () {

		loanService.conforming2016States().then(function(resp){

			console.log('RESP ', resp);

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
				lineAlpha.push({x: i, y: self.chartData[i]['total_applications'], label: self.chartData[i]['state']});
				lineBeta.push({x: i , y: self.chartData[i]['funded_applications'], label: self.chartData[i]['state']});
				label.push(self.chartData[i]['state']);

			}
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.conforming2016StatesData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'red',
					type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue',
					type: 'line',
					yAxis: 1
				}
			];
			console.log('self.conforming2016StatesData ', self.conforming2016StatesData);

			self.$apply();

		});
	};


	self.jumbo2017States = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[6] = true;
		loanService.jumbo2017States().then(function(resp){

			console.log('RESP ', resp);

			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
				lineAlpha.push({x: i, y: self.chartData[i]['total_applications'], label: self.chartData[i]['state']});
				lineBeta.push({x: i , y: self.chartData[i]['funded_applications'], label: self.chartData[i]['state']});
				label.push(self.chartData[i]['state']);

			}
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.jumbo2017StatesData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'black',
					type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'yellow',
					type: 'line',
					yAxis: 1
				}
			];
			console.log('self.jumbo2017StatesData ', self.jumbo2017StatesData);

			self.$apply();

		});
		self.jumbo2016States();
	};

	self.jumbo2016States = function () {
		loanService.jumbo2016States().then(function(resp){
			console.log('RESP ', resp);
			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
				lineAlpha.push({x: i, y: self.chartData[i]['total_applications'], label: self.chartData[i]['state']});
				lineBeta.push({x: i , y: self.chartData[i]['funded_applications'], label: self.chartData[i]['state']});
				label.push(self.chartData[i]['state']);

			}
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.jumbo2016StatesData = [
				{
					values: lineAlpha,
					key: 'Total applications',
					color: 'red',
					type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Funded applications',
					color: 'blue',
					type: 'line',
					yAxis: 1
				}
			];
			console.log('self.jumbo2016StatesData ', self.jumbo2016StatesData);

			self.$apply();

		});
	};


	self.daysRequired2016 = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[7] = true;
		loanService.daysRequired2016().then(function(resp){
			console.log('RESP ', resp);
			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
			    if(self.chartData[i]['days_required'] > 0) {
					lineBeta.push({x: new Date(self.chartData[i]['created_at']), y: self.chartData[i]['days_required']});
					lineAlpha.push({x: new Date(self.chartData[i]['created_at']) , y: self.chartData[i]['loan_amount']/1000});
                }
			}
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.daysRequired2016Data = [
				{
					values: lineAlpha,
					key: 'Loan Amount',
					color: 'red',
					type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Days Required to Fund',
					color: 'blue',
					type: 'line',
					yAxis: 1
				}
			];
			console.log('self.daysRequired2016Data ', self.daysRequired2016Data);

			self.$apply();

		});
	};

	self.options.daysRequired2016Data = {
		chart: {
			type: 'multiChart',
			height: 700,
			margin : {
				top: 30,
				right: 60,
				bottom: 50,
				left: 70
			},
			color: d3.scale.category10().range(),
			useInteractiveGuideline: true,
			duration: 500,
			xAxis: {
				axisLabel: 'Created Loan Date',
				tickFormat: function(d){
					return ( days[new Date(d).getDay()] + ' ' + d3.time.format('%m-%d-%y')(new Date(d)))
				}
			},
			yAxis1: {
				tickFormat: function(d){
					return d3.format(',.1f')(d);
				},
				ticks :3
			},
			yAxis2: {
				tickFormat: function(d){
					return d3.format(',.1f')(d);
				},
				ticks :3
			},
            interpolate: 'step'
		}

	};

	self.daysRequired2017 = function () {
		for(var i = 0 ; i < self.charts.length; i++){
			self.charts[i] = false;
		}
		self.charts[8] = true;
		loanService.daysRequired2017().then(function(resp){
			console.log('RESP ', resp);
			self.chartData = angular.copy(resp);
			var lineAlpha = [], lineBeta = [];

			var label = [];
			for (var i=0; i<self.chartData.length; i++ ) {
				if(self.chartData[i]['days_required'] > 0) {
					lineBeta.push({x: new Date(self.chartData[i]['created_at']), y: self.chartData[i]['days_required']});
					lineAlpha.push({x: new Date(self.chartData[i]['created_at']) , y: self.chartData[i]['loan_amount']/1000});
				}
			}
			console.log('line alpha ..', lineAlpha);
			console.log('line beta ..', lineBeta);

			self.daysRequired2017Data = [
				{
					values: lineAlpha,
					key: 'Loan Amount',
					color: 'red',
					type: 'bar',
					yAxis: 1
				},
				{
					values: lineBeta,
					key: 'Days Required to Fund',
					color: 'blue',
					type: 'line',
					yAxis: 1
				}
			];
			console.log('self.daysRequired2017Data ', self.daysRequired2017Data);

			self.$apply();

		});
	};

	self.rate2016();

}]);