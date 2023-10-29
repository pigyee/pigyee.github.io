 // 获取文本段落和调节条元素
var text = document.getElementById("text");
var range = document.getElementById("font-size-range");

// 创建 cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// 读取 cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// 初始化调节条和文本段落的字体大小
function initFontSize() {
  var fontSize = getCookie("fontSize");
  if (fontSize != null) {
    range.value = fontSize;
    text.style.fontSize = fontSize + "px";
  }
}

// 更新文本段落的字体大小和 cookie
function updateFontSize() {
  var fontSize = range.value;
  text.style.fontSize = fontSize + "px";
  setCookie("fontSize", fontSize, 365);
}

// 监听调节条的 input 事件
range.addEventListener("input", updateFontSize);

// 页面加载完成后初始化字体大小
window.addEventListener("load", initFontSize);