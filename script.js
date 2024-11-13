// Add this to your existing HTML file, just before the closing </body> tag

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable F12 key and Ctrl+Shift+I
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
    e.preventDefault();
    return false;
  }
});

// Disable Ctrl+U (view source)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    return false;
  }
});

// Disable Ctrl+Shift+C
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
    e.preventDefault();
    return false;
  }
});

// Clear console messages
console.clear();
// Disable console.log, console.warn, console.error
(function () {
  var methods = [
    "log",
    "debug",
    "warn",
    "error",
    "info",
    "table",
    "group",
    "groupEnd",
  ];
  methods.forEach(function (method) {
    console[method] = function () {};
  });
})();

// Detect if DevTools is open
let devtools = function () {};
devtools.toString = function () {
  if (!this.opened) {
    alert("Developer Tools are not allowed on this website!");
    window.location.href = window.location.href; // Refresh the page
  }
  this.opened = true;
  return "";
};

// Check for DevTools every second
setInterval(function () {
  console.log(devtools);
  console.profile();
  console.profileEnd();
}, 1000);

// Disable debugging
function debug(e) {
  e.preventDefault();
  return false;
}

// Additional protection against source code viewing
document.onkeypress = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    debug(event);
    return false;
  }
};
document.onmousedown = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    debug(event);
    return false;
  }
};
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode == 123) {
    debug(event);
    return false;
  }
};

// Disable text selection
document.onselectstart = function (e) {
  e.preventDefault();
  return false;
};

// Disable copy
document.oncopy = function (e) {
  e.preventDefault();
  return false;
};

// Additional protection layer
(function () {
  try {
    var script = document.createElement("script");
    Object.defineProperty(script, "src", {
      get: function () {
        throw new Error("Script source blocked");
      },
    });
    console.log(script.src);
  } catch (e) {}
})();
