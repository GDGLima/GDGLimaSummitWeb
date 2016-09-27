(function() {
  'use strict';

  angular
    .module('gdglimaSummit2016')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
