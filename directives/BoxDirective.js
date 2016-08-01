/**
 * Created by Дмитрий on 30.07.2016.
 */
app.directive('boxView', function () {
  return {

    restrict: 'E',
    templateUrl: 'directives/boxTempl.html',
    controller: function (boxService) {
      this.a = boxService.values;
      this.clicked =function(item){
        alert(item);
      };
      this.search='';
    },
    controllerAs: "boxCtrl"
  }
});