var arr = [
  {
    dp: "https://images.unsplash.com/photo-1727887746394-8b5c23c98b40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://plus.unsplash.com/premium_photo-1724864863815-1469c8b74711?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1581008605460-3cbc0eb37669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluc3RhZ3JhbSUyMG1vZGVsfGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1553444521-35aa268115f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2xpbSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1616518883324-d7f5f1ce7e99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var grow = 0;
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div id="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});
document.querySelector("#storiya").innerHTML = clutter;

document.querySelector("#storiya").addEventListener("click", function (dets) {
  document.querySelector("#full-scr").style.display = "block";
  document.querySelector("#full-scr").style.backgroundImage = `url(${
    arr[dets.target.id].img
  })`;
  setTimeout(function () {
    document.querySelector("#full-scr").style.display = "none";
  }, 2000);
  if (grow < 100) {
    setInterval(function () {
      document.querySelector("#growth").style.width = `${grow}%`;
      grow++;
    }, 30);
  } else {
    grow = 0;
  }
});
