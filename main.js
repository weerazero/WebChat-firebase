
$(function () {
    let name = "wee";
        $('#btnSent').click(onclick);

        function onclick() {
                let text = $("#text").val();
                let time = date()
             
                writeUserData(name, text, time)

                $("#text").val("");
        }


        function date() {


                var currentdate = new Date();
                var datetime = currentdate.toUTCString()

                return name + ' | ' + datetime


        }
 readData();



});