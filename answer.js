$(document).ready(function(){
    var HEIGHT = $(window).height();
    var timer = setInterval(wave, 5300);
       console.log("heeaksnfdng")
  function wave (){
      $("#div1").animate({top: HEIGHT}, "slow", function(){
          $("#div2").animate({top: HEIGHT}, "slow", function(){
              $("#div3").animate({top: HEIGHT}, "slow", function(){
                  $("#div4").animate({top: HEIGHT}, "slow", function(){
                      $("#div5").animate({top: HEIGHT}, "slow", function(){
                          $("#div6").animate({top: HEIGHT}, "slow", function(){
                              $("#div7").animate({top: HEIGHT}, "slow", function(){
                                  $("#div8").animate({top: HEIGHT}, "slow", function(){
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
      $("#div1").animate({top: 0}, "slow", function(){
          $("#div2").animate({top: 0}, "slow", function(){
              $("#div3").animate({top: 0}, "slow", function(){
                  $("#div4").animate({top: 0}, "slow", function(){
                      $("#div5").animate({top: 0}, "slow", function(){
                          $("#div6").animate({top: 0}, "slow", function(){
                              $("#div7").animate({top: 0}, "slow", function(){
                                  $("#div8").animate({top: 0}, "slow", function(){
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  };
  });