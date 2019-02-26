$(document).ready(function(){
    $('.select-dropdown').val(" ");
    const $next = $('.next');
    const $prev = $('.prev');
    const $reset = $('.reset');

    let stage = 0;

    var maleWeight = []; 
    var femaleWeight = [];

    for(var i=0;i<8;i++){
      maleWeight[i] = 100+i*20;
    }

    for(var i=0;i<8;i++){
      femaleWeight[i] = 100+i*20;
    }

    let maleAlcoholArray = [
      [".04", ".03", ".02", ".02", ".02", ".02", ".02", ".02"],
      [".08", ".06", ".05", ".05", ".04", ".04", ".03", ".03"],
      [".11", ".09", ".08", ".07", ".06", ".06", ".05", ".05"],
      [".15", ".12", ".11", ".09", ".08", ".08", ".07", ".06"],
      [".19", ".16", ".13", ".12", ".11", ".09", ".09", ".08"],
      [".23", ".19", ".16", ".14", ".13", ".11", ".10", ".09"],
      [".26", ".22", ".19", ".16", ".15", ".13", ".12", ".11"],
      [".30", ".25", ".21", ".19", ".17", ".15", ".14", ".13"],
      [".34", ".28", ".24", ".21", ".19", ".17", ".15", ".14"],
      ["", ".31", ".27", ".23", ".21", ".19", ".17", ".16"],
    ];

    let femaleAlcoholArray = [
      [".05", ".04", ".03", ".03", ".03", ".02", ".02", ".02"],
      [".09", ".08", ".07", ".06", ".05", ".05", ".04", ".04"],
      [".14", ".11", ".10", ".09", ".08", ".07", ".06", ".06"],
      [".18", ".15", ".13", ".11", ".10", ".09", ".08", ".08"],
      [".23", ".19", ".16", ".14", ".13", ".11", ".10", ".09"],
      [".27", ".23", ".19", ".17", ".15", ".14", ".12", ".11"],
      [".32", ".27", ".23", ".20", ".18", ".16", ".14", ".13"],
      [".36", ".30", ".26", ".23", ".20", ".18", ".17", ".15"],
      [".41", ".34", ".29", ".26", ".23", ".20", ".19", ".17"],
      [".45", ".38", ".32", ".28", ".25", ".23", ".21", ""],
    ];

    let drinkAmount = 0, sex = "", weight = 0, bacAmount = 0;
    let leftStart = -75.4;
    let rightEnd = -11.4;
    let ratePercent = (rightEnd - leftStart)/20;

    $next.click(function(){
      stage++;
      loadStage();
      navButtons();
    })
    $prev.click(function(){
      stage--;
      loadStage();        
      navButtons();
    })

    $reset.click(function(){
      $('.select-dropdown').val(" ");
    })

    $('.select-dropdown').change(function(){
      sex = $('#sex option:selected').text().split(' ').join('').replace(/[\r\n]/g, '');
      weight = $('#weight option:selected').text().split(' ').join('').replace(/[\r\n]/g, '');
      if(weight % 20 != 0) weight -= 10;        
      drinkAmount = $('#drink_amount option:selected').text().split(' ').join('').replace(/[\r\n]/g, '');
      bacAmount = calculateBac(drinkAmount, sex, weight);
      console.log("weight:"+weight, "drinkAmount: "+ drinkAmount, "bacAmount: "+bacAmount);
    })

    function loadStage(){
      console.log(stage);
      $(`.step-${stage}`).removeClass('d-none').siblings('.col-12').addClass('d-none');
    }

    function navButtons(){
      console.log("left: "+bacAmount);
      if(stage < 1){
        $prev.addClass('d-none');
      } else if(stage > 2){
        $next.addClass('d-none');
        if(sex){
          if(sex == "Male") {
            $('#male').removeClass('d-none');
            $('#female').addClass('d-none');
          }
          else if(sex=="Female"){
            $('#male').addClass('d-none');
            $('#female').removeClass('d-none');
          }
        }
      } else {
        $next.removeClass('d-none');
        $prev.removeClass('d-none');
        if(stage == 2){
          if(bacAmount){
            $('#vline-yours').removeClass('d-none');
            $('#vline-yours').css({'margin-left': bacAmount+'%'});              
            $('#yours-title').removeClass('d-none');
            $('#amount-drink').text(drinkAmount+' drinks');
          }            
        }
      }
    }

    function calculateBac(dAmount, nSex, nWeight) {
      var bac = 0;
      if(nSex){
        console.log("Sex:", nSex);
        if(nSex == "Male") {            
          bac = maleAlcoholArray[dAmount-1][maleWeight.indexOf(parseInt(nWeight))];
          console.log("array:", dAmount, maleWeight, nWeight);
        }
        else{
          bac = femaleAlcoholArray[dAmount-1][maleWeight.indexOf(parseInt(nWeight))];
        }
      }
      if(bac) {
        console.log("BAC: "+ bac);
        bac = 100*bac*ratePercent+leftStart;
        if(bac > rightEnd) bac = rightEnd;
        if(bac < leftStart) bac = leftStart;
      }
      else{
        
      }          
      return bac;
    }

  })