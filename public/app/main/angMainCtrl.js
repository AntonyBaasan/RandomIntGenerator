/**
 * Created by AntonyBaasan on 14-11-07.
 *
 * Angular main page controller
 */

angular.module('app').controller('angMainCtrl', function($scope, angGeneratedResource){

    //Generate button action
    $scope.generate = function(from, to){
        $scope.generatedResult = undefined;
        $scope.error = undefined;

        //API call
        angGeneratedResource.get({"from":from, "to":to }, function(genNumber){
            if(genNumber.statusCode == 403)
                $scope.generatedResult = genNumber.reason;

            $scope.generatedResult = genNumber;
        }, function(error){
            $scope.error = error.data.reason;
        });
    };

    //ngClip uses for copy
    $scope.getTextToCopy = function() {
        return $scope.result;
    }
})
