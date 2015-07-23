// My solution
function formatDuration (seconds) {

  if (seconds === 0) {
    return 'now';
  }

  var aYear = 365 * 24 * 60 * 60;
  var aDay = 24 * 60 * 60;
  var anHour = 60 * 60;
  var aMinute = 60;
  
  var sec = seconds;
  var time = {};
  
  if (sec >= aYear) {
    time.years = Math.round(sec/aYear);
    sec -= time.years * aYear;
  }
  if (sec >= aDay) {
    time.days = Math.round(sec/aDay);
    sec -= time.days * aDay;
  }
  if (sec >= anHour) {
    time.hours = Math.round(sec/anHour);
    sec -= time.hours * anHour;
  }
  if (sec >= aMinute) {
    time.minutes = Math.round(sec/aMinute);
    sec -= time.minutes * aMinute;
  }
  if (sec >= 0) {
    time.seconds = sec;
  }

  var result = [];
  for (var key in time) {
    if (key === 'years' && time[key] > 1) {
      result.push('' + time[key] + ' years');
    } else if (key === 'years' && time[key] === 1) {
      result.push('1 year');
    }
    if (key === 'days' && time[key] > 1) {
      result.push('' + time[key] + ' days');
    } else if (key === 'days' && time[key] === 1) {
      result.push('1 day');
    }
    if (key === 'hours' && time[key] > 1) {
      result.push('' + time[key] + ' hours');
    } else if (key === 'hours' && time[key] === 1) {
      result.push('1 hour');
    }
    if (key === 'minutes' && time[key] > 1) {
      result.push('' + time[key] + ' minutes');
    } else if (key === 'minutes' && time[key] === 1) {
      result.push('1 minute');
    }
    if (key === 'seconds' && time[key] > 1) {
      result.push('' + time[key] + ' seconds');
    } else if (key === 'seconds' && time[key] === 1) {
      result.push('1 second');
    }
  }

  var lastTime = result.pop();

  if (result.length === 1) {
    return '' + result[0];
  } else {
    return result.join(', ') + ' and ' + lastTime;
  }
}

// Best practices
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
