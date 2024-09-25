// gsap.from("h1", {
// onStart: function () {
$("h1").textillate({
  in: { effect: "swing", sync: true },
  out: { effect: "bounceOut", shuffle: true },
  loop: true, // yaha out effect define hai
});
// Aapko kab out effect dikhana hai uska event trigger karna hoga, jaise niche example diya hai
// setTimeout(function () {
//   $("h1").textillate("out");
// }, 2000); // 2 seconds ke baad out effect trigger hoga
// },
// });
