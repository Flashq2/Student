<!DOCTYPE html>
<html lang="en">
@include('admin.header')

<body id="kt_body" class="aside-enabled">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div id="kt_aside" class="aside" >
                @include('admin.side_left')
                @include('admin.side_top')
            </div>
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                @include('admin.title_head')
                {{-- Content of Page --}}
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                    <div class="container-fluid">
                        <div class="card">
                            @include('admin.table_action')
                            {{-- Begin Table --}}
                            <div class="card-body pt-0">
                                @include('admin.menu_group.table_record')
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</body>
<div class="modal fade" id="m-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>
@include('admin.modals.confirm_modal');
<!--end::Body-->
@include('admin.footer')
<script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    })
    $(document).ready(function () {
        const prefix = "{{$prefix}}";
        $(document).on('click','.m-modal',function(){
            let code = $(this).attr('data-edit');
            $.ajax({
                type: "GET",
                url: `/${prefix}/getmodal`,
                data:{
                    code : code
                },
                success: function (response) {
                   $('#m-modal').html("");
                   $('#m-modal').html(response.view);
                   $('.custome_select2').select2();
                   $('#m-modal').modal('show');
                }
            });
        })
      $(document).on('click','.m-table-submit',function(e){
            $.ajax({
                type: "POST",
                url: `/${prefix}/submit`,
               data: $('.form').serialize(),
                success: function (response) {
                    if(response.status == 'success'){
                        $('#m-modal').modal('hide');
                        $('.card-body').html("");
                        $('.card-body').html(response.view);
                    }
                }
            });
      })
      $(document).on('click','.delete',function(e){
        let code = $(this).attr('data-delete');
        $('#m-confirm').modal('show');
        $('.m-confirm-submit').attr('data-code',code);

      })
      $(document).on('click','.m-confirm-submit',function(e){
        let code = $(this).attr('data-code')
        $.ajax({
            type: "POST",
            url: `/${prefix}/delete`,
            data: {
                code : code
            },
            success: function (response) {
                if (response.status == 'success'){
                    $('#m-confirm').modal('hide');
                    $(document).find(`#${code}`).remove();
                }
            }
        });
      });
      $(document).on('click','.export_excel',function(e){
        $.ajax({
            type: "GET",
            url: `/${prefix}/export`,
            success: function (response) {
                console.log("Done");
            }
        });
      })
    });
</script>
</html>
