function skillsMember() {
  return {
    name: 'skillsMember',
    template: '<div>{{member.skills}}</div>',
    controller: function($scope) {
      $scope.member = {
        skills: ['JS', 'CSS', 'HTML']
      };
    }
  }
}