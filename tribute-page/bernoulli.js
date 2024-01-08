hljs.initHighlightingOnLoad();

function nthBernoulliNumber(n){
  console.log("Calculating...");
  var V20plus = [];
  var V1 = 1, V2 = 2, V3 = n;
  var b1 = true;
  while(b1){
    var i = 0;
    var b2 = true;
    console.log(i);
    while(b2){
      console.dir("Iteration: " + i);
      var V4, V5, V6;
      V4 = V5 = V6 = V2 * V3;
      console.log("V2*V3: " + V4);
      V4 -= V1;
      console.log("V4: " + V4);
      V5 += V1;
      var V11 = V4 / V5;
      V11 /= V2;
      var V13 = -V11;
      var V10 = V3 - V1;
      console.log("B2 V10 a: " + V10);
      if(V10 == 0) break;
      var V7 = V2;
      V11 = V6 / V7;
      var V12 = V20plus[i] * V11;
      i += 1;
      V13 += V12;
      V10 -= V1;
      console.log("B2 V10 b: " + V10);
      if(V10 == 0) b2 = false;
      var b3 = true;
      while(b3){
        V6 -= V1;
        V7 += V1;
        var V8 = V6 / V7;
        V11 *= V8;
        V6 -= V1;
        V7 += V1;
        var V9 = V6 / V7;
        V11 *= V9;
        V12 = V20plus[i] * V11;
        i += 1;
        V13 += V12;
        V10 -= V1;
        console.log("B3 V10: " + V10);
        if(V10 = 0) b3 = false;
      }
      b2 = false;
    }
    V20plus[i] -= V13;
    V3 += V1;
    V7 = V13 = 0;
    if(i == n) b1 = false;
  }
  return V20plus[n];
}

$(document).ready(function(){
  $('#calculate').click(function(){
    var input = parseInt($('[name=calc-input]').val(), 10);
    console.log("Input: " + input);
    $('[name=calc-output]').val(nthBernoulliNumber(input));
  });
});