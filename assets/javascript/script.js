// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let time_blocks = $(".time-block");
$(function () {
    let today = dayjs();
    $("#currentDay").append(today.format("MMMM D, YYYY"));
    $(".clearBtn").click(function(){
        localStorage.clear();
        location.reload();
    })
    $(".saveBtn").click(function(){
        let textarea = $(this).siblings(".description");
        localStorage.setItem(this.parentNode.id, $(textarea).val());
    })
    for (let i = 0; i < time_blocks.length; i++) {
        let element = time_blocks[i];
        console.log(element.id);
        if (localStorage.getItem(element.id) != ""){
            element.querySelector(".description").textContent = localStorage.getItem(element.id);
        }
        if (i+9 < dayjs().hour()){
            element.classList.add("past");
        }
        if (i+9 === dayjs().hour()){
            element.classList.add("present");
        }
        if (i+9 > dayjs().hour()){
            element.classList.add("future");
        }
    }

  });
  