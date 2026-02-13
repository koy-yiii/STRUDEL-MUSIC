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



let part1_complete = stack(melody, beat1);



let sequence_finale = cat(
  part1_complete,  
  beat2.cutoff(sine.range(2000, 200).slow(2))
);

sequence_finale 


