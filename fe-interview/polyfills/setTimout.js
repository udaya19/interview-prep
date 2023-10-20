function createSetTimeOut() {
  var timerId = 0;
  var timerMap = {};
  function setTimeOutPoly(callback, delay) {
    var id = timerId++;
    timerMap[id] = true;
    var start = Date.now();
    function triggerCallBack() {
      if (!timerMap[id]) return;
      if (Date.now() > start + delay) {
        callback();
      } else {
        requestIdleCallback(triggerCallBack);
      }
    }
    requestIdleCallback(triggerCallBack);
    return id;
  }
  return { setTimeOutPoly };
}

var { setTimeOutPoly } = createSetTimeOut();

console.log("Start");

var myId = setTimeOutPoly(function () {
  console.log("Running after 5 seconds");
}, 5000);

console.log("End");
