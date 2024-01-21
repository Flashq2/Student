@foreach ($connection as $connect)
    <li class="user-list-item" 
        data-uuid = "{{$connect->uuid}}"
        data-connection_with = "{{$connect->connection_with}}"
        data-connection_from = "{{$connect->connection_from}}"
        data-connect_to = "{{$connect->connection_to}}">
        <div>
            <div class="avatar avatar-away">
                <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                    alt="image">
            </div>
        </div>
        <div class="users-list-body">
            <div>
                <h5>{{$connect->connection_with}}</h5>
                <p>It seems logical that the</p>
            </div>
            <div class="last-chat-time">
                <small class="text-muted">05 min</small>
                <div class="new-message-count">11</div>
            </div>
        </div>
    </li>
@endforeach