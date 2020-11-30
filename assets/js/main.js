//crezione variabili
var leftBarLinks = $('.left_bar div');
var rightBarLinks = $('.right_bar div');
var funzioni = $('.funzioni');
var planCost = $('.plan_cost');
var information = $('.information');
var helpSection = $('.help_section');
var hideClass = $('.hide_class');
//aggiunta classi agli elementi dell navbar
leftBarLinks.addClass('pding');
rightBarLinks.addClass('pding');

//hiding sections
funzioni.hide();
planCost.hide();
information.hide();
helpSection.hide();

// function enter/ leave mouse
/**
 * movimento dentro/fuori una sezione
 * @param {str} section 
 * @param {string} displaySection 
 */
function sectionAppear(section, displaySection) {
    $(section).mouseenter(function () { 
        displaySection.show();
    });
    $(section).mouseleave(function () { 
        displaySection.hide();
    });
}
//appears sections
sectionAppear($('#funzioni'), funzioni);
sectionAppear($('#abbonamenti'), planCost);
sectionAppear($('#info'), information);
sectionAppear($('#help'), helpSection);

//sottomenù che rimangono
sectionAppear(funzioni, funzioni);