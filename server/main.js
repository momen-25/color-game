import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

Colors = new Mongo.Collection('colors');
Score = new Mongo.Collection('score');


if (Colors.find().count() === 0){
	Colors.insert({
	colors : ["red","yellow","blue","green","purple","orange"]	 
                 }) 
    }
});



