Brello.factory('BoardService', ['Restangular', '$state', '$rootScope', function (Restangular, $state, $rootScope) {
	var BoardService = {};

	BoardService.create = function (params) {
		return Restangular.all('boards').post({
			board: params
		}).then(
			function success(board) {
				console.log(board);
				angular.element('#newBoardModal').modal('hide');
				$rootScope.$broadcast('board.created', board);
				return board;
			}
		);
	};

	BoardService.find = function (id) {
		return Restangular.one('boards', id).get();
	};

	BoardService.all = function () {
		return Restangular.all('boards').getList().$object;
	};

	return BoardService;
}]);
