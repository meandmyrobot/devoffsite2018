'use strict';

// Constants
const ReasonOneRecommendationFulfillment = require('./reasonone-recommendation-fulfillment');
const REASONONE_RECOMMENDATION_INTENT = 'reasonone.recommendation';

/**
 * Constructor for ReasonOneAgent object
 * Maps the actions from Google to fulfillment handlers
 *
 * @param {Object} assistant Instance of 'actions-on-google' assistant.
 */
const ReasonOneAgent = class {
    constructor (assistant) {

        /**
         * Save a reference to the 'actions-on-google' assistant.
         * @type {Object}
         */
        this.assistant = assistant;
    }

    /**
     * Creates fulfillment handler from action and executes.
     * @return {void}
     */
    broadcastResponseFromIntent () {
        let intent = this.assistant.getIntent();

        switch (intent) {
            case REASONONE_RECOMMENDATION_INTENT:
                {
                    let reasonOneRecommendationFulfillment = new ReasonOneRecommendationFulfillment(this.assistant);
                    reasonOneRecommendationFulfillment.provideRecommendation();
                }
                break;

            default:
                this.assistant.tell('Sorry, I\'ve no idea what you\'re talking about');
        }
    }
};

module.exports = ReasonOneAgent;