<div class="slimscroll">
    @include('admin.chat_v2.message_header')
    <div class="chat-body">
        <div class="messages message_{{$connection[0]}}_{{Auth::user()->id}}">
            {{-- <div class="chats">
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-content">
                    <div class="message-content">
                        Hi James! What’s Up?
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name">
                        <h6>Doris Brown</h6>
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
            <div class="chats chats-right">
                <div class="chat-content">
                    <div class="message-content">
                        Good morning, How are you? What about our next meeting?
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name text-end">
                        <h6>Alexandr</h6>
                    </div>
                </div>
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-action-btns me-2">
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
                    <div class="chat-read-col">
                        <span class="material-icons">done_all</span>
                    </div>
                </div>
            </div>
            <div class="chats">
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-content">
                    <div class="message-content">
                        & Next meeting tomorrow 10.00AM
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:06</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name">
                        <h6>Doris Brown</h6>
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
            <div class="chat-line">
                <span class="chat-date">Today</span>
            </div>
            <div class="chats chats-right">
                <div class="chat-content">
                    <div class="message-content">
                        Wow Thats Great
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:02</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name text-end">
                        <h6>Alexandr</h6>
                    </div>
                </div>
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-action-btns me-2">
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
                    <div class="chat-read-col">
                        <span class="material-icons">done_all</span>
                    </div>
                </div>
            </div>
            <div class="chats">
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-content">
                    <div class="message-content">
                        <div class="download-col">
                            <ul>
                                <li>
                                    <div class="image-download-col">
                                        <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                            class="fancybox">
                                            <img src="assets/img/chat-download.jpg" alt="">
                                        </a>
                                        <div class="download-action d-flex align-items-center">
                                            <div><a href="#"><i
                                                        class="fas fa-cloud-download-alt"></i></a>
                                            </div>
                                            <div><a href="#"><i
                                                        class="fas fa-ellipsis-h"></i></a></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="image-download-col image-not-download">
                                        <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                            class="fancybox">
                                            <img src="assets/img/chat-download.jpg" alt="">
                                        </a>
                                        <div class="download-action d-flex align-items-center">
                                            <div><a href="#"><i
                                                        class="fas fa-cloud-download-alt"></i></a>
                                            </div>
                                            <div><a href="#"><i
                                                        class="fas fa-ellipsis-h"></i></a></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="image-download-col image-not-download">
                                        <a href="assets/img/chat-download.jpg" data-fancybox="gallery"
                                            class="fancybox">
                                            <img src="assets/img/chat-download.jpg" alt="">
                                        </a>
                                        <div class="download-action d-flex align-items-center">
                                            <div><a href="#"><i
                                                        class="fas fa-cloud-download-alt"></i></a>
                                            </div>
                                            <div><a href="#"><i
                                                        class="fas fa-ellipsis-h"></i></a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name">
                        <h6>Doris Brown</h6>
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
            <div class="chats chats-right">
                <div class="chat-content">
                    <div class="message-content">
                        <div class="file-download d-flex align-items-center">
                            <div
                                class="file-type d-flex align-items-center justify-content-center me-2">
                                <i class="far fa-file-archive"></i>
                            </div>
                            <div class="file-details">
                                <span class="file-name">filename.zip</span>
                                <span class="file-size">10.6MB</span>
                            </div>
                            <div class="download-action d-flex align-items-center">
                                <div><a href="#"><i class="fas fa-cloud-download-alt"></i></a>
                                </div>
                                <div><a href="#"><i class="fas fa-ellipsis-h"></i></a></div>
                            </div>
                        </div>
                        <div class="chat-time">
                            <div>
                                <div class="time"><i class="fas fa-clock"></i> 10:02</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-profile-name text-end">
                        <h6>Alexandr</h6>
                    </div>
                </div>
                <div class="chat-avatar">
                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                        alt="image">
                </div>
                <div class="chat-action-btns me-2">
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
                    <div class="chat-read-col">
                        <span class="material-icons">done_all</span>
                    </div>
                </div>
            </div> --}}
        
            @foreach ($message as $data)
                @if(Auth::user()->email == $data->from_user)
                    @include('admin.chat_v2.message_row_left',['messages'=>$data,'user' => $current_user])
                @else
                @include('admin.chat_v2.message_row',['messages'=>$data,'user' => $current_user])
                @endif
            @endforeach
    
        </div>
    </div>
    @include('admin.chat_v2.input')
    
 </div>

 {{-- Block Input Message --}}





