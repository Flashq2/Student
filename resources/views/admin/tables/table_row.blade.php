@foreach ($record as $item)
<tr>
    <td><a href="{{url('table/table_field?code=')}}{{App\MainSystem\system::Encr_string($item->id,null,null)}}"> <button type="button" class="btn btn-primary btn-md pd-1"> View </button></a></td>
    <td>{{$item->id}}</td>
    <td>{{$item->table_id}}</td>
    <td>{{$item->table_name}}</td>
    <td>{{$item->created_at}}</td>
    <td>{{$item->updated_at}}</td>
</tr>
@endforeach