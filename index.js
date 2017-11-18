'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  //put actual app id here

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'Welcome to Music Eight Ball. Ask me a question about your future.', 'Ask me a question about your future.');
    },
    'QuestionIntent': function() {
        //generate random number 0 through 7
        var index = Math.floor(Math.random() * 8);
        var songs = ['<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/dont-hold-your-breath.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/no-no-no.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-yes-yes.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/maybe.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-definitely.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-boy.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/try-again.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/hell-no.mp3" />'];
        var audio = songs[index];
        console.log('QuestionIntent');
        this.emit(':tell', audio);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Ask me a question about your future.', 'Ask me a question about your future.');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'Unhandled': function() {
        //copy of QuestionIntent as a fall-through case but this shouldn't ever really happen
        //generate random number 0 through 7
        var index = Math.floor(Math.random() * 8);
        var songs = ['<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/dont-hold-your-breath.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/no-no-no.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-yes-yes.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/maybe.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-definitely.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-boy.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/try-again.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/hell-no.mp3" />'];
        var audio = songs[index];
        console.log('Unhandled');
        this.emit(':tell', audio);
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
