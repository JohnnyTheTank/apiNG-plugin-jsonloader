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
                        jsonloaderFactory.getJsonData(request.path)
                            .success(function (_data) {

                                //if file content is array
                                if (_data.constructor !== Array) {
                                    return false;
                                }

                                var resultArray = [];

                                if (request.items < 0) {
                                    resultArray = _data;
                                } else {
                                    angular.forEach(_data, function (value, key) {
                                        if(key < request.items) {
                                            resultArray.push(value);
                                        }
                                    });
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
        jsonloaderFactory.getJsonData = function (_jsonPath) {
            return $http.get(_jsonPath);
        };
        return jsonloaderFactory;
    }]);