(function(){var e=typeof window!="undefined"?window:exports,t=[];e.performance||(e.performance={});e.performance.now||(e.performance.now=performance.now||performance.webkitNow||performance.msNow||performance.mozNow);if(!e.performance.now){var n=Date.now?Date.now():+(new Date);if(performance.timing&&performance.timing)n=performance.timing.navigationStart;e.performance.now=function(){var e=Date.now?Date.now():+(new Date);return e-n}}e.performance.mark||(e.performance.mark=e.performance.webkitMark?e.performance.webkitMark:function(n){t.push({name:n,entryType:"mark",startTime:e.performance.now(),duration:0})});e.performance.getEntriesByType||(e.performance.getEntriesByType=e.performance.webkitGetEntriesByType?e.performance.webkitGetEntriesByType:function(e){return e=="mark"?t:undefined})})();markUserTime=function(e){window.performance.mark(e);if(console&&console.timeStamp)console.timeStamp(e)}