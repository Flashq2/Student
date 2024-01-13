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
                                <h1 class="d-flex flex-column text-gray-900 fw-bold fs-3 mb-0"> Table </h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {{-- Content of Page --}}
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                   
                    <div class="container-xxl">
                        <button class="btn btn-info m-table">Add New</button> <br>
                        <div class="card">
                          
                            <div class="card-body pt-0">
                                <div id="kt_customers_table_wrapper"
                                    class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="table">
                                        <table class="table align-middle mb-0 bg-white table-striped table-hover">
                                            <thead class="bg-light">
                                              <tr>
                                                <th></th>
                                                <th>Id</th>
                                                <th>Table ID</th>
                                                <th>Table Name</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                              </tr>
                                            </thead>
                                            <tbody class="tbody">
                                                @include('admin.tables.table_row')
                                            </tbody>
                                          </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    @include('admin.tables.table_card')
</body>
<!--end::Body-->
@include('admin.footer')
<script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
    $(document).ready(function () {
        $(document).on('click','.m-table',function(e){
           $('#m-table').modal('show');
        });
        $(document).on('click','.m-table-submit',function(e){
           $.ajax({
            type: "POST",
            url: "/table/add_table",
            data: $('.form').serialize(),
            success: function (response) {
                if(response.status == 'success'){
                    $('#m-table').modal('hide');
                    $('.tbody').html('');
                    $('.tbody').html(response.view);
                }
            }
           });
        });

    });
</script>

</html>
