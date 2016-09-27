var pop;
(function() {
  'use strict';

  angular
    .module('gdglimaSummit2016')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $interval) {
    var vm = this;


    //-------countdown-------

    //fecha de lanzamiento 22/10/2016


    vm.countdown=[{type:'Días',amount:0},
                  {type:'Horas',amount:1},
                  {type:'Minutos',amount:15},
                  {type:'Segundos',amount:40}];

    //calcular días faltantes
    function calcTime(){
      var from = new Date();
      var to = new Date("10/22/2016");
      var timeDiff = Math.abs(to.getTime() - from.getTime());
      
      //días
      vm.countdown[0].amount = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      vm.countdown[1].amount = 23 - from.getHours();
      vm.countdown[2].amount = 60 - from.getMinutes();
      vm.countdown[3].amount = 60 - from.getSeconds();
      
    }
    calcTime();

    //actualizar tiempo en el cliente  
    function updateTime(){

      //segundos
      if(vm.countdown[3].amount<=0){
        vm.countdown[3].amount=59;
          //minutos          
          if(vm.countdown[2].amount<=0){
            vm.countdown[2].amount=59;
            //horas            
            if(vm.countdown[1].amount<=0){
              vm.countdown[1].amount=23;
                //días
                vm.countdown[0].amount--;
            }else 
              vm.countdown[1].amount--;

          }else
           vm.countdown[2].amount--;

      }else
        vm.countdown[3].amount--;


    }

    $interval(updateTime,1000);
    //-----/countdown-------


    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1474845505675;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
