jQuery(document).ready(function(){
  jQuery("#formOne").submit(function(event){
    var adjective1 = jQuery("input#adjective1").val();
    var adjective2 = jQuery("input#adjective2").val();
    var verb1 = jQuery("input#verb1").val();
    var exclamation1 = jQuery("input#exclamation1").val();
    var bodyPart1 = jQuery("input#bodyPart1").val();
    var bodyPart2 = jQuery("input#bodyPart2").val();
    var nounPlural1 = jQuery("input#nounPlural1").val();
    var nounPlural2 = jQuery("input#nounPlural2").val();
    var nameLast1 = jQuery("input#nameLast1").val();
    var noun1 = jQuery("input#noun1").val();
    var noun2 = jQuery("input#noun2").val();
    var noun3 = jQuery("input#noun3").val();
    var noun4 = jQuery("input#noun4").val();
    var noun5 = jQuery("input#noun5").val();
    var noun6 = jQuery("input#noun6").val();
    var noun7 = jQuery("input#noun7").val();
    var noun8 = jQuery("input#noun8").val();
    var noun9 = jQuery("input#noun9").val();

    jQuery(".adjective1").text(adjective1);
    jQuery(".adjective2").text(adjective2);
    jQuery(".verb1").text(verb1);
    jQuery(".exclamation1").text(exclamation1);
    jQuery(".bodyPart1").text(bodyPart1);
    jQuery(".bodyPart2").text(bodyPart2);
    jQuery(".nounPlural1").text(nounPlural1);
    jQuery(".nounPlural2").text(nounPlural2);
    jQuery(".nameLast1").text(nameLast1);
    jQuery(".noun1").text(noun1);
    jQuery(".noun2").text(noun2);
    jQuery(".noun3").text(noun3);
    jQuery(".noun4").text(noun4);
    jQuery(".noun5").text(noun5);
    jQuery(".noun6").text(noun6);
    jQuery(".noun7").text(noun7);
    jQuery(".noun8").text(noun8);
    jQuery(".noun9").text(noun9);

    jQuery("#story").show();

    event.preventDefault();
  });
});