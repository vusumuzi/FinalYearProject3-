var mongoose = require('mongoose');

//classes
var ClassSchema = mongoose.Schema({
	title: {
		type:String
	},
	description: {
		type:String
	},
	instructor: {
		type:String
	},
	lessons: [{ // array of objects
		lesson_number:{type:Number},
		lesson_title:{type:String},
		lesson_body:{type:String}
	}]

});

var Class = module.exports = mongoose.model('Class', ClassSchema);

//functions to fetch all classes
module.exports.getClasses = function(callback, limit){
	Class.find(callback).limit(limit);
}

// Fetch single class
module.exports.getClassById = function(id, callback){
	Class.findById(id, callback);
}

    //Add Lesson
module.exports.addLesson = function(id, callback){
    class_id = info['class_id'];
    lesson_number = info['lesson_number'];
    lesson_title = info['lesson_title'];
    lesson_body = info['lesson_body'];
    
    Class.findByIdAndUpdate(
        class_id,
        {$push:{"lessons" :{lesson_number: lesson_number, lesson_title: lesson_title
                           , lesson_body: lesson_body}}},
        {safe: true, upsert: true},
        callback); 
}


    