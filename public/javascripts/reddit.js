var myApp = angular.module("myApp",['angularMoment', 'ngAnimate']);
		myApp.controller('Controller', function($scope) {

		$scope.posts = [
			{title:"foo", author: "bar", image:"http://i.imgur.com/O6Y76rA.jpg", date: new Date(), description: "blah blah blah", comments: [], showcomm: false},
			{title:"foo", author: "bar", image:"http://i.imgur.com/O6Y76rA.jpg", date: new Date(), description: "blah blah blah", comments: [], showcomm: false},
		];

		$scope.sortOrder = '-arrows';
	

  	$scope.addPost = function(isValid){
  		if(isValid){
  		$scope.posts.push({title: $scope.title, author: $scope.author, image:$scope.image, date: new Date(), description: $scope.description, arrows: 0, comments:[], showcomm: false})
  		$scope.title= '';
  		$scope.author='';
  		$scope.image ='';
  		$scope.description ='';
  		} else {$scope.notValid = true}
		}

		$scope.plusOne = function(post){
			post.post.arrows += 1
		}

		$scope.minusOne = function(post){
			post.post.arrows -= 1
		}

		$scope.openForm = function(){
			$scope.clicked = true;
		}

		$scope.closeForm = function(isValid){
			if(isValid) {
				$scope.clicked = false;
			}
		}

		$scope.openAdd = function(post){
			post.showCommentForm = true;
		}

		$scope.closeAdd = function(post){
			post.showCommentForm = false;
		}

		$scope.addComment= function(post){
	 		post.post.comments.push(this.elem)
	 		console.log({object: post.post.comments})
	 		this.elem= {};
	 		post.post.showCommentForm = false;
		}

		$scope.showComments = function(post){
			if(post.showcomm == false){
				post.showcomm = true;
			} else if(post.showcomm == true) {
				post.showcomm = false;
			}
		}

		});