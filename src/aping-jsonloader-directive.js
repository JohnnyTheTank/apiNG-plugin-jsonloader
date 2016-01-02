"use strict";

/**
 @author Jonathan Hornung (https://github.com/JohnnyTheTank)
 @url https://github.com/JohnnyTheTank/apiNG-plugin-jsonloader
 @licence MIT
 */

var jjtApingJsonloader = angular.module("jtt_aping_jsonloader", [])
    .directive('apingJsonloader', ['apingUtilityHelper', 'jsonloaderFactory', function (apingUtilityHelper, jsonloaderFactory) {
        return {
            require: '?aping',
            restrict: 'A',
            replace: 'false',
            link: function (scope, element, attrs, apingController) {

                var appSettings = apingController.getAppSettings();

                var requests = apingUtilityHelper.parseJsonFromAttributes(attrs.apingJsonloader, "jsonloader", appSettings);

                requests.forEach(function (request) {

                    if (request.path) {
                        //create requestObject for factory function call
                        var requestObject = {
                            path: request.path,
                        };

                        if (request.format && request.format.toLowerCase() != "jsonp") {
                            requestObject.format = "json";
                        } else {
                            requestObject.format = "jsonp";
                        }

                        if(request.callback) {
                            requestObject.callback = request.callback;
                        } else {
                            requestObject.callback = 'JSON_CALLBACK';
                        }

                        jsonloaderFactory.getJsonData(requestObject)
                            .success(function (_data) {
                                var resultArray = [];

                                if (_data.constructor !== Array) {
                                    resultArray.push(_data);
                                } else {

                                    if (request.items < 0) {
                                        resultArray = _data;
                                    } else {
                                        angular.forEach(_data, function (value, key) {
                                            if (key < request.items) {
                                                resultArray.push(value);
                                            }
                                        });
                                    }
                                }

                                apingController.concatToResults(resultArray);
                            });
                    }
                });
            }
        }
    }])
    .factory('jsonloaderFactory', ['$http', function ($http) {
        var jsonloaderFactory = {};
        jsonloaderFactory.getJsonData = function (_requestObject) {
            if (_requestObject.format == "jsonp") {

                return $http.jsonp(
                    _requestObject.path,
                    {
                        method: 'GET',
                        params: {callback: _requestObject.callback},
                    }
                );

            } else {
                return $http({
                    method: 'GET',
                    url: _requestObject.path
                });
            }
        };
        return jsonloaderFactory;
    }]);