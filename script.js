
navigator.requestMIDIAccess().then(onMIDISuccess,onMIDIFailure);
var midi = null;
var inputs = [];
var outputs = [];
var output = null;
var chs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var ch = 1;

var main = document.querySelector('#main');
// DocumentFragment
var fragment = document.createDocumentFragment();
for(var i=0; i < 10; i++ ){
    var container = document.createElement('div');
    container.classList.add('slide-container');
    var disp = document.createElement('div');
    disp.classList.add('display');
    disp.id =('display' + i);
    container.appendChild(disp);

    var slider = document.createElement('div');
    slider.classList.add('slider');
    slider.id =('slider' + i);
    container.appendChild(slider);

    fragment.appendChild(container);
}
// 最後に追加！
main.appendChild(fragment);


function onMIDISuccess(m){
  midi = m;
  var it = midi.inputs.values();
  for(var o = it.next(); !o.done; o = it.next()){
    inputs.push(o.value);
  }
  var ot = midi.outputs.values();
  for(var o = ot.next(); !o.done; o = ot.next()){
    outputs.push(o.value);
  }
  
  output = outputs[0];
  outputs.forEach(function(element, index) {
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(element.name));
    option.setAttribute('value', index);
    document.getElementById('select-midi-output-device').appendChild(option);
  });
  document.getElementById('select-midi-output-device').onchange = function() {
    output = outputs[this.value];
  };  
  for(var cnt=0;cnt < inputs.length;cnt++){
    inputs[cnt].onmidimessage = onMIDIEvent;
  }
}

chs.forEach(function(value, index) {
  var option = document.createElement('option');
  option.appendChild(document.createTextNode(value));
  option.setAttribute('value', index);
  document.getElementById('select-midi-output-ch').appendChild(option);
});
document.getElementById('select-midi-output-ch').onchange = function() {
  ch = chs[this.value];
};

function onMIDIEvent(e){
  if(e.data[2] != 0){ 
    // なにかをうけとったときの処理
    // console.log(e.data[2]);
    // console.log(e.data[1]);
  }
}

function onMIDIFailure(){
  console.log("munen!");
};

function sendCC(cc, val){
  // if(outputs.length > 0){
  //   outputs[0].send([0xB0, cc, val]);
  // }
  if(output){
    output.send([0xB0 + ch-1, cc, val]);
  }
}

var basicSlider = {
  start: [ 0 ],
  range: {
    'min': [  0 ],
    'max': [ 127 ]
  },
  step: 1,
  connect: "lower",
};

// var cc0 = document.getElementById('slider0');
// noUiSlider.create(cc0, basicSlider);
// cc0.noUiSlider.on('slide', function(){
//   a = parseInt(cc0.noUiSlider.get());
//   document.getElementById("display0").innerHTML = a;
//   sendCC(0, a); 
// });


// var cc = [];
// for(var i=0; i<10; i++ ){
//   var e = document.getElementById('slider' + i);
//   cc.push(e);

//   noUiSlider.create(cc[i], basicSlider);

//   cc[i].noUiSlider.on('slide', function(){
//     a = parseInt(cc[i].noUiSlider.get());
//     document.getElementById("display" + i).innerHTML = a;
//     sendCC(i, a);
//     console.log(a);
//   });
// }




var cc = [];
for(var i=0; i<10; i++ ){
  cc.push(document.getElementById('slider' + i));
  noUiSlider.create(cc[i], basicSlider);
}


cc[0].noUiSlider.on('slide', function(){sliderMove(0)});
cc[1].noUiSlider.on('slide', function(){sliderMove(1)});
cc[2].noUiSlider.on('slide', function(){sliderMove(2)});
cc[3].noUiSlider.on('slide', function(){sliderMove(3)});
cc[4].noUiSlider.on('slide', function(){sliderMove(4)});
cc[5].noUiSlider.on('slide', function(){sliderMove(5)});
cc[6].noUiSlider.on('slide', function(){sliderMove(6)});
cc[7].noUiSlider.on('slide', function(){sliderMove(7)});
cc[8].noUiSlider.on('slide', function(){sliderMove(8)});
cc[9].noUiSlider.on('slide', function(){sliderMove(9)});


function sliderMove(num){
  var a = parseInt(cc[num].noUiSlider.get());
  document.getElementById("display" + num).innerHTML = a;
  sendCC(num, a);
  console.log(a);
}
