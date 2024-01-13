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
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModals" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="imageModals">Upload Image</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          
            <div class="modal-body PreImage" >
                
            </div>
          </div>
        </div>
      </div>
</body>
{{-- <div class="modal fade" id="m-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"></div> --}}
@include('admin.modals.confirm_modal');
<!--end::Body-->
@include('admin.footer')
<script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
    $(document).ready(function () {
        const prefix = "{{$prefix}}";
        $(document).on('click','.m-modal',function(e){
            let code = $(this).data('edit');
            $.ajax({
                type: "GET",
                data : {
                    code : code
                },
                url: `/${prefix}/getmodal`,
                success: function (response) {
                    $('.PreImage').html();
                        $('.PreImage').html(response.view);
                   $('.custome_select2').select2();
                   $('#imageModal').modal('show');
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
      $(document).on('click','.btn-browse',function(){
            $('.upload-item').trigger('click');
        });
      $(document).on('change','#file',function(){
            let file=$('#file').val();
            let data=new FormData(formimg);
            $.ajax({
                type: "POST",
                url: `/${prefix}/UploadImage`,
                data: data,
                processData: false,
                contentType: false,
                success: function (response) {
                    notyf.success(response.msg);
                }
            });
        });
 
    });
</script>
</html>
