var elem = document.getElementById("elem");
elem.addEventListener("click", function () {
  anime({
    targets: elem,
    translateX: 250,
  });
});

function sound() {
  $("#sound-file").get(0).play();
}

function sound1() {
  $("#sound-file1").get(0).play();
}

function sound2() {
  $("#sound-file2").get(0).play();
}

function sound3() {
  $("#sound-file3").get(0).play();
}

$("#m1").on("click", function () {
  alert("正解です。毎年見てるね～");
});

$("#engei").on("click", function () {
  alert("え、うそでしょ～！違います。");
});

$("#the").on("click", function () {
  alert("全然違いますね");
});

$("#kensaku").on("click", function () {
  alert("お笑いテレビで見ないんですね");
});

$("#m12").on("click", function () {
  alert("いや違うだろ！とも言い切れない！が、違う！！");
});
$("#engei1").on("click", function () {
  alert("RIP SLIME最高！正解！");
});
$("#the1").on("click", function () {
  alert("テレビ局だけあってますが違う番組でした。");
});
$("#kensaku1").on("click", function () {
  alert("全然ちゃうで");
});
$("#m13").on("click", function () {
  alert("違うよ（マヂラブ村上のノリで）");
});
$("#engei2").on("click", function () {
  alert("違う違う違うちがーう！（東京０３角田のノリで）");
});
$("#the2").on("click", function () {
  alert("そうそうそう、合ってますよ！");
});

$("#kensaku2").on("click", function () {
  alert("違うじゃねーかよあんちゃん！（EXITりんたろー。のノリで）");
});
$("#m14").on("click", function () {
  alert("お笑いなめてますね。不正解。");
});
$("#engei3").on("click", function () {
  alert("ち・が・い・ま・す");
});
$("#the3").on("click", function () {
  alert("もういいです・・・");
});
$("#kensaku3").on("click", function () {
  alert("通ですねぇ～大正解！");
});
