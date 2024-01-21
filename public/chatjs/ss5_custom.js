// Do Create Nofi
var notyf = new Notyf({
    duration: 3000,
});
//Do Create CSRF-TOKEN 



// Call Ajax from load to get Connection
$(document).ready(function () {
    const pusher_key = $(document).find('meta[name="push_key"]').attr('content');
    const push_connection = $(document).find('meta[name="push_connection"]').attr('content');
    var pusher = new Pusher(pusher_key, {
    cluster: "ap1",
    });
    $.ajax({
        type: "GET",
        url: "/chat/pusherConnection",
        async: false,
        success: function (response) {
                if(response.status == 'success'){
                    response.connection.forEach(e => {
                        window["channel_"+e] =  pusher.subscribe(`chat_to_${e}`);
                        console.log( window["channel_"+e]);
                        window["channel_"+e].bind("chat", (data) => {
                                console.log(data);
                                $(document).find(`.message_${data.connection}_${data.to_id}`).append(data.view)
                        });
                    });
                }
        }
    }); 


    $(document).on('click','#BtnSend',function(e){
        // ----------V_block
        e.preventDefault()
        let user = $(this).attr('data-user');
        let message = $('#input_message').val();
        let data = {
           user : user ,
           message : message,   
        }
        // ---------End_V_block---
        $.ajax({
            type: "POST",
            url: "/chat/sendMessage",
            data: data,
            beforeSend: function() {
    
            },
            success: function (response) {
                    if(response.status == 'success'){
                        $('.messages').append(response.view);
                        $('#input_message').val('');
                       
                    }else{
                        notyf.error(response.msg);
                    }
               console.log("23");
            }
        });
       $(document).on('keypress','input_message',function(e){
           $('#BtnSend').trigger('click');
       })
   })



});







$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
function DosearchNewuser(ctrl){ // Search new user for start connection
    // ----------V_block
    let value = $(ctrl).val();
    let data = {
        value : value
    }
    // ---------End_V_block---
    $.ajax({
        type: "GET",
        url: "/chat/search_new",
        data: data,
        beforeSend: function() {

        },
        success: function (response) {
                if(response.status == 'success'){
                    $('#search_newuser').html('');
                    $('#search_newuser').html(response.view);
                }else{
                    notyf.error(response.msg);
                }
        }
    });
}

function DoCreateConnect(ctrl){ // Create connection (Start new message for new user)
      // ----------V_block
      let value = $(ctrl).attr('data-email');
      let data = {
          value : value
      }
      // ---------End_V_block---
      $.ajax({
          type: "GET",
          url: "/chat/createConnection",
          data: data,
          beforeSend: function() {
  
          },
          success: function (response) {
                  if(response.status == 'success'){
                      $('#ListofConnection').append(response.view);
                  }else{
                      notyf.error(response.msg);
                  }
          }
      });
}

function DoDisplayChat(ctrl){ // Click to dispay chat for user
 // ----------V_block
    let id = $(ctrl).attr('data-uuid');
    let connection_with = $(ctrl).attr('data-connection_with');
    let connection_from = $(ctrl).attr('data-connection_from');
    let connect_to = $(ctrl).attr('data-connect_to');
    let data = {
        id : id ,
        connect_to : connect_to,
        connection_from : connection_from,
        connection_with : connection_with,
    }
    // ---------End_V_block---
    $.ajax({
        type: "GET",
        url: "/chat/showMessage",
        data: data,
        beforeSend: function() {

        },
        success: function (response) {
                if(response.status == 'success'){
                    $('#middle').html('');
                    $('#middle').html(response.view);
                }else{
                    notyf.error(response.msg);
                }
        }
    });
}



