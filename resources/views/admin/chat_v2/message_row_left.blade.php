<div class="chats">
    <div class="chat-avatar">
        <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
            alt="image">
    </div>
    <div class="chat-content">
        <div class="message-content">
            {{$messages->message_data}}
            <div class="chat-time">
                <div>
                    <div class="time"><i class="fas fa-clock"></i>  {{Carbon\Carbon::parse($messages->created_at)->diffForHumans()}}</div>
                </div>
            </div>
        </div>
        <div class="chat-profile-name">
            <h6> {{$user->name}}</h6>
        </div>
    </div>
    <div class="chat-action-btns ms-3">
        <div class="chat-action-col">
            <a class="#" href="#" data-bs-toggle="dropdown">
                <i class="fas fa-ellipsis-h"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
                <a href="#" class="dropdown-item dream_profile_menu">Copy <span><i
                            class="far fa-copy"></i></span></a>
                <a href="#" class="dropdown-item">Save <span
                        class="material-icons">save</span></a>
                <a href="#" class="dropdown-item">Forward <span><i
                            class="fas fa-share"></i></span></a>
                <a href="#" class="dropdown-item">Delete <span><i
                            class="far fa-trash-alt"></i></span></a>
            </div>
        </div>
    </div>
</div>