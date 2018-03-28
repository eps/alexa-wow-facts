'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = '[APP_ID HERE]';

var SKILL_NAME = "World of Warcraft Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a world of warcraft fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "A Death Knight could Death Grip someone while standing on the Booty Bay boat, and that person would be sent flying across the continent, ending up below Alterac Mountains.",
    "Hunters would usually go out of mana after 3 shots, so they were mostly auto shooting in PvP. However in PvE, you could FD+drink/swap gear.",
    "Unfortunately, Moonkins would just go out of mana after 3 spells. They were mostly brought there for the /dance.",
    "Paladin blessings lasted 5 minutes. So by the time you buffed 40 raid members, the first ones you buffed would have 2 to 3 minutes left on their blessings. So they were essentially just rebuffing the raid all the time.",
    "Warlock Death Coil had 10 minute cooldown, and didn't cause any horror effect.",
    "All mobs in the heavy-silithid areas in Silithus were elite. Also many other mobs in the game had elite status removed.",
    "Warlocks were able to summon people into battlegrounds, including people who are higher or lower level than the level bracket.",
    "Cataclysm was in development before WotLK was released.",
    "If you lower the music settings in settings, and increase ambient sounds to max, you can go to Undercity throne room, and hear the dialogue between Arthas and his father before he killed him.",
    "In the tunnel before Undercity throne room, you can see rose petals that people threw on Arthas before he killed his father. You can also see blood on the floor as Terenas' bloodied crown fell.",
    "Death Knights and some other classes were planned to be released with original WoW, but they were saved for later.",
    "There is a huge smiley face below Karazhan.",
    "On TBC release, Karazhan gear was weaker than gear from heroic dungeons, and they had to completely reitemize almost all drops.",
    "Tauren is an anagram for Nature.",
    "US game clients have a randomize name option at the character creation screen, but EU clients don't have that option."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetWowFactIntent');
    },
    'GetWowFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
