

@foreach ($record as $list)
<li class="user-list-item " style="background-color: #3b3b3b" data-email = "{{$list->email}}" onclick="DoCreateConnect(this)">

    <div class="avatar avatar-online">
        <img src="http://127.0.0.1:8000/image/no_image.jpg" class="rounded-circle" alt="image">
    </div>
    <div class="users-list-body" data-email = "{{$list->email}}">
        <div>
            <h5>{{$list->name}}</h5>
            <p>{{$list->role}}</p>
        </div>
    </div>

</li>

@endforeach