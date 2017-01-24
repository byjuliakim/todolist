const ohHey = "Hello World";
console.log(ohHey);

var todoApp= {}; 

var tasks = [];

$('.add').on('click', function(){
	todoApp.inputItem = $(this).prev().val();
	console.log(todoApp.inputItem);
	
	todoApp.datakey = Date.now();
	console.log(todoApp.datakey);
	
	todoApp.day = $(this).parent().prev().text();
	console.log(todoApp.day);

	addTask(todoApp.datakey, todoApp.inputItem, todoApp.day);
});


//adding tasks
var addTask = function(datakey, item, day){
	var $userInput = $('<p>').text(item);
	var $ckbox = $('<p>').addClass('fa fa-square');
	var $itemBox = $('<div>').addClass('todoItem').append($ckbox, $userInput);
	$('.' + day).append($itemBox);
	$('.item').val("");
	tasks.push({datakey:datakey, item:item, day:day});
	localStorage['tasks'] = JSON.stringify(tasks);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

var clearAll = function(){
	tasks = [];
	
	// From the view
	$('.todoItem').remove();
	
	// In storage
	localStorage.clear();
};

$('.clearAll').on('click',function(){
	clearAll();
});

var oldTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
for (var i = oldTasks.length - 1; i >= 0; i--) {
	addTask(oldTasks[i].datakey, oldTasks[i].item, oldTasks[i].day);
};

