<ul class="user-list mt-2" id="ListofConnection">
    {{-- <li class="user-list-item">
        <div class="avatar avatar-online">
            <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                alt="image">
        </div>
        <div class="users-list-body">
            <div>
                <h5>Regina Dickerson</h5>
                <p>It seems logical that the</p>
            </div>
            <div class="last-chat-time">
                <small class="text-muted">05 min</small>
                <div class="new-message-count">11</div>
            </div>
        </div>
    </li>
    <li class="user-list-item">
        <div>
            <div class="avatar avatar-away">
                <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                    alt="image">
            </div>
        </div>
        <div class="users-list-body">
            <div>
                <h5>Forest Kroch</h5>
                <p>It seems logical that the</p>
            </div>
            <div class="last-chat-time">
                <small class="text-muted">05 min</small>
                <div class="new-message-count">11</div>
            </div>
        </div>
    </li> --}}
    {{-- <li class="user-list-item item-typing">
        <div>
            <div class="avatar avatar-online">
                <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                    alt="image">
            </div>
        </div>
        <div class="users-list-body">
            <div>
                <h5>Regina Dickerson</h5>
                <p><span class="animate-typing-col">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </span>
                </p>
            </div>
            <div class="last-chat-time">
                <small class="text-muted">05 min</small>
            </div>
        </div>
    </li> --}}
    @foreach ($connection as $connect)
        <li class="user-list-item" 
            data-uuid = "{{$connect->id}}"
            data-connection_with = "{{$connect->connection_with}}"
            data-connection_from = "{{$connect->connection_from}}"
            data-connect_to = "{{$connect->connection_to}}"
            onclick="DoDisplayChat(this)"
            >
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

</ul>