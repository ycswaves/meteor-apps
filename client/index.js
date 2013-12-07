Posts = new Meteor.Collection('posts');

Template.submitMsg.events({
		'click': function (evt){
			var msg = $('#msg');
			if(msg.val() != ""){
				var ts = Date.now() / 1000;
				Posts.insert({name: 'yi chenshu', message: msg.val(), time: ts});
				console.log('val:'+msg.val());
			} else {
				console.log('no value');
			}
		  }
	    });



Template.content.users = function () {
  return Meteor.users.find();
};

Template.posts.posts = function(){
	return Posts.find({}, {sort: {time: -1} });
};