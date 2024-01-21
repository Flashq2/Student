<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Setec Message</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
    <script src="https://kit.fontawesome.com/bca9825c0c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css1.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css2.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css3.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css4.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/admin/chart_css5.css') }}">
</head>
<style>
    .header-top {
        background: #ffff;
    }
</style>

<body>

    <!-- Main Wrapper -->
    <div class="main-wrapper">

        <!-- content -->
        <div class="content main_content">

            <!-- sidebar group -->
            <div class="sidebar-group left-sidebar chat_sidebar">
                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active">
                    <div class="header">
                        <div class="header-top">
                            <div class="logo ms-2 mt-3">
                                <a href="{{ url('/chat') }}">
                                    <img src="https://www.setecu.com/images/sampledata/icetheme/logo.png"
                                        class="header_image img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                        <ul class="nav nav-tabs chat-tabs mt-4">
                            <li class="nav-item">
                                <a class="nav-link  active" href="index.html">Chat</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="group.html">Group</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="status.html">Status</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="call-log.html">Call</a>
                            </li>
                        </ul>
                        <button type="button" class="float-end btn btn-circle btn-sm header_button"
                            data-bs-toggle="modal" data-bs-target="#chat-new">
                            <i class="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div class="search_chat has-search">
                        {{-- <span class="fas fa-search form-control-feedback"></span> --}}
                        <input class="form-control chat_input" id="search-contact" type="text"
                            placeholder="Search ...">
                    </div>
                    <div class="sidebar-body" id="chatsidebar">
                        <ul class="user-list">
                            <li class="user-list-item">
                                <div class="avatar avatar-online">
                                    <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle" alt="image">
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">14:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
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
                                        <h5>Kevin Howard</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">08:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="#" class="dropdown-item">Open</a>
                                                    <a href="#" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="#" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="#" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- / Chats sidebar -->
            </div>
            <!-- /Sidebar group -->

            <!-- Chat -->
            <div class="chat" id="middle">
                <div class="chat-header">
                    <div class="user-details">
                        <div class="d-lg-none ms-2">
                            <ul class="list-inline mt-2 me-2">
                                <li class="list-inline-item">
                                    <a class="text-muted px-0 left_side" href="#" data-chat="open">
                                        <i class="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure class="avatar ms-1">
                            <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle" alt="image">
                        </figure>
                        <div class="mt-1">
                            <h5 class="mb-1">Scott Albright</h5>
                            <small class="text-muted mb-2">
                                Active 35m ago
                            </small>
                        </div>
                    </div>
                    <div class="chat-options">
                        <ul class="list-inline">
                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                title="Voice call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#voice_call">
                                    <i class="fas fa-phone-alt voice_chat_phone"></i>
                                </a>
                            </li>
                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                title="Video call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#video_call">
                                    <i class="fas fa-video"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light" href="#" data-bs-toggle="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="#" class="dropdown-item dream_profile_menu">Profile</a>
                                    <a href="#" class="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-body">
                    <div class="messages">
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                                    alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    Hi James! What’s Up?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-action-btns">
                                <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i
                                                class="fas fa-share"></i></a>
                                    </li>
                                    <li><a href="#" class="edit-msg"><i class="fas fa-edit"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fas fa-trash-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="chats chats-right">
                            <div class="chat-content">
                                <div class="message-content">
                                    Oh, hello! All perfectly. I work, study and know this wonderful world!
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:38 PM <i><img
                                                    src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                                                    alt="image">
                                            </i></div>
                                    </div>
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
                                    Ok Cool, Where you from
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:40 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats chats-right">

                            <div class="chat-content">
                                <div class="message-content">
                                    I am from California, and you?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:42 PM <i> <img
                                                    src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                                                    alt="image">
                                            </i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-line">
                            <span class="chat-date">Today</span>
                        </div>

                        <div class="chats">
                            <div class="chat-avatar">

                                <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle dreams_chat"
                                    alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    I am from Australia, and where you working?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-footer">
                    <form>
                        <input type="text" class="form-control chat_form" placeholder="Write a message.">
                        <div class="form-buttons">
                            <button class="btn" type="button">
                                <i class="far fa-smile"></i>
                            </button>
                            <button class="btn" type="button" data-bs-toggle="modal"
                                data-bs-target="#drag_files">
                                <i class="fas fa-paperclip"></i>
                            </button>
                            <button class="btn" type="button">
                                <i class="fas fa-microphone-alt"></i>
                            </button>
                            <button class="btn send-btn" type="submit">
                                <i class="fab fa-telegram-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /Chat -->

            <!-- Upload Documents -->
            <div id="drag_files" class="modal fade" role="dialog">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Drag and drop files upload</h4>
                            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form id="js-upload-form">
                                <div class="upload-drop-zone" id="drop-zone">
                                    <i class="fa fa-cloud-upload fa-2x"></i> <span class="upload-text">Just drag and
                                        drop files here</span>
                                </div>
                            </form>
                            <div class="text-center mt-0">
                                <button class="btn newgroup_create m-0" data-bs-dismiss="modal">Add to upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Upload Documents -->

            <!-- Voice call -->
            <div class="modal fade voice_pop" id="voice_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ms-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="{{ asset('/image/no_image.jpg') }}"
                                                class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="#" class="btn call-item call-end" data-bs-dismiss="modal">
                                                <i class="fas fa-phone-alt phone_icon"></i>
                                            </a>
                                            <a href="#" class="btn call-item call-start"
                                                data-bs-dismiss="modal">
                                                <i class="fas fa-phone-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Voice call -->

            <!-- Video Call -->
            <div class="modal fade voice_pop" id="video_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ms-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="{{ asset('/image/no_image.jpg') }}"
                                                class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="#" class="btn call-item call-end" data-bs-dismiss="modal">
                                                <i class="fas fa-phone-alt phone_icon"></i>
                                            </a>
                                            <a href="#" class="btn call-item call-start"
                                                data-bs-dismiss="modal">
                                                <i class="fas fa-video"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Video Call -->

            <!-- Chat New Modal -->
            <div class="modal fade" id="chat-new">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Add Friends
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Card -->
                            <form action="new-friends">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input class="form-control form-control-lg group_formcontrol"
                                        name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control form-control-lg group_formcontrol"
                                        name="new-chat-title" type="email" placeholder="tobiaswilliams@gmail.com">
                                </div>
                            </form>
                            <!-- Card -->
                            <div class="form-row profile_form mt-3 mb-1">
                                <!-- Button -->
                                <button type="button" class="btn newgroup_create mb-0" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Chat New Modal -->

            <!-- New group modal -->
            <div class="modal fade" id="new_group">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                New Group
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li class="nav-item">
                                    <a href="#create-group-details" class="nav-link active" data-bs-toggle="tab"
                                        role="tab" aria-selected="true">Details</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#create-group-members" class="nav-link" data-bs-toggle="tab"
                                        role="tab" aria-selected="false">Members</a>
                                </li>
                            </ul>
                            <!-- Tabs -->
                            <!-- Create chat -->
                            <div class="tab-content" role="tablist">
                                <!-- Chat details -->
                                <div id="create-group-details" class="tab-pane fade show active" role="tabpanel">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control form-control-lg group_formcontrol"
                                                name="new-chat-title" type="text" placeholder="Group Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="new-chat-topic">Topic (optional)</label>
                                            <input class="form-control form-control-lg group_formcontrol"
                                                name="new-chat-topic" id="new-chat-topic" type="text"
                                                placeholder="Group Topic">
                                        </div>
                                        <div class="form-group mb-0">
                                            <label for="new-chat-description">Description</label>
                                            <textarea class="form-control form-control-lg group_control_text" name="new-chat-description"
                                                id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <!-- Chat details -->

                                <!-- Chat Members -->
                                <div id="create-group-members" class="tab-pane fade create-group-members"
                                    role="tabpanel">
                                    <nav class="list-group list-group-flush mb-n6">
                                        <!-- Search -->
                                        <form class="mb-3 newgroup_content">
                                            <div class="input-group">
                                                <input type="text"
                                                    class="form-control form-control-lg newgroup_search"
                                                    placeholder="Search for messages or users..."
                                                    aria-label="Search for messages or users...">
                                                <button
                                                    class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn"
                                                    type="submit">
                                                    <i class="fas fa-search newgroup_fa_search"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <!-- Search -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">A</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar avatar-online me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Anna Bridges">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Anna Bridges</h6>
                                                        <small class="text-muted">Online</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-1"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-1"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">B</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Brian Dawson">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Brian Dawson</h6>
                                                        <small class="text-muted">last seen 2 hours ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-2"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-2"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">L</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Leslie Sutton">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Leslie Sutton</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-3"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-3"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">M</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Matthew Wiggins">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Matthew Wiggins</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-4"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-4"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-4"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">S</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Simon Hensley">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Simon Hensley</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-5"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-5"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-5"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">W</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="William Wright">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Wright</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-6"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-6"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-6"></label>
                                        </div>
                                        <!-- Friend -->
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="William Greer">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Greer</h6>
                                                        <small class="text-muted">last seen 10 minutes ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-7"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-7"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-7"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">Z</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="{{ asset('/image/no_image.jpg') }}"
                                                            alt="Zane Mayes">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Zane Mayes</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-8"
                                                                type="checkbox">
                                                            <label class="form-check-label" for="id-user-8"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-8"></label>
                                        </div>
                                        <!-- Friend -->
                                    </nav>
                                </div>
                                <!-- Chat Members -->
                            </div>
                            <!-- Create chat -->
                            <!-- Button -->
                            <div class="pt-3">
                                <div class="container text-center">
                                    <button class="btn newgroup_create mb-1 mt-0" type="submit"
                                        data-bs-dismiss="modal">Create group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Right sidebar -->
           @include('admin.chat.right_chat_detail')
            <!-- Right sidebar -->

        </div>
        <!-- /Content -->

    </div>
    <script src="{{ asset('/js/admin/jquery.js') }}"></script>
    <script src="{{ asset('/js/admin/chart_js1.js') }}"></script>
    <script src="{{ asset('/js/admin/chart_js2.js') }}"></script>
    <script src="{{ asset('/js/admin/chart_js3.js') }}"></script>
    <script src="{{ asset('/js/admin/chart_js4.js') }}"></script>
</body>

</html>
