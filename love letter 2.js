$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_expand = $("#expand");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

btn_expand.click(function () {
  window.location.href = "loveletter-expanded.html";
});

