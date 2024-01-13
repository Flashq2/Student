
@include('admin.modals.upload_excel')
<div class="card-header border-0 pt-6">
    <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
            <input type="text" data-kt-customer-table-filter="search"
                class="form-control form-control-solid w-250px ps-12" placeholder="Search {{ $page }}">
        </div>
    </div>
    <div class="card-toolbar">
        <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
            <button type="button" data-bs-toggle="collapse" data-bs-target="#CollapSearch" aria-expanded="false"
                aria-controls="CollapSearch" class="btn btn-light-primary me-3">
                <i class="fa-solid fa-magnifying-glass"></i> Filter
            </button>
            <button type="button" class="btn btn-light-danger me-3 export_excel" data-table='{{$prefix}}'>
                <i class="fa-solid fa-file-export"></i> Exports Excel
            </button>
            <button type="button" class="btn btn-light-success me-3 import_excell" data-table='{{$prefix}}'>
                <i class="fa-solid fa-file-import"></i> Imports Excel
            </button>
            <button type="button" class="btn btn-primary m-modal">
                Add {{ $page }}
            </button>
        </div>
        <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
            <div class="fw-bold me-5">
                <span class="me-2" data-kt-customer-table-select="selected_count"></span>
                Selected
            </div>

            <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected">
                Delete Selected
            </button>
        </div>
    </div>
</div>
<div class="row collapse" id="CollapSearch">
    <div class="col-12">
        <div class="page_search_card">
            <span class="title-adance_search">Advance Search</span>
            <br>
            <form class="advance_search">
                <div class="row">
                    @foreach ($col_record->groupBy('table_id') as $key => $value)
                        <div class="container">
                            <div class="row">
                                @foreach ($col_record->where('table_name', $value[0]['table_name']) as $item)
                                    @if ($item->field_type == 'text')
                                        @if ($item->filed_name == 'inactived')
                                            <div class="col-lg-4">
                                                <div class="mb-10">
                                                    <label for="{{ $item->filed_name }}"
                                                        class=" form-label">{{ $item->filed_name }}</label>
                                                    <select class="form-select custome_select2" data-control="select2"
                                                        data-placeholder="Select an option"
                                                        name="{{ $item->filed_name }}" id="{{ $item->filed_name }}">
                                                        <option
                                                            {{ isset($record['inactived']) && $record['inactived'] == 'no' ? 'selected' : '' }}
                                                            value="no">No</option>
                                                        <option
                                                            {{ isset($record['inactived']) && $record['inactived'] == 'yes' ? 'selected' : '' }}
                                                            value="yes">Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                        @else
                                            <div class="col-lg-4">
                                                <div class="mb-10">
                                                    <label for="{{ $item->filed_name }}"
                                                        class=" form-label">{{ $item->filed_name }}</label>
                                                    <input type="text" class="form-control "
                                                        id="{{ $item->filed_name }}"
                                                        placeholder="{{ $item->filed_name }}"
                                                        maxlength="{{ $item->max_lenght }}"
                                                        name="{{ $item->filed_name }}"
                                                        value="{{ $record[$item->filed_name] ?? '' }}" />
                                                </div>
                                            </div>
                                        @endif
                                    @elseif($item->field_type == 'select2')
                                        <div class="col-lg-4">
                                            <div class="mb-10">
                                                <label for="{{ $item->filed_name }}"
                                                    class=" form-label">{{ $item->filed_name }}</label>
                                                <select class="form-select custome_select2" data-control="select2"
                                                    data-placeholder="Select an option" name="{{ $item->filed_name }}"
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
                                                            {{ isset($record[$data->$primary]) && $record[$data->$primary] == $data->$primary ? 'selected' : '' }}>
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
            <br>
            <button type="button" class="btn btn-light-primary me-3 btn-adSearch" data-page="{{$prefix}}">
                Search
            </button>
            <button type="button" class="btn btn-light-danger me-3 export_excel" data-page="{{$prefix}}">
                Search & Export
            </button>
        </div>
    </div>
</div>
