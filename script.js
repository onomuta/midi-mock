navigator.requestMIDIAccess().then(onMIDISuccess,onMIDIFailure);
var midi = null;
var inputs = [];
var outputs = [];
var output = null;
var chs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var ch = 1;

/////////////////////////////////////////////////////////////////////////////
var main = document.querySelector('#main');
var fragment = document.createDocumentFragment();
for(var i=0; i < 128; i++ ){
  var container = document.createElement('div');
  container.classList.add('slide-container');
  
  var label = document.createElement('div');
  label.classList.add('label');
  label.id =('label' + i);
  label.innerHTML = i;
  container.appendChild(label);

  var disp = document.createElement('div');
  disp.classList.add('display');
  disp.id =('display' + i);
  disp.innerHTML = 0;
  container.appendChild(disp);

  var slider = document.createElement('div');
  slider.classList.add('slider');
  slider.id =('slider' + i);
  container.appendChild(slider);

  fragment.appendChild(container);
}
// 最後に追加！
main.appendChild(fragment);
/////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////
var sliderOption = {
  start: [ 0 ],
  range: {
    'min': [  0 ],
    'max': [ 127 ]
  },
  step: 1,
  connect: "lower",
};

var cc = [];
for(var i=0; i<128; i++ ){
  cc.push(document.getElementById('slider' + i));
  noUiSlider.create(cc[i], sliderOption);
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
cc[10].noUiSlider.on('slide', function(){sliderMove(10)});
cc[11].noUiSlider.on('slide', function(){sliderMove(11)});
cc[12].noUiSlider.on('slide', function(){sliderMove(12)});
cc[13].noUiSlider.on('slide', function(){sliderMove(13)});
cc[14].noUiSlider.on('slide', function(){sliderMove(14)});
cc[15].noUiSlider.on('slide', function(){sliderMove(15)});
cc[16].noUiSlider.on('slide', function(){sliderMove(16)});
cc[17].noUiSlider.on('slide', function(){sliderMove(17)});
cc[18].noUiSlider.on('slide', function(){sliderMove(18)});
cc[19].noUiSlider.on('slide', function(){sliderMove(19)});
cc[20].noUiSlider.on('slide', function(){sliderMove(20)});
cc[21].noUiSlider.on('slide', function(){sliderMove(21)});
cc[22].noUiSlider.on('slide', function(){sliderMove(22)});
cc[23].noUiSlider.on('slide', function(){sliderMove(23)});
cc[24].noUiSlider.on('slide', function(){sliderMove(24)});
cc[25].noUiSlider.on('slide', function(){sliderMove(25)});
cc[26].noUiSlider.on('slide', function(){sliderMove(26)});
cc[27].noUiSlider.on('slide', function(){sliderMove(27)});
cc[28].noUiSlider.on('slide', function(){sliderMove(28)});
cc[29].noUiSlider.on('slide', function(){sliderMove(29)});
cc[30].noUiSlider.on('slide', function(){sliderMove(30)});
cc[31].noUiSlider.on('slide', function(){sliderMove(31)});
cc[32].noUiSlider.on('slide', function(){sliderMove(32)});
cc[33].noUiSlider.on('slide', function(){sliderMove(33)});
cc[34].noUiSlider.on('slide', function(){sliderMove(34)});
cc[35].noUiSlider.on('slide', function(){sliderMove(35)});
cc[36].noUiSlider.on('slide', function(){sliderMove(36)});
cc[37].noUiSlider.on('slide', function(){sliderMove(37)});
cc[38].noUiSlider.on('slide', function(){sliderMove(38)});
cc[39].noUiSlider.on('slide', function(){sliderMove(39)});
cc[40].noUiSlider.on('slide', function(){sliderMove(40)});
cc[41].noUiSlider.on('slide', function(){sliderMove(41)});
cc[42].noUiSlider.on('slide', function(){sliderMove(42)});
cc[43].noUiSlider.on('slide', function(){sliderMove(43)});
cc[44].noUiSlider.on('slide', function(){sliderMove(44)});
cc[45].noUiSlider.on('slide', function(){sliderMove(45)});
cc[46].noUiSlider.on('slide', function(){sliderMove(46)});
cc[47].noUiSlider.on('slide', function(){sliderMove(47)});
cc[48].noUiSlider.on('slide', function(){sliderMove(48)});
cc[49].noUiSlider.on('slide', function(){sliderMove(49)});
cc[50].noUiSlider.on('slide', function(){sliderMove(50)});
cc[51].noUiSlider.on('slide', function(){sliderMove(51)});
cc[52].noUiSlider.on('slide', function(){sliderMove(52)});
cc[53].noUiSlider.on('slide', function(){sliderMove(53)});
cc[54].noUiSlider.on('slide', function(){sliderMove(54)});
cc[55].noUiSlider.on('slide', function(){sliderMove(55)});
cc[56].noUiSlider.on('slide', function(){sliderMove(56)});
cc[57].noUiSlider.on('slide', function(){sliderMove(57)});
cc[58].noUiSlider.on('slide', function(){sliderMove(58)});
cc[59].noUiSlider.on('slide', function(){sliderMove(59)});
cc[60].noUiSlider.on('slide', function(){sliderMove(60)});
cc[61].noUiSlider.on('slide', function(){sliderMove(61)});
cc[62].noUiSlider.on('slide', function(){sliderMove(62)});
cc[63].noUiSlider.on('slide', function(){sliderMove(63)});
cc[64].noUiSlider.on('slide', function(){sliderMove(64)});
cc[65].noUiSlider.on('slide', function(){sliderMove(65)});
cc[66].noUiSlider.on('slide', function(){sliderMove(66)});
cc[67].noUiSlider.on('slide', function(){sliderMove(67)});
cc[68].noUiSlider.on('slide', function(){sliderMove(68)});
cc[69].noUiSlider.on('slide', function(){sliderMove(69)});
cc[70].noUiSlider.on('slide', function(){sliderMove(70)});
cc[71].noUiSlider.on('slide', function(){sliderMove(71)});
cc[72].noUiSlider.on('slide', function(){sliderMove(72)});
cc[73].noUiSlider.on('slide', function(){sliderMove(73)});
cc[74].noUiSlider.on('slide', function(){sliderMove(74)});
cc[75].noUiSlider.on('slide', function(){sliderMove(75)});
cc[76].noUiSlider.on('slide', function(){sliderMove(76)});
cc[77].noUiSlider.on('slide', function(){sliderMove(77)});
cc[78].noUiSlider.on('slide', function(){sliderMove(78)});
cc[79].noUiSlider.on('slide', function(){sliderMove(79)});
cc[80].noUiSlider.on('slide', function(){sliderMove(80)});
cc[81].noUiSlider.on('slide', function(){sliderMove(81)});
cc[82].noUiSlider.on('slide', function(){sliderMove(82)});
cc[83].noUiSlider.on('slide', function(){sliderMove(83)});
cc[84].noUiSlider.on('slide', function(){sliderMove(84)});
cc[85].noUiSlider.on('slide', function(){sliderMove(85)});
cc[86].noUiSlider.on('slide', function(){sliderMove(86)});
cc[87].noUiSlider.on('slide', function(){sliderMove(87)});
cc[88].noUiSlider.on('slide', function(){sliderMove(88)});
cc[89].noUiSlider.on('slide', function(){sliderMove(89)});
cc[90].noUiSlider.on('slide', function(){sliderMove(90)});
cc[91].noUiSlider.on('slide', function(){sliderMove(91)});
cc[92].noUiSlider.on('slide', function(){sliderMove(92)});
cc[93].noUiSlider.on('slide', function(){sliderMove(93)});
cc[94].noUiSlider.on('slide', function(){sliderMove(94)});
cc[95].noUiSlider.on('slide', function(){sliderMove(95)});
cc[96].noUiSlider.on('slide', function(){sliderMove(96)});
cc[97].noUiSlider.on('slide', function(){sliderMove(97)});
cc[98].noUiSlider.on('slide', function(){sliderMove(98)});
cc[99].noUiSlider.on('slide', function(){sliderMove(99)});
cc[100].noUiSlider.on('slide', function(){sliderMove(100)});
cc[101].noUiSlider.on('slide', function(){sliderMove(101)});
cc[102].noUiSlider.on('slide', function(){sliderMove(102)});
cc[103].noUiSlider.on('slide', function(){sliderMove(103)});
cc[104].noUiSlider.on('slide', function(){sliderMove(104)});
cc[105].noUiSlider.on('slide', function(){sliderMove(105)});
cc[106].noUiSlider.on('slide', function(){sliderMove(106)});
cc[107].noUiSlider.on('slide', function(){sliderMove(107)});
cc[108].noUiSlider.on('slide', function(){sliderMove(108)});
cc[109].noUiSlider.on('slide', function(){sliderMove(109)});
cc[110].noUiSlider.on('slide', function(){sliderMove(110)});
cc[111].noUiSlider.on('slide', function(){sliderMove(111)});
cc[112].noUiSlider.on('slide', function(){sliderMove(112)});
cc[113].noUiSlider.on('slide', function(){sliderMove(113)});
cc[114].noUiSlider.on('slide', function(){sliderMove(114)});
cc[115].noUiSlider.on('slide', function(){sliderMove(115)});
cc[116].noUiSlider.on('slide', function(){sliderMove(116)});
cc[117].noUiSlider.on('slide', function(){sliderMove(117)});
cc[118].noUiSlider.on('slide', function(){sliderMove(118)});
cc[119].noUiSlider.on('slide', function(){sliderMove(119)});
cc[120].noUiSlider.on('slide', function(){sliderMove(120)});
cc[121].noUiSlider.on('slide', function(){sliderMove(121)});
cc[122].noUiSlider.on('slide', function(){sliderMove(122)});
cc[123].noUiSlider.on('slide', function(){sliderMove(123)});
cc[124].noUiSlider.on('slide', function(){sliderMove(124)});
cc[125].noUiSlider.on('slide', function(){sliderMove(125)});
cc[126].noUiSlider.on('slide', function(){sliderMove(126)});
cc[127].noUiSlider.on('slide', function(){sliderMove(127)});

function sliderMove(num){
  var a = parseInt(cc[num].noUiSlider.get());
  document.getElementById("display" + num).innerHTML = a;
  sendCC(num, a);
  console.log(num + "/"+a);
}

