<div class="modal fade" id="add-user">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <span class="material-icons">person_add</span>Add Connection
                </h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span class="material-icons">close</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Card -->
                <form action="new-friends">
                    <div class="form-group">
                        <label>User Name</label>
                        <input class="form-control form-control-lg group_formcontrol" name="new-chat-title"
                            type="text" id="is_searchnew" onkeyup="DosearchNewuser(this)">
                    </div>
                </form>
                <!-- Card -->
                <div class="row">
                    <ul class="user-list mt-2 " id="search_newuser">

                    </ul>
                </div>
                <div class="form-row profile_form text-end float-end m-0 align-items-center">
                    <!-- Button -->
                    <div class="cancel-btn me-4">
                        <a href="#" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                    </div>
                    <div class="">
                        <button type="button" class="btn btn-block newgroup_create mb-0"
                            data-bs-dismiss="modal" aria-label="Close">
                            Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>