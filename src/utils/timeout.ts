// function for api timeout
export default function Timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("timeout"));
      }, ms);
      promise.then(resolve, reject);
    });
  }