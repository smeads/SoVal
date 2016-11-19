angular
  .module("soVal")
  .controller("ValuationCtrl", function($scope) {

  $scope.prefered = true;

  $scope.participating = false;
  $scope.participatingCap = false;

  $scope.liquidationPrefMult = "";

  $scope.cumulativeDiv = "";
  $scope.participatingCapMult = "";
  $scope.cumulativeDivPerc = "";

  $scope.commonSharesFD = "";
  $scope.preferedShares = "";

  $scope.preMoney = "";
  $scope.postMoney = "";
  $scope.hypotheticalExit = "";

  $scope.investedCap = $scope.postMoney - $scope.preMoney;
  $scope.commonSharePercent = "";
  $scope.preferedSharePercent = "";

  $scope.commonValue = "";
  $scope.preferedValue = "";

  $scope.calc = function() {
    $scope.commonValue = $scope.hypotheticalExit - ($scope.investedCap * $scope.liquidationPrefMult);
    // return$scope.commonValue;
  }
$scope.alert1 = function() {
  alert("HIHIHI");
}

  });
