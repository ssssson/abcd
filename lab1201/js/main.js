var startTime;
var checkTime;
var startDate;

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;




function getDate() {
	var today = new Date();
	var s =
		leadingZeros(today.getFullYear(), 4) + '-' + leadingZeros(today.getMonth() + 1, 2) + '-' +
	    leadingZeros(today.getDate(), 2);
	    
	return s;
}

function leadingZeros(n, digits) {
	  var zero = '';
	  n = n.toString();

	  if (n.length < digits) {
	    for (i = 0; i < digits - n.length; i++)
	      zero += '0';
	  }
	  return zero + n;
	}


function showCart() {
	location.assign("contents.html");
}
	   
	   

function shoppingList() {
	location.assign("shoppingList.html");
}


function click_edit() {
	location.assign("editpage.html");
}


function complete() {
	history.go(-1);
}



function doSearch() {
	location.assign("search.html");
}


function clear() {
	
}

function click_search() {
/*	alret("dd");
	
	var text = $("#search_name").val();
	
	if(text=='loacker'){
		location.assign("search_result.html");
	}
	else
		alert('NOT Matches');*/
	
	location.assign("search_result.html");
}


function loacker1() {
	location.assign("loacker1.html");
}

function loacker2() {
	location.assign("loacker2.html");
}



$(document).ready(function() {
    
    //function getGrocery() {
        
        //append to list using the + button
        $("#addbutton").click(function(enter) {
           console.log("ADD was pressed.");
           postGrocery();
        });
        
        //append to the list using enter
        $("#groceries").keydown(function(enter) {
            if (enter.keyCode==13) {
                console.log("enter is pressed.");
                postGrocery();
            }
        });
    //};
    
    //defined getGrocery, call it!
    //getGrocery();
    
    //got the grocery, print it!
    function postGrocery() {
        var grocery = $("#groceries").val();
        var listitem = '<li class="notbought"><input type="checkbox" name=' + grocery +' value=' + grocery + '>' +grocery+ '<input type="button" id="delete" value="Delete" style="btn_st2"> </li>'

        if (grocery.indexOf(" ") !== -1 ) {
            alert("Please enter something to get from the store.");
        }
        else if (grocery == "") {
            alert("Please enter something to get from the store.");
        }
        else {
            // $(".items").hide(grocery); - find a way to fade it in later ... 
            $(".items").append(listitem).fadeIn(200);
            $("#groceries").val("");
            console.log(grocery);
            console.log(listitem);
        };
        


    };
    
    //make the delete button work.
    $(document).on("click", "#delete", function() {
        $(this).closest("li").fadeOut(200);
    });
    
    //toggle the checked or bought classes  .toggle didn't seem to work.
    /* $(document).on("click", "#checkbox", function () {
        if ($(this).closest("li").hasClass("notbought")) {
            $(this).closest("li").addClass("checked").removeClass("notbought");
        } else {
            $(this).closest("li").removeClass("checked").addClass("notbought");
        }
    }); */

    //getting .toggle to work    
    $(document).on("click", "#checkbox", function () {
        $(this).closest("li").toggleClass("notbought checked");
    });
    
    // time to get the clearall working!
    $(document).on("click", "#clearall", function () {
        $(".items").empty();
    });
    
    //adding a way to resize the instructions
    $('.instructions').hover(function(){
        $(this).attr('size',4);
    },function(){
        $(this).attr('size',1);
    });
});


function navigation(url,intWidth,intHeight) { 
    window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=1,scrollbars=1") ; 
}

/*function navigation1(){
    document.getElementById("Pop_c").style.display='inline'
}*/

