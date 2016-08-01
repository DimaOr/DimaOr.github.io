/**
 * Created by Дмитрий on 29.07.2016.
 */

Math.randInt = function (x) {
  return Math.floor(Math.random() * x);
};

function request(val, callback) {
  var deferred = Promise.defer();
  setTimeout(function () {
    var a = callback(val * val);
    deferred.resolve(a);
  }, Math.randInt(1000));
  return deferred.promise;
}

function multiply(a) {
  return a;
}

var element = document.getElementById("Start");
element.onclick = function () {
  var p1 = request(Math.randInt(20) + 1, multiply);
  var p2 = request(Math.randInt(20) + 1, multiply);
  var p3 = request(Math.randInt(20) + 1, multiply);

  return Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values.reduce(function (item, i) {
      return item + i;
    }))
  })
}