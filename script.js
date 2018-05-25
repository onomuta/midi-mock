navigator.requestMIDIAccess().then(onMIDISuccess,onMIDIFailure);
var midi = null;
var inputs = [];
var outputs = [];
var output = null;
var chs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var ch = 1;

/////////////////////////////////////////////////////////////////////////////
var main = document.querySelector('#slider-box');
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

  var btn = document.createElement('div');
  btn.classList.add('note-btn');
  btn.id =('note' + i);
  btn.innerHTML = i;
  container.appendChild(btn);

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

/////////////////////////////////////////////////////////////////////////////
//BTN
var pressedBtn = -1;

document.querySelector("#note0").onmousedown = function() { pushBtn(0,this) };
document.querySelector("#note1").onmousedown = function() { pushBtn(1,this) };
document.querySelector("#note2").onmousedown = function() { pushBtn(2,this) };
document.querySelector("#note3").onmousedown = function() { pushBtn(3,this) };
document.querySelector("#note4").onmousedown = function() { pushBtn(4,this) };
document.querySelector("#note5").onmousedown = function() { pushBtn(5,this) };
document.querySelector("#note6").onmousedown = function() { pushBtn(6,this) };
document.querySelector("#note7").onmousedown = function() { pushBtn(7,this) };
document.querySelector("#note8").onmousedown = function() { pushBtn(8,this) };
document.querySelector("#note9").onmousedown = function() { pushBtn(9,this) };
document.querySelector("#note10").onmousedown = function() { pushBtn(10,this) };
document.querySelector("#note11").onmousedown = function() { pushBtn(11,this) };
document.querySelector("#note12").onmousedown = function() { pushBtn(12,this) };
document.querySelector("#note13").onmousedown = function() { pushBtn(13,this) };
document.querySelector("#note14").onmousedown = function() { pushBtn(14,this) };
document.querySelector("#note15").onmousedown = function() { pushBtn(15,this) };
document.querySelector("#note16").onmousedown = function() { pushBtn(16,this) };
document.querySelector("#note17").onmousedown = function() { pushBtn(17,this) };
document.querySelector("#note18").onmousedown = function() { pushBtn(18,this) };
document.querySelector("#note19").onmousedown = function() { pushBtn(19,this) };
document.querySelector("#note20").onmousedown = function() { pushBtn(20,this) };
document.querySelector("#note21").onmousedown = function() { pushBtn(21,this) };
document.querySelector("#note22").onmousedown = function() { pushBtn(22,this) };
document.querySelector("#note23").onmousedown = function() { pushBtn(23,this) };
document.querySelector("#note24").onmousedown = function() { pushBtn(24,this) };
document.querySelector("#note25").onmousedown = function() { pushBtn(25,this) };
document.querySelector("#note26").onmousedown = function() { pushBtn(26,this) };
document.querySelector("#note27").onmousedown = function() { pushBtn(27,this) };
document.querySelector("#note28").onmousedown = function() { pushBtn(28,this) };
document.querySelector("#note29").onmousedown = function() { pushBtn(29,this) };
document.querySelector("#note30").onmousedown = function() { pushBtn(30,this) };
document.querySelector("#note31").onmousedown = function() { pushBtn(31,this) };
document.querySelector("#note32").onmousedown = function() { pushBtn(32,this) };
document.querySelector("#note33").onmousedown = function() { pushBtn(33,this) };
document.querySelector("#note34").onmousedown = function() { pushBtn(34,this) };
document.querySelector("#note35").onmousedown = function() { pushBtn(35,this) };
document.querySelector("#note36").onmousedown = function() { pushBtn(36,this) };
document.querySelector("#note37").onmousedown = function() { pushBtn(37,this) };
document.querySelector("#note38").onmousedown = function() { pushBtn(38,this) };
document.querySelector("#note39").onmousedown = function() { pushBtn(39,this) };
document.querySelector("#note40").onmousedown = function() { pushBtn(40,this) };
document.querySelector("#note41").onmousedown = function() { pushBtn(41,this) };
document.querySelector("#note42").onmousedown = function() { pushBtn(42,this) };
document.querySelector("#note43").onmousedown = function() { pushBtn(43,this) };
document.querySelector("#note44").onmousedown = function() { pushBtn(44,this) };
document.querySelector("#note45").onmousedown = function() { pushBtn(45,this) };
document.querySelector("#note46").onmousedown = function() { pushBtn(46,this) };
document.querySelector("#note47").onmousedown = function() { pushBtn(47,this) };
document.querySelector("#note48").onmousedown = function() { pushBtn(48,this) };
document.querySelector("#note49").onmousedown = function() { pushBtn(49,this) };
document.querySelector("#note50").onmousedown = function() { pushBtn(50,this) };
document.querySelector("#note51").onmousedown = function() { pushBtn(51,this) };
document.querySelector("#note52").onmousedown = function() { pushBtn(52,this) };
document.querySelector("#note53").onmousedown = function() { pushBtn(53,this) };
document.querySelector("#note54").onmousedown = function() { pushBtn(54,this) };
document.querySelector("#note55").onmousedown = function() { pushBtn(55,this) };
document.querySelector("#note56").onmousedown = function() { pushBtn(56,this) };
document.querySelector("#note57").onmousedown = function() { pushBtn(57,this) };
document.querySelector("#note58").onmousedown = function() { pushBtn(58,this) };
document.querySelector("#note59").onmousedown = function() { pushBtn(59,this) };
document.querySelector("#note60").onmousedown = function() { pushBtn(60,this) };
document.querySelector("#note61").onmousedown = function() { pushBtn(61,this) };
document.querySelector("#note62").onmousedown = function() { pushBtn(62,this) };
document.querySelector("#note63").onmousedown = function() { pushBtn(63,this) };
document.querySelector("#note64").onmousedown = function() { pushBtn(64,this) };
document.querySelector("#note65").onmousedown = function() { pushBtn(65,this) };
document.querySelector("#note66").onmousedown = function() { pushBtn(66,this) };
document.querySelector("#note67").onmousedown = function() { pushBtn(67,this) };
document.querySelector("#note68").onmousedown = function() { pushBtn(68,this) };
document.querySelector("#note69").onmousedown = function() { pushBtn(69,this) };
document.querySelector("#note70").onmousedown = function() { pushBtn(70,this) };
document.querySelector("#note71").onmousedown = function() { pushBtn(71,this) };
document.querySelector("#note72").onmousedown = function() { pushBtn(72,this) };
document.querySelector("#note73").onmousedown = function() { pushBtn(73,this) };
document.querySelector("#note74").onmousedown = function() { pushBtn(74,this) };
document.querySelector("#note75").onmousedown = function() { pushBtn(75,this) };
document.querySelector("#note76").onmousedown = function() { pushBtn(76,this) };
document.querySelector("#note77").onmousedown = function() { pushBtn(77,this) };
document.querySelector("#note78").onmousedown = function() { pushBtn(78,this) };
document.querySelector("#note79").onmousedown = function() { pushBtn(79,this) };
document.querySelector("#note80").onmousedown = function() { pushBtn(80,this) };
document.querySelector("#note81").onmousedown = function() { pushBtn(81,this) };
document.querySelector("#note82").onmousedown = function() { pushBtn(82,this) };
document.querySelector("#note83").onmousedown = function() { pushBtn(83,this) };
document.querySelector("#note84").onmousedown = function() { pushBtn(84,this) };
document.querySelector("#note85").onmousedown = function() { pushBtn(85,this) };
document.querySelector("#note86").onmousedown = function() { pushBtn(86,this) };
document.querySelector("#note87").onmousedown = function() { pushBtn(87,this) };
document.querySelector("#note88").onmousedown = function() { pushBtn(88,this) };
document.querySelector("#note89").onmousedown = function() { pushBtn(89,this) };
document.querySelector("#note90").onmousedown = function() { pushBtn(90,this) };
document.querySelector("#note91").onmousedown = function() { pushBtn(91,this) };
document.querySelector("#note92").onmousedown = function() { pushBtn(92,this) };
document.querySelector("#note93").onmousedown = function() { pushBtn(93,this) };
document.querySelector("#note94").onmousedown = function() { pushBtn(94,this) };
document.querySelector("#note95").onmousedown = function() { pushBtn(95,this) };
document.querySelector("#note96").onmousedown = function() { pushBtn(96,this) };
document.querySelector("#note97").onmousedown = function() { pushBtn(97,this) };
document.querySelector("#note98").onmousedown = function() { pushBtn(98,this) };
document.querySelector("#note99").onmousedown = function() { pushBtn(99,this) };
document.querySelector("#note100").onmousedown = function() { pushBtn(100,this) };
document.querySelector("#note101").onmousedown = function() { pushBtn(101,this) };
document.querySelector("#note102").onmousedown = function() { pushBtn(102,this) };
document.querySelector("#note103").onmousedown = function() { pushBtn(103,this) };
document.querySelector("#note104").onmousedown = function() { pushBtn(104,this) };
document.querySelector("#note105").onmousedown = function() { pushBtn(105,this) };
document.querySelector("#note106").onmousedown = function() { pushBtn(106,this) };
document.querySelector("#note107").onmousedown = function() { pushBtn(107,this) };
document.querySelector("#note108").onmousedown = function() { pushBtn(108,this) };
document.querySelector("#note109").onmousedown = function() { pushBtn(109,this) };
document.querySelector("#note110").onmousedown = function() { pushBtn(110,this) };
document.querySelector("#note111").onmousedown = function() { pushBtn(111,this) };
document.querySelector("#note112").onmousedown = function() { pushBtn(112,this) };
document.querySelector("#note113").onmousedown = function() { pushBtn(113,this) };
document.querySelector("#note114").onmousedown = function() { pushBtn(114,this) };
document.querySelector("#note115").onmousedown = function() { pushBtn(115,this) };
document.querySelector("#note116").onmousedown = function() { pushBtn(116,this) };
document.querySelector("#note117").onmousedown = function() { pushBtn(117,this) };
document.querySelector("#note118").onmousedown = function() { pushBtn(118,this) };
document.querySelector("#note119").onmousedown = function() { pushBtn(119,this) };
document.querySelector("#note120").onmousedown = function() { pushBtn(120,this) };
document.querySelector("#note121").onmousedown = function() { pushBtn(121,this) };
document.querySelector("#note122").onmousedown = function() { pushBtn(122,this) };
document.querySelector("#note123").onmousedown = function() { pushBtn(123,this) };
document.querySelector("#note124").onmousedown = function() { pushBtn(124,this) };
document.querySelector("#note125").onmousedown = function() { pushBtn(125,this) };
document.querySelector("#note126").onmousedown = function() { pushBtn(126,this) };
document.querySelector("#note127").onmousedown = function() { pushBtn(127,this) };

function pushBtn(cc,t){
  t.classList.add("active");
  sendCC(cc, 127);
  pressedBtn = cc;
}

document.onmouseup = function() {
  releaseBtn();
};

function releaseBtn(){
  if(pressedBtn != -1 ){
    sendCC(pressedBtn, 0);
    document.querySelector(".active").classList.remove("active");
    pressedBtn = -1;
  }
}
