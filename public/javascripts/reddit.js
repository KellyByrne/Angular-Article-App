var myApp = angular.module("myApp",['angularMoment', 'ngAnimate']);
		myApp.controller('Controller', function($scope) {

		$scope.posts = [
			{title:"My Little Sister", author: "Kelly Byrne", image:"https://s-media-cache-ak0.pinimg.com/236x/2b/13/d8/2b13d877d8f901800b6258b54018ee61.jpg", date: new Date(), description: "This is my beautiful little sister, Julia.", comments: [{username:'Dad', commentBody:'Great haircut, JujuB!'}, {username:'Julia', commentBody:'Thanks Dad!'}], arrows: 6, showcomm: false},
			{title:"Mom", author: "Kelly", image:"http://www.wigglesdogwigs.com/preview/yappyhour_bb1.jpg", date: new Date(), description: "My mom is the best!", comments: [{username:'Mom', commentBody:'Thanks Kelly! I love you!'}], arrows:4, showcomm: false},
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