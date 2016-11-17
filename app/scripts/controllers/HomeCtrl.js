(function() {
   function HomeCtrl() {
     this.heroTitle = "Welcome to SoVal!";
   }

   angular
      .module('soVal')
      .controller('HomeCtrl', HomeCtrl);
})();
