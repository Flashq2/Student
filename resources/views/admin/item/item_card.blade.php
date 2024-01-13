<!DOCTYPE html>
<html lang="en">
@include('admin.header')
<style>
    .be_collap {
        width: 100%;
        padding: 10px;
        background-color: #e9e9e9;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>

<body id="kt_body" class="aside-enabled">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <div id="kt_aside" class="aside">
                @include('admin.side_left')
                @include('admin.side_top')
            </div>
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                @include('admin.title_head')
                {{-- Content of Page --}}
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-9">
                                <button class="btn btn-primary {{ isset($_GET['code']) ? 'edit_item' : 'create' }} ">
                                    @if (isset($_GET['code']))
                                        Edit
                                    @else
                                        Save
                                    @endif
                                </button>
                                <button class="btn btn-info">Save & New</button>
                                <button class="btn btn-warning">Publish to Client</button>
                                <button class="btn btn-warning btn-Image" data-code ='{{$_GET['code'] ?? ''}}' >Add Picture</button>
                                <button class="btn btn-warning">Item Spectification</button>
                            </div>
                            <div class="col-3">
                                <select class="form-select custome_select2-live" data-control="select2" id="search-item"
                                    data-placeholder="Search Item" name="" id="">
                                    <option value="">&nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <form class="form">
                            <input type="hidden" name="is_code" id="is_code" value="{{ $_GET['code'] ?? '' }}">
                            <div class="row">
                                @foreach ($col_record->groupBy('table_id') as $key => $value)
                                    <div class="col-xs-12">
                                        <div class="be_collap">
                                            <b>{{ $value[0]['table_name'] }}</b>
                                            <b><i class="fa-solid fa-arrows-up-down"></i></b>
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            @foreach ($col_record->where('table_name', $value[0]['table_name']) as $item)
                                                @if ($item->field_type == 'text' || $item->field_type == 'number')
                                                    @if ($item->filed_name == 'inactived')
                                                        <div class="col-lg-6">
                                                            <div class="mb-10">
                                                                <label for="{{ $item->filed_name }}"
                                                                    class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                                <select class="form-select custome_select2"
                                                                    data-control="select2"
                                                                    data-placeholder="Select an option"
                                                                    name="{{ $item->filed_name }}"
                                                                    id="{{ $item->filed_name }}"
                                                                    >
                                                                    <option
                                                                        {{ isset($record['inactived']) && $record['inactived'] == 'no' ? 'selected' : '' }}
                                                                        value="no">No</option>
                                                                    <option
                                                                        {{ isset($record['inactived']) && $record['inactived'] == 'yes' ? 'selected' : '' }}
                                                                        value="yes">Yes</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    @elseif(isset($_GET['type']) && $_GET['type'] == 'up' && $item->filed_name == 'code')
                                                        <div class="col-lg-6">
                                                            <div class="mb-10">
                                                                <label for="{{ $item->filed_name }}"
                                                                    class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                                <input type="text" class="form-control "
                                                                    id="{{ $item->filed_name }}"
                                                                    placeholder="{{ $item->filed_name }}"
                                                                    maxlength="{{ $item->max_lenght }}"
                                                                    name="{{ $item->filed_name }}"
                                                                    value="{{ $record[$item->filed_name] ?? '' }}"
                                                                    readonly disabled />
                                                            </div>
                                                        </div>
                                                    @elseif(isset($_GET['type']) && $_GET['type'] == 'md' && $item->filed_name != 'code')
                                                        <div class="col-lg-6">
                                                            <div class="mb-10">
                                                                <label for="{{ $item->filed_name }}"
                                                                    class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                                <input type="text" class="form-control "
                                                                    id="{{ $item->filed_name }}"
                                                                    placeholder="{{ $item->filed_name }}"
                                                                    maxlength="{{ $item->max_lenght }}"
                                                                    name="{{ $item->filed_name }}"
                                                                    value="{{ $record[$item->filed_name] ?? '' }}"
                                                                    readonly disabled />
                                                            </div>
                                                        </div>
                                                    @elseif(!isset($_GET['type']))
                                                        <div class="col-lg-6">
                                                            <div class="mb-10">
                                                                <label for="{{ $item->filed_name }}"
                                                                    class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                                <input type="text" class="form-control "
                                                                    id="{{ $item->filed_name }}"
                                                                    placeholder="{{ $item->filed_name }}"
                                                                    maxlength="{{ $item->max_lenght }}"
                                                                    name="{{ $item->filed_name }}"
                                                                    value="{{ $record[$item->filed_name] ?? '' }}" />
                                                            </div>
                                                        </div>
                                                    @else
                                                        <div class="col-lg-6">
                                                            <div class="mb-10">
                                                                <label for="{{ $item->filed_name }}"
                                                                    class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                                <input type="text" class="form-control {{$item->filed_name}}"
                                                                    id="{{ $item->filed_name }}"
                                                                    placeholder="{{ $item->filed_name }}"
                                                                    maxlength="{{ $item->max_lenght }}"
                                                                    name="{{ $item->filed_name }}"
                                                                    value="{{ $record[$item->filed_name] ?? '' }}" />
                                                            </div>
                                                        </div>
                                                    @endif
                                                @elseif($item->field_type == 'select2')
                                                    <div class="col-lg-6">
                                                        <div class="mb-10">
                                                            <label for="{{ $item->filed_name }}"
                                                                class=" {{ $item->on_validate == 'yes' ? 'required' : '' }} form-label">{{ $item->filed_name }}</label>
                                                            <select class="form-select custome_select2"
                                                                data-control="select2"
                                                                data-placeholder="Select an option"
                                                                name="{{ $item->filed_name }}"
                                                                id="{{ $item->filed_name }}"
                                                                {{ isset($_GET['type']) && $_GET['type'] == 'md' ? 'disabled readonly' : '' }}>
                                                                <option value="">&nbsp;</option>
                                                                <?php
                                                                $data_record = \DB::table($item->table_relate)->get();
                                                                $primary = $item->table_code_relate;
                                                                $description = $item->table_description_relate;
                                                                ?>
                                                                @foreach ($data_record as $data)
                                                                    <option value="{{ $data->$primary }}"
                                                                        {{ isset($record[$item->filed_name]) && $record[$item->filed_name] == $data->$primary ? 'selected' : '' }}>
                                                                        {{ $data->$description ? $data->$description : '-' }}
                                                                    </option>
                                                                @endforeach

                                                            </select>
                                                        </div>
                                                    </div>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </form>

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
    $(document).ready(function() {
        const prefix = "item";
        $(document).on('click', '.create', function(e) {
            $.ajax({
                type: "POST",
                url: `/${prefix}/create`,
                data: $('.form').serialize(),
                beforeSend: function() {
                    $('.global_laoder').show();
                },
                success: function(response) {
                    if (response.status == 'success') {
                        $('.global_laoder').hide();
                        window.location.replace(response.url);
                    }
                }
            });
        })

        $(document).on('click', '.edit_item', function(e) {
            $.ajax({
                type: "POST",
                url: `/${prefix}/update`,
                data: $('.form').serialize(),
                beforeSend: function() {
                    $('.global_laoder').show();
                },
                success: function(response) {
                    if (response.status == 'success') {
                        $('.global_laoder').hide();
                        notyf.success(response.msg);
                    } else {
                        notyf.error(response.msg);
                    }
                }
            });
        });
        $(document).on('keyup','.code',function(){
            $('.code').val($(this).val());
        });
        $(document).on('click','.btn-browse',function(){
            $('.upload-item').trigger('click');
        });

        $(document).on('click','.btn-Image',function(){
            let code = $(this).attr('data-code');
            $.ajax({
                type: "GET",
                url: `/${prefix}/getImage`,
                data : {
                    code :code
                },
                beforeSend: function() {
                    $('.global_laoder').show();
                },
                success: function (response) {
                    if(response.status == 'success'){
                        $('.global_laoder').hide();
                        $('#imageModal').modal('show');
                        $('.PreImage').html();
                        $('.PreImage').html(response.view);
                    }
                }
            });
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
                    $('.append_file').append(`
                    <div class="col-3">
                    <div class="drag-image">
                    <img src="${response.path}" alt="">
                    </div>
                </div>
                    `);
                }
            });
        });
        $(document).on('click','.delete_image',function (param) { 
            let id = $(this).attr('data-id');
            $.ajax({
                type: "POST",
                url: `/${prefix}/DeleteImage`,
                beforeSend: function() {
                    $('.global_laoder').show();
                },
                data: {
                    id : id
                },
                success: function (response) {
                    if (response.status == 'success') {
                        $(`.row_${id}`).remove();
                        $('.global_laoder').hide();
                        notyf.success(response.msg);
                    } else {
                        notyf.error(response.msg);
                    }
                }
            });
         })
         
    });
 
</script>

</html>
