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
                <div id="kt_header" style="" class="header  align-items-stretch">
                    <div class="header-brand">
                    </div>
                    <div class="toolbar d-flex align-items-stretch">
                        <div
                            class=" container-xxl  py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between">
                            <div class="page-title d-flex justify-content-center flex-column me-5">
                                <h1 class="d-flex flex-column text-gray-900 fw-bold fs-3 mb-0"> Table Field </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                    <div class="container-xxl">
                        <div class="card">
                            <div class="card-header border-0 pt-6">
                                <div class="card-title">
                                    <div class="d-flex align-items-center position-relative my-1">
                                         <input
                                            type="text" data-kt-customer-table-filter="search"
                                            class="form-control form-control-solid w-250px ps-12"
                                            placeholder="Search Customers">
                                    </div>
                                </div>
                                <div class="card-toolbar">
                                    <!--begin::Toolbar-->
                                    <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                                        <!--begin::Filter-->
                                        <button type="button" class="btn btn-light-primary me-3"
                                            data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="fa-solid fa-magnifying-glass"></i> Filter
                                        </button>
                                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                                            data-bs-target="#kt_customers_export_modal">
                                            <i class="fa-solid fa-file-export"></i> Export
                                        </button>
                                        <button type="button" class="btn btn-primary m-confirm">
                                            Build Table
                                        </button>
                                    </div>
                                    <div class="d-flex justify-content-end align-items-center d-none"
                                        data-kt-customer-table-toolbar="selected">
                                        <div class="fw-bold me-5">
                                            <span class="me-2" data-kt-customer-table-select="selected_count"></span>
                                            Selected
                                        </div>

                                        <button type="button" class="btn btn-danger"
                                            data-kt-customer-table-select="delete_selected">
                                            Delete Selected
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" style="overflow: scroll !importante">
                                  @include('admin.table_filed.table_record')
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</body>
@include('admin.modals.confirm_modal')
@include('admin.footer')
<script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
    $(document).ready(function () {
        $(document).on('click','.m-table-submit',function(e){
           $.ajax({
            type: "POST",
            url: "/table/add_table",
            data: $('.form').serialize(),
            success: function (response) {
                if(response.status == 'success'){
                    console.log('Submit');
                }
            }
           });
        });
        $(document).on('click','.m-confirm',function(e){
            $('#m-confirm').modal('show');
        })
        $(document).on('click','.m-confirm-submit',function(e){
            let code = $(this).data('code');
            let data ={
                code:code,
            }
            $.ajax({
                type: "POST",
                url: "/table/build",
                data:data,
                success: function (response) {
                    $('#m-confirm').modal('hide');
                    $('.card-body').html("");
                    $('.card-body').html(response.view);
                }
            });
        })
        $(document).on('click', '.pagination a', function(event){
            event.preventDefault();
            var page = $(this).attr('href').split('page=')[1];
            let code = "{{$_GET['code']}}";
            let data = {
                page : page,
                code : code
            }
            $.ajax({
                type: "GET",
                url: "/table/ajaxpagination",
                data: data,
                success: function (response) {
                    if(response.status == 'success'){
                    $('.card-body').html("");
                    $('.card-body').html(response.view);
                    }

                }
            });
        });

    });
</script>

</html>
