<div class="modal-dialog modal-xl">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modify</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form class="form">
                <input type="hidden" name="is_code" id="is_code" value="{{$code ?? ''}}">
                <div class="row">
                    @foreach ($col_record as $item)
                        @if ($item->field_type == 'text')
                            @if ($item->filed_name == 'inactived')
                                <div class="col-lg-6">
                                    <div class="mb-10">
                                        <label for="{{ $item->filed_name }}" class="required form-label">{{ $item->filed_name }}</label>
                                        <select class="form-select custome_select2" data-control="select2"
                                            data-placeholder="Select an option" name="{{ $item->filed_name }}"
                                            id="{{ $item->filed_name }}" data-dropdown-parent="#m-modal" >
                                            <option {{(isset($record['inactived'])  &&  $record['inactived'] == 'no' ? 'selected' : '')}}  value="no">No</option>
                                            <option {{(isset($record['inactived'])  &&  $record['inactived'] == 'yes' ? 'selected' : '')}}  value="yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                            @else
                                <div class="col-lg-6">
                                    <div class="mb-10">
                                        <label for="{{ $item->filed_name }}" class="required form-label">{{ $item->filed_name }}</label>
                                        <input type="text" class="form-control " id="{{ $item->filed_name }}"
                                            placeholder="{{ $item->filed_name }}" maxlength="{{ $item->max_lenght }}"
                                            name="{{ $item->filed_name }}"
                                            value="{{ $record[$item->filed_name] ?? '' }}" />
                                    </div>
                                </div>
                            @endif
                        @elseif($item->field_type == 'select2')
                            <div class="col-lg-6">
                                <div class="mb-10">
                                    <label for="{{ $item->filed_name }}" class="required form-label">{{ $item->filed_name }}</label>
                                    <select class="form-select custome_select2" data-control="select2"
                                        data-placeholder="Select an option" name="{{ $item->filed_name }}" data-dropdown-parent="#m-modal"
                                        id="{{ $item->filed_name }}">
                                         <?php
                                             $data_record = \DB::table($item->table_relate)->get();
                                             $primary = $item->table_code_relate;
                                             $description = $item->table_description_relate
                                         ?>
                                         @foreach ($data_record as $data)
                                             <option value="{{$data->$primary}}" {{(isset($record[$data->$primary])  &&  $record[$data->$primary] == $data->$primary ? 'selected' : '')}}>{{$data->$description}}</option>
                                         @endforeach

                                    </select>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>

            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary m-table-submit" data-isEdit = {{$code ?? ""}}>Submit</button>
        </div>
    </div>
</div>
