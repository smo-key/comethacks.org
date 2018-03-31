// const parseDateNumber = function(a) {
//   if (a.toString().length == 2) return a.toString();
//   else return "0" + a.toString();
// }

// $(document).ready(function(){
//   var eventTime = moment("2018-03-31 11:00:00.000-06:00");

//   const onUpdate = function() {
//     var remain = eventTime.diff(moment());

//     var days = Math.floor(remain / (1000 * 60 * 60 * 24));
//     remain -= days * (1000 * 60 * 60 * 24);

//     var hrs = Math.floor(remain / (1000 * 60 * 60));
//     remain -= hrs * (1000 * 60 * 60);

//     var mins = Math.floor(remain / (1000 * 60));
//     remain -= mins * (1000 * 60);

//     var secs = Math.floor(remain / (1000));

//     $("#secs").text(parseDateNumber(secs));
//     $("#mins").text(parseDateNumber(mins));
//     $("#hours").text(parseDateNumber(hrs));
//     $("#days").text(parseDateNumber(days));
//   }

//   onUpdate();
//   setInterval(onUpdate, 1000);
// });
