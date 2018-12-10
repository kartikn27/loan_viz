/**
 Created by $(USER) on $(DATE)
 **/


betterLoans.factory('loanService',['$q', '$http' ,function($q, $http){

    return{


        bikeRides : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/start_station_rides.json' ).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        userType : function(url){
            return $http.get(url).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        zipcodeRidesHours : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/zip_rides_hours.json' ).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        dayRides : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/day_rides.json' ).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        dateRides : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/date_rides.json' ).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        hourRides : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/rides_per_hour.json' ).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        subscriberRides : function(obj){
            return $http.get(obj).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        customerRides : function(obj){
            return $http.get(obj).then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        popularStations : function(){

            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/popular_routes.json').then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        zipCodeRides : function(){

            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/sub_bike_count.json').then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        dataInsights : function(){
            return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files/master/main.json').then(function (response) {
                if (response !== undefined && response.data !== undefined) {
                    return response.data;
                }
                else {
                    return $q.reject(response);
                }
            });
        },
        /// LOAN CHARTS SERVICE ///
		rate2016 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/rate_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		rate2017 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/rate_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		type2016 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/type_2016_count.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		type2017 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/type_2017_count.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2016 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_conversion_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2017 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_conversion_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2017 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_conversion_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2016 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_conversion_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2016Months : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_2016_months.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2017Months : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_2017_months.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2016Months : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_2016_months.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2017Months : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_2017_months.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2017States : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_state_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		conforming2016States : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/conforming_state_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2017States : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_state_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		jumbo2016States : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/jumbo_state_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		daysRequired2016 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/days_required_2017.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		},
		daysRequired2017 : function(){
			return $http.get('https://raw.githubusercontent.com/kartikn27/raw_files_loans/master/days_required_2016.json').then(function (response) {
				if (response !== undefined && response.data !== undefined) {
					return response.data;
				}
				else {
					return $q.reject(response);
				}
			});
		}



    }
}]);