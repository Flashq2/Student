
<?php
$picture_field = ['picture_ori', 'picture_128bit', 'picture_64bit'];
$tbl_no_edit = ['slide_show'];

?>
<div class="control-table">
    <table class="table bg-white table-hover">
        <thead class="bg-white">
            <tr>
                @if (!isset($excell))
                <th width="30px"></th>
            @endif
            @foreach ($col_record as $col)
                <th class="col-md-2"><b>{{ $col->filed_name }}</b></th>
            @endforeach
            </tr>
            
        </thead>
        <tbody>
            @foreach ($record as $item)
                <tr id='{{ $item->id }}'>
                    @if (!isset($excell))
                        @if (isset($link_record))
                            <td style="white-space: nowrap;"> <a
                                    href="{{ $link_record . '?para=item&group=items&type=up&code=' . $item->edit_code }}">
                                    <button class="btn btn-primary edit m-modal"
                                        data-edit={{ $item->edit_code }}>Edit</button></a>
                                @if (!in_array($col_record[0]['table_name'], $tbl_no_edit))
                                    <button class="btn btn-danger delete"
                                        data-delete={{ $item->edit_code }}>Delete</button>
                                    </td>
                                 @endif
                        @else
                            <td style="white-space: nowrap;">
                                @if (!in_array($col_record[0]['table_name'], $tbl_no_edit))
                                    <button class="btn btn-primary edit m-modal" data-edit={{ $item->id }}>Edit</button>
                                @endif
                                <button class="btn btn-danger delete" data-delete={{ $item->id }}>Delete</button>
                            </td>
                        @endif
                    @endif
                    @foreach ($col_record as $col)
                    <?php  $col_name = $col->filed_name?>
                        @if (in_array($col_name, $picture_field) && !isset($excell))
                            <td style="white-space: nowrap;">
                                <img src="{{ $item->$col_name ? $item->$col_name : asset('/storage/no_image.jpg') }}"
                                    alt="" class="list-img"
                                    style="width: 51px !important;
                                                height: 30px !important;
                                                object-fit: contain !important;">
                            </td>
                        @else
                            <td style="white-space: nowrap;">{{ $item->$col_name }}</td>
                        @endif
                    @endforeach
            </tr>
            @endforeach
        </tbody>
    </table>
    @if (!isset($excell))
        {{ $record->links('pagination::bootstrap-4') }}
    @endif
</div>
