<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="push_key" content="{{env('PUSHER_APP_KEY')}}" />
    <meta name="push_connection" content="{{json_encode($chat)}}" />
    <title>SS5-Message</title>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('/image/no_image.jpg') }}">
    <link rel="stylesheet" href="{{ asset('/css/chat_v2/app.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/chat_v2/jquery.fancybox.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/chat_v2/swiper.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/chat_v2/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/chat_v2/bootstrap.min.css') }}">
    <script src="https://kit.fontawesome.com/bca9825c0c.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
    <script src="https://js.pusher.com/8.0.1/pusher.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<style>
    .no_message{
        width: 100%;
        height: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chat{
        overflow: auto;
    }
    .chat-header{
        position: sticky !important;
        top: 0 !important;
    }
    .chat-footer{
        position: sticky !important;
        bottom: 0 !important;
    }
</style>
<body>

    <!-- Main Wrapper -->
    <div class="main-wrapper">

        <!-- content -->
        <div class="content main_content">

            <!-- Left Sidebar Menu -->
            <div class="sidebar-menu">
                <div class="logo-col">
                    <a href="index.html"><img src="assets/img/logo.png" alt=""></a>
                </div>
                <div class="menus-col">
                    <div class="chat-menus">
                        <ul>
                            <li>
                                <a href="index.html" class="chat-unread blue">
                                    <span class="material-icons">message</span>
                                    <span>Chats</span>
                                </a>
                            </li>
                            <li>
                                <a href="group.html" class="chat-unread pink">
                                    <span class="material-icons">group</span>
                                    <span>Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="status.html" class="chat-unread">
                                    <span class="material-icons">library_books</span>
                                    <span>Status</span>
                                </a>
                            </li>
                            <li>
                                <a href="audio-call.html" class="chat-unread">
                                    <span class="material-icons">call</span>
                                    <span>Calls</span>
                                </a>
                            </li>
                            <li>
                                <a href="settings.html" class="chat-unread">
                                    <span class="material-icons">settings</span>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom-menus">
                        <ul>
                            <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#add-new-group">
                                    <span class="material-icons group-add-btn">group_add</span>
                                    <span>Add Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="add-contacts-btn" data-bs-toggle="modal"
                                    data-bs-target="#add-contact">
                                    <i class="fas fa-plus"></i>
                                    <span>Add Contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" id="dark-mode-toggle" class="dark-mode-toggle">
                                    <i class="far fa-moon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="chat-profile-icon" data-bs-toggle="dropdown">
                                    <img src="{{ asset('/image/no_image.jpg') }}" alt="">
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="#" class="dropdown-item dream_profile_menu">Edit Profile <span
                                            class="edit-profile-icon"><i class="fas fa-edit"></i></span></a>
                                    <a href="#" class="dropdown-item">Profile <span class="profile-icon-col"><i
                                                class="fas fa-id-card-alt"></i></span></a>
                                    <a href="settings.html" class="dropdown-item">Settings <span
                                            class="material-icons">settings</span></a>
                                    <a href="archived.html" class="dropdown-item">Archived <span
                                            class="material-icons">flag</span></a>
                                    <a href="login-email.html" class="dropdown-item">Logout <span
                                            class="material-icons">power_settings_new</span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Left Sidebar Menu -->

            <!-- sidebar group -->
            <div class="sidebar-group left-sidebar chat_sidebar">

                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active slimscroll">

                    <div class="slimscroll">

                        <!-- Left Chat Title -->
                        <div class="left-chat-title d-flex justify-content-between align-items-center">
                            <div class="chat-title">
                                <h4>CHATS</h4>
                            </div>
                            <div class="add-section">
                                <ul>
                                    <li><a href="group.html"><span class="material-icons">group</span></a></li>
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#add-user"><i
                                                class="fas fa-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- /Left Chat Title -->

                        <div class="search_chat has-search">
                            <input class="form-control chat_input" id="search-contacts" type="text"
                                placeholder="Search Contacts">
                        </div>

                        <!-- Top Online Contacts -->
                        <div class="top-online-contacts">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="top-contacts-box">
                                            <div class="profile-img online">
                                                <img src="{{ asset('/image/no_image.jpg') }}" alt="">
                                            </div>
                                            <div class="profile-name">
                                                <span>helen</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="top-contacts-box">
                                            <div class="profile-img online">
                                                <img src="{{ asset('/image/no_image.jpg') }}" alt="">
                                            </div>
                                            <div class="profile-name">
                                                <span>Prince</span>
                                            </div>
                                        </div>
                                    </div>
                       
                                </div>
                            </div>
                        </div>
                        <!-- /Top Online Contacts -->

                        <div class="sidebar-body" id="chatsidebar">

                            <!-- Left Chat Title -->
                            <div class="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                                <div class="chat-title">
                                    <h4>Recent Chats</h4>
                                </div>
                                <div class="add-section">
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                </div>
                            </div>
                            <!-- /Left Chat Title -->

                            @include('admin.chat_v2.list_connection')
                        </div>

                    </div>

                </div>
                <!-- / Chats sidebar -->
            </div>
            <!-- /Sidebar group -->

            <!-- Chat -->
            <div class="chat slimscroll" id="middle">
                <div class="no_message">
                    <p>Select chat to start messaging</p>
                </div>
            </div>
            <!-- /Chat -->

            <!-- Right sidebar -->
            {{-- @include('admin.chat_v2.right_side') --}}
            <!-- Right sidebar -->

        </div>
        <!-- /Content -->

        <!-- Add User -->
            {{-- @include('admin.chat_v2.add_user') --}}
        <!-- /Add User -->

        <!-- Add Contact -->
        <div class="modal fade" id="add-contact">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <span class="material-icons">person_add</span>Add Friends
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Card -->
                        <form action="new-friends">
                            <div class="form-group">
                                <label>Name</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text">
                            </div>
                            <div class="form-group">
                                <label>Nickname</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text">
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="email">
                            </div>
                        </form>
                        <!-- Card -->
                        <div class="form-row profile_form text-end float-end m-0 align-items-center">
                            <!-- Button -->
                            <div class="cancel-btn me-4">
                                <a href="#" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-block newgroup_create mb-0"
                                    data-bs-dismiss="modal" aria-label="Close">
                                    Add to contacts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Contact -->

        <!-- Add New Group -->
        <div class="modal fade" id="add-new-group">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <span class="material-icons group-add-btn">group_add</span>Create a New Group
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Card -->
                        <form action="new-friends">
                            <div class="form-group">
                                <label>Group Name</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text">
                            </div>
                            <div class="form-group">
                                <label>Choose profile picture</label>
                                <div class="custom-input-file form-control form-control-lg group_formcontrol">
                                    <input type="file" class="">
                                    <span class="browse-btn">Browse File</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Topic (optional)</label>
                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                                    type="text">
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea class="form-control form-control-lg group_formcontrol"></textarea>
                            </div>
                            <div class="form-group">
                                <div class="d-flex align-items-center">
                                    <label class="custom-radio me-3">Private Group
                                        <input type="radio" checked="checked" name="radio">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="custom-radio">Public Group
                                        <input type="radio" name="radio">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <!-- Card -->
                        <div class="form-row profile_form text-end float-end m-0 align-items-center">
                            <!-- Button -->
                            <div class="cancel-btn me-4">
                                <a href="#" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-block newgroup_create mb-0"
                                    data-bs-toggle="modal" data-bs-target="#add-group-member" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    Add Participants
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add New Group -->

        <!-- Add Group Members -->
        <div class="modal fade custom-border-modal" id="add-group-member">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <span class="material-icons group-add-btn">group_add</span>Add Group Members
                        </h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="search_chat has-search me-0 ms-0">
                            <input class="form-control chat_input" id="search-contact1" type="text"
                                placeholder="Search Contacts">
                        </div>
                        <div class="sidebar">
                            <span class="contact-name-letter">A</span>
                            <ul class="user-list mt-2">
                                <li class="user-list-item">
                                    <div class="avatar avatar-online">
                                        <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                                            alt="image">
                                    </div>
                                    <div class="users-list-body align-items-center">
                                        <div>
                                            <h5>Albert Rodarte</h5>
                                        </div>
                                        <div class="last-chat-time">
                                            <label class="custom-check">
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div class="avatar avatar-online">
                                        <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                                            alt="image">
                                    </div>
                                    <div class="users-list-body align-items-center">
                                        <div>
                                            <h5>Allison Etter</h5>
                                        </div>
                                        <div class="last-chat-time">
                                            <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <span class="contact-name-letter mt-3">C</span>
                            <ul class="user-list mt-2">
                                <li class="user-list-item">
                                    <div class="avatar avatar-online">
                                        <img src="{{ asset('/image/no_image.jpg') }}" class="rounded-circle"
                                            alt="image">
                                    </div>
                                    <div class="users-list-body align-items-center">
                                        <div>
                                            <h5>Craig Smiley</h5>
                                        </div>
                                        <div class="last-chat-time">
                                            <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div class="avatar avatar-online">
                                        <img src="assets/img/avatar/avatar-4.jpg" class="rounded-circle"
                                            alt="image">
                                    </div>
                                    <div class="users-list-body align-items-center">
                                        <div>
                                            <h5>Caniel Clay</h5>
                                        </div>
                                        <div class="last-chat-time">
                                            <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="form-row profile_form text-end float-end m-0 mt-3 align-items-center">
                            <!-- Button -->
                            <div class="cancel-btn me-3">
                                <a href="#" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                            </div>
                            <div class="">
                                <button type="button" class="btn newgroup_create previous mb-0 me-3"
                                    data-bs-toggle="modal" data-bs-target="#add-new-group" data-bs-dismiss="modal"
                                    aria-label="Close">
                                    Previous
                                </button>
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-block newgroup_create mb-0"
                                    data-bs-dismiss="modal" aria-label="Close">
                                    Create Group
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Group Members -->
 

    </div>
    <script src="{{ asset('chatjs/jquery_custome.js') }}"></script>
    <script src="{{ asset('chatjs/email-decode.min.js') }}"></script>
    <script src="{{ asset('chatjs/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('chatjs/slimscroll.min.js') }}"></script>
    <script src="{{ asset('chatjs/swiper.min.js') }}"></script>
    <script src="{{ asset('chatjs/fancybox.min.js') }}"></script>
    <script src="{{ asset('chatjs/script.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
    <script src="{{ asset('chatjs/ss5_custom.js') }}"></script>

</body>

</html>
