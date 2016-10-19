// JavaScript Document

var vSet;
var Closetimer;

function dropDownActive(){	
          Closetimer = $('._container').attr('Closetimer');

		   $("._dropdownContain_00, ._dropdownContain_01, ._dropdownContain_03").html("<p>Id mea adhuc praesent, usu et possim maiorum. Ex velit aeque iisque sea, civibus periculis ut nam, volutpat assueverit ut qui. Dico definitionem in ius, tibique petentium no qui, duo eu case qualisque posidonium. Meis sententiae ad usu, et odio duis debet pri. Vim dicat ludus omnium ut, nullam dolorem mea no. Ut his maiestatis referrentur, no ludus salutatus accommodare usu, mundi errem omittam his eu.</p>");
		   
		   $("._dropdownContain_02, ._dropdownContain_04").html("<p>Id mea adhuc praesent, usu et possim maiorum. Ex velit aeque iisque sea, civibus periculis ut nam, volutpat assueverit ut qui. Dico definitionem in ius, tibique petentium no qui, duo eu case qualisque posidonium. Meis sententiae ad usu, et odio duis debet pri. Vim dicat ludus omnium ut, nullam dolorem mea no. Ut his maiestatis referrentur, no ludus salutatus accommodare usu, mundi errem omittam his eu. Id mea adhuc praesent, usu et possim maiorum. Ex velit aeque iisque sea, civibus periculis ut nam, volutpat assueverit ut qui. Dico definitionem in ius, tibique petentium no qui, duo eu case qualisque posidonium. Meis sententiae ad usu, et odio duis debet pri. Vim dicat ludus omnium ut, nullam dolorem mea no. Ut his maiestatis referrentur, no ludus salutatus accommodare usu, mundi errem omittam his eu. Id mea adhuc praesent, usu et possim maiorum. Ex velit aeque iisque sea, civibus periculis ut nam, volutpat assueverit ut qui. Dico definitionem in ius, tibique petentium no qui, duo eu case qualisque posidonium. Meis sententiae ad usu, et odio duis debet pri. Vim dicat ludus omnium ut, nullam dolorem mea no. Ut his maiestatis referrentur, no ludus salutatus accommodare usu, mundi errem omittam his eu.</p>");
	
	$("._dropdownBtn_00, ._dropdownBtn_01, ._dropdownBtn_02, ._dropdownBtn_03, ._dropdownBtn_04").mouseenter(function(){$(this).css({background:"#CCCCCC"});})
	$("._dropdownBtn_00, ._dropdownBtn_01, ._dropdownBtn_02, ._dropdownBtn_03, ._dropdownBtn_04").mouseleave(function(){$(this).css({background:"#FFFFFF"});})
	
	$("._dropdownBtn_00").click(function(){vSet = '00'; dropDownOpen(); setTimeout(function() {vSet = '00'; dropDownClose();}, Closetimer);})
	$("._dropdownBtn_01").click(function(){vSet = '01'; dropDownOpen(); setTimeout(function() {vSet = '01';  dropDownClose();},  Closetimer);})
	$("._dropdownBtn_02").click(function(){vSet = '02'; dropDownOpen();  setTimeout(function() {vSet = '02';  dropDownClose();},  Closetimer);})
	$("._dropdownBtn_03").click(function(){vSet = '03'; dropDownOpen(); setTimeout(function() {vSet = '03';  dropDownClose();},   Closetimer);})
	$("._dropdownBtn_04").click(function(){vSet = '04'; dropDownOpen(); setTimeout(function() {vSet = '04';  dropDownClose();},   Closetimer);})
	
	function dropDownOpen(){
		var heightSet = $("._dropdownContain_"+ vSet + ' p').height(); 
	   $("._dropdownContain_" + vSet).animate({height: heightSet + 25  + "px"});
	}
	
	function dropDownClose(){$("._dropdownContain_" + vSet).animate({height: "0px"});}
}






