var myApp = angular.module("myApp",[]);
		myApp.controller('Controller', function($scope) {
			$scope.posts = [ ];
			$scope.sortOrder = '-arrows';
			$scope.showcomm = false;
  	$scope.addPost = function(isValid){
  		if(isValid){
  		$scope.posts.push({title: $scope.title, author: $scope.author, image:$scope.image, date: new Date(), description: $scope.description, arrows: 0, comments:[]})
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

		$scope.openAdd = function(){
			$scope.addcomm = true;
		}

		$scope.closeAdd = function(){
			$scope.addcomm = false;
		}

		$scope.addComment= function(post){
	 		post.post.comments.push(this.elem)
	 		console.log({object: post.post.comments})
	 		this.elem= {};
		}

		$scope.showComments = function(){
			if($scope.showcomm == false){
				$scope.showcomm = true;
			} else if($scope.showcomm == true) {
				$scope.showcomm = false;
			}
		}

		});