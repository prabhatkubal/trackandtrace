// Script for progress bar on viewdetails.html - page
$('.steps').on('click', '.step--active', function () {
  $(this).removeClass('step--incomplete').addClass('step--complete');
  $(this).removeClass('step--active').addClass('step--inactive');
  $(this).next().removeClass('step--inactive').addClass('step--active');
});

$('.steps').on('click', '.step--complete', function () {
  $(this).removeClass('step--complete').addClass('step--incomplete');
  $(this).removeClass('step--inactive').addClass('step--active');
  $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
  $(this).nextAll().removeClass('step--active').addClass('step--inactive');
});

// Script for pop-up on viewdetails.html - page
$('.customer-order-details').on('click', function () {
  $('nav').css({ 'z-index': 0 });
  $('.pop-up-bg-mask').css("display", "block");
  $('.sh-col1').css({ 'z-index': -1 });
  $('.sh-col2').css("display", "block");
  $('.sh-ord-details').css("display", "block");
  $('.sh-cus-info').css("display", "block");
  $('.sh-col2-cta1').css("display", "flex");
  $('.sh-col2-cta2').css("display", "flex");
});

$('.sh-col2-X').on('click', function () {
  $('nav').css({ 'z-index': 999 });
  $('.pop-up-bg-mask').css("display", "none");
  $('.sh-col1').css({ 'z-index': 0 });
  $('.sh-col2').css("display", "none");
  $('.sh-ord-details').css("display", "none");
  $('.sh-cus-info').css("display", "none");
  $('.sh-col2-cta1').css("display", "none");
  $('.sh-col2-cta2').css("display", "none");
});



// const today = new Date()
// const currentMonth = today.toLocaleString('default', { month: 'long' });

// $('.dt-month').html(today.toLocaleString('default', { month: 'long' }));
// $('.dt-year').html(today.getFullYear());

$('.dl-chng-date').on('click', function () {
  $('.custom-date-picker').css("display", "flex");
  $('.pop-up-bg-mask').css("opacity", 0.6);
  $('.sh-col3-X').removeClass('hide-for-desktop');
})

$('.sh-col3-X').on('click', function () {
  $('.custom-date-picker').css("display", "none");
  $('.pop-up-bg-mask').css("opacity", 0.3);
});

//Script For Calender And Date Picker Pop - Up on viewdetails.html page
let d;
d = new Date();

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function daysInMonths(year, month) {
  let numDays = new Date(year, month + 1, 0).getDate();
  return numDays;
}

// console.log(currentYear, currentMonth, daysInMonths(currentYear, currentMonth));

function renderCal(daysInMonths) {
  let labelMonth = document.getElementById('label-month');
  let labelYear = document.getElementById('label-year');
  let month = monthNames[currentMonth]
  labelMonth.innerHTML = month + currentYear;
  // labelYear.innerHTML = currentYear; //This line Not Working

  for (let i = 1; i <= daysInMonths; i++) {
    let dayPTag = document.createElement('p');
    dayPTag.style.fontSize = '18px';
    let dayText = document.createTextNode(i.toString());
    dayPTag.appendChild(dayText);

    let date = month + " " + i.toString() + ", " + currentYear;
    //console.log(date);

    let dayOfWeek = new Date(date).getDay();
    //console.log(dayOfWeek);

    document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);
    // document.getElementById('days-container').style.display = 'flex';
  }
}

renderCal(daysInMonths(currentYear, currentMonth));