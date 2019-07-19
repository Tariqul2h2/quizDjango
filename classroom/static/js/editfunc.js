function quiz_edit() {

}

function question_edit(){	
	
	var item = $(this).parent();
	var qid = item.attr("id");
	item.load("/editq/"+qid+"/", null, function () { $("#save-form").submit(function () {question_save(qid)});
	});
	return false;
} 

function question_save(qid) {

	var item = $("form");
	var data = {
		question: item.find("#id_question").val(),
		choice1: item.find("#id_choice1").val(),
		choice2: item.find("#id_choice2").val(),
		choice3: item.find("#id_choice3").val(),
		choice4: item.find("#id_choice4").val(),
		answer:	item.find("#id_answer").val(),
	};

	$.ajax({type: 'get',
                url: "/editq/"+qid+"/?ajax",
                data: data,         
                success: function () {             
                    },   
    			failure: function() { 
        			alert('Got an error dude');
    		},         
      });
	
return false;
}  
