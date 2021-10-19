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
  $('.custom-date-picker').css("display", "block");
  $('.pop-up-bg-mask').css("opacity", 0.6);
  $('.sh-col3-X').removeClass('hide-for-desktop');
})

$('.sh-col3-X').on('click', function () {
  $('.custom-date-picker').css("display", "none");
  $('.pop-up-bg-mask').css("opacity", 0.3);
});

//Script For Calender And Date Picker Pop - Up on viewdetails.html page


let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();
let months = [
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

function getNumberOfDays(year, month) {
  let numDays = new Date(year, month + 1, 0).getDate();
  return numDays;
}

function renderCal(getNumDays) {
  let DateToDisplay = document.getElementById('label-date');
  let monthName = months[monthChosen]
  DateToDisplay.innerHTML = monthName + yearChosen;

  let dayColumns = document.getElementsByClassName('day-column');
  for (let x = 1; x < dayColumns.length; x++) {
    dayColumns[x].innerHTML = "";
  }

  let firstDay = monthName + ' 1,' + yearChosen;
  let firstDayOfMonth = new Date(firstDay).getDay();
  for (let y = 1; y < firstDayOfMonth; y++) {
    let blankPTag = document.createElement("p");
    let blankText = document.createTextNode(" ");
    blankPTag.style.padding = '12px';
    blankPTag.appendChild(blankText);
    let dayColumn = document.getElementById(y.toString());
    dayColumn.appendChild(blankPTag);
  }


  for (let i = 1; i <= getNumDays; i++) {
    let dayPTag = document.createElement("p");
    dayPTag.style.fontSize = "18px";
    let dayText = document.createTextNode(i.toString());
    dayPTag.appendChild(dayText);
    let date = monthName + " " + i.toString() + ", " + yearChosen;
    //console.log(date);
    let dayOfWeek = new Date(date).getDay();
    //console.log(dayOfWeek);
    document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);
  }
}

let selectedMonth = document.getElementById('selectedMonth');

function changeMonth() {
    if(selectedMonth != null) {
      monthChosen = selectedMonth.value;
    }
    console.log(selectedMonth.value);
  
    renderCal(getNumberOfDays(yearChosen, monthChosen));
}

renderCal(getNumberOfDays(yearChosen, monthChosen));
