/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

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
        //generate random number 0 through 7
        var index = Math.floor(Math.random() * 8);
        var songs = ['<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/dont-hold-your-breath.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/no-no-no.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-yes-yes.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/maybe.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-definitely.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/yes-boy.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/try-again.mp3" />', '<audio src="https://s3.amazonaws.com/magic-eight-ball-songs/hell-no.mp3" />'];
        var audio = songs[index];
        console.log('QuestionIntent');
        this.emit(':tell', audio);
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
