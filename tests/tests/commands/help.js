let assert = require('./../../helpers/assert'),
    codes = require('./../../../utils/codes'),
    makeMessage = require('./../../helpers/message'),
    test = require('./../../helpers/testBase');

test('help command', function(testBase){

    it('should accept a help command', async function() {

        // mnimic structure of a valid discord, with invalid command
        let message = makeMessage(testBase.client.user.id);
        message.content = 'help';

        let result = await testBase.client.raiseMessageEvent(message);
        assert.equal(codes.MESSAGE_ACCEPTED, result);
    });

});