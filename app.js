angular.module("PostApp",['ui.router'])
		.config([
			'$stateProvider',
			'$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

			  $stateProvider
			    .state('home', {
			      url: '/home',
			      templateUrl: '/home.html',
			      controller: 'MyCtrl'
			    });

			  $urlRouterProvider.otherwise('home');
			}])

	   .factory('posts',[function(){
	   	var san = {posts :[
	   		{title:"post1", upvotes:0},
	   		{title:"post2", upvotes:5},
	   		{title:"post3", upvotes:4},
	   		{title:"post4", upvotes:5},
	   		{title:"post5", upvotes:2},
	   		]};
	   		return san;	
	   }])

	   .controller('MyCtrl',[
	   	'$scope', 'posts', function($scope, posts){
	   		$scope.test = "hello world";
	   		$scope.posts = posts.posts
	  
	   		$scope.addPost = function(){
	   			if(!$scope.title || $scope.title === ''){ return; }
	   			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
	   			$scope.title = '';
	   			$scope.link = '';
	   		};

	   		$scope.incVotes = function(post){
	   			post.upvotes +=1;
	   		}
	   	}]);
