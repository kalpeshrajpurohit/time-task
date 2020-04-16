    $(function() {
        $( "#datepicker" ).datepicker({ firstDay: 1});
    });

   $('#addTimeBtn').click(function(){
        $('.calender_time').addClass('active_calendar')
        $('.active_calendar').css('opacity','1');
        setTimeout(function(){ $('.active_calendar').css('z-index','9'); },800)
        $('.mike-activity').removeClass('active_calendar')
        $('.mike-activity').css('opacity','0');
        $('.mike-activity').css('z-index','-1');
        // $('.mike-activity').hide();

    });

    $('#close-active-calendar , #close-noti_box').click(function(){
        $('.active_calendar').css('z-index','-1');
        $('.active_calendar').css('opacity','0');
        $('.calender_time,.mike-activity').removeClass('active_calendar')
    })

    
    $('#notificatin_box').click(function(){
        // $('.mike-activity').show();
        $('.active_calendar').css('z-index','-1');
        $('.active_calendar').css('opacity','0');
        $('.mike-activity').addClass('active_calendar')
         $('.calender_time').removeClass('active_calendar')
        $('.active_calendar').css('opacity','1');
        setTimeout(function(){ $('.active_calendar').css('z-index','9'); },800)
    })