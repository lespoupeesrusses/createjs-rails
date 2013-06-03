// 
// Encoding: UTF-8
//
// jslint browser: true
// global  $
//
// CreateJS plugin
// by Henri Bergius
//
// repo:    https://github.com/bergie/create
// website: http://createjs.org/
//
//= require jquery-1.8.min
//= require jquery-ui-1.8.18.min
//= require create/deps/underscore-min
//= require create/deps/backbone-min
//= require create/deps/vie-min
//= require create/deps/rangy-core-1.2.3
//= require create/deps/hallo-min
//= require create/create-min
//

function setConfirmUnloadPage(on) {
    window.onbeforeunload = (on) ? unloadMessage : null;
}
function unloadMessage() {
     return 'You have entered new data on this page. If you navigate away from this page without first saving your data, the changes will be lost.'
}
$(document).ready(function() { 
    $('body article').bind('midgardeditabledisable', function (event, data) {
        var logo = $('.create-ui-logo #create-ui-toggle-toolbar');
        if (undefined === logo.attr('href')) {
            logo.attr('href', 'http://' + window.location.host);
        }
        /*
        logo.click(function (event) {
            $('.create-ui-toolbar-wrapper').css('opacity', '1');
            $('.create-ui-toolbar-wrapper').css('display', 'block');
            console.log($('.create-ui-toolbar-wrapper').css('opacity'));
        });
        */
    });
    /* 
     * On check les modifications sur les champs des formulaires pour activer le blocage de la page
     * On le désactive au clic sur le bouton enregistrer
     * Attention : les champs hidden ou disabled ne sont pas concernés
     */
    $('body article').bind('midgardeditableenable ', function(event, data) {
        if (!$(this).hasClass('ignore-validate') && !$(this).hasClass('filter')) {
            setConfirmUnloadPage(true); 
        }
    }); 
    $('#midgardcreate-save').live('click', function(event, data) {
        if (!$(this).hasClass('ui-state-class')) {
            setConfirmUnloadPage(false);
        }
    }); 
    $('body article').bind('midgardeditabledisable', function(event, data) {
        setConfirmUnloadPage(false); 
        $('[property]').removeAttr('contenteditable');
    }); 
}); 