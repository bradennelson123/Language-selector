$(document).ready(function() {
  let swift=0
  let java=0
  let javascript=0
  let ruby=0
  $(".q1 input").click(function() {
    
  });
  $("#lang-questions").submit(function(event) {
    event.preventDefault();
    const q1  = $('.q1 input:checked').val();
    const q2  = $('.q2 input:checked').val();
    const q3  = $('.q3 input:checked').val();
    const q4  = $('.q4 input:checked').val();
    const q5  = $('.q5 input:checked').val();
    function langEval(question) {
      if (question === 'javascript') { 
        javascript++
      }
      else if (question === 'ruby') { 
        ruby++
      }
      else if (question === 'java') { 
        java++
      }
      else if (question === 'swift') { 
        swift++
      }
    }
    langEval(q1)
    langEval(q2)
    langEval(q3)
    langEval(q4)
    langEval(q5)
    
    if (swift > ruby && swift > java && swift > javascript) {
      console.log('swift wins')
      $(".page-swift").show();
      $(".page1").hide();
    }
    else if (ruby > swift && ruby > java && ruby > javascript){
      console.log('ruby wins')
      $(".page-ruby").show();
      $(".page1").hide();
    }
    else if (java > swift && java > ruby && java > javascript){
      console.log('java wins')
      $(".page-java").show();
      $(".page1").hide();

    }
    else if (javascript > swift && javascript > ruby && javascript > java){
      console.log('javascript wins')
      $(".page-javascript").show(); 
      $(".page1").hide(); 
    }
    $(".click").click(function() {
    $(".developer-showing").toggle();
    
    });

    console.log(swift, ruby, java, javascript);
  });
})
