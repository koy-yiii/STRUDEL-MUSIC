let melody = note("c3 c3 d#3 d#3 f3 g3 f3 c3 c3 - - d#3 f3 g3 f3 g3")
.s("supersaw")
.tremolosync("4")
.distort(0.5)
.hpf(200)
.lpf(2000)
.gain(0.7)
.room(0.3)
.slow(2)

._scope()
  
;



let beat1 = sound(" bd bd sd oh bd bd sd oh bd bd cp cp bd bd sd oh")//main beat
  .lpf(2000)
  .bank("RolandTR909")

  .slow(2)
  ._scope()
  
  ; 

let beat2 = sound(" bd bd sd oh bd bd sd oh,  [hh bd]*4") 
  .lpf(2000)
  .bank("RolandTR909")
  .gain("<1 0.9 1 0.95>");

let melody_2 = note("g1*3,e1*4")
.s("sine").pdec(.5)
.penv(32)
.fast(2)
.lpf(2500)
._scope()
;



let topline = note("[<[e4 f4] [g4 c4] [e4 f4 f4 e4] [g4 g4 c4 c4] > [g4 a#4]*2 , - - c5 d5 a#4 - a#4 g4]")
  .s("user:2 user:3 user:2 user:3")
  .gain(0.4) 
  .lpf(sine.range(400, 4000).slow(1.5))
  .lpq(20)   
  .room(0.4)
  .delay(0.25)
  .detune(10)
  .slow(1)
  .clip(0.8)
  ._pianoroll(); 
let part1_complete = stack(melody, beat1,topline);

let part2 = stack(melody_2, beat2, topline);


let sequence_finale = cat(
  part1_complete,  
  part2.cutoff(sine.range(2000, 200).slow(2))
);

sequence_finale 


