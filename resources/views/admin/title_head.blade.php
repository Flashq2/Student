        <style>
            .detail-s {
                display: flex;
                /* justify-content: center; */
                align-items: center;
                /* background: rgb(216, 186, 186); */
                width: 100%;
                height: 70px;
                font-size: 20px;
                color: rgb(55, 65, 65);
                font-weight: bold;
            }
            .detail-s1 {
                display: flex;
                justify-content:space-between;
                align-items: center;
                /* background: rgb(216, 186, 186); */
                width: 100%;
                height: 70px;
                font-size: 15px;
                color: rgb(55, 65, 65);
                cursor: pointer;
                /* font-weight: bold; */
            }
        </style>
        <div id="kt_header" style="" class="header  align-items-stretch">
            <div class="header-brand">
                <center>
                    @include('admin.datetime')
                </center>
            </div>

            <div class="global_laoder">
                <span class="loader"></span>
              </div>
            <div class="toolbar d-flex align-items-stretch">
                <!--begin::Toolbar container-->
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <div class="detail-s">
                                {{ $page }}
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <div class="row">
                                <div class="col-2">
                                   
                                </div>
                                <div class="col-4">
                                    <div class="detail-s" style="font-size: 14px !important;">
                                        <select class="form-select custome_select2-live" data-control="select2" id="search-menu"
                                            data-placeholder= "Search Page  "
                                            name="">
                                            <option value="">&nbsp;</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="detail-s1">
                                        <span class="badge badge-pill badge-primary">Profile &nbsp; <i class="fa-regular fa-user" style="color: aliceblue;"></i></span>
                                        <span class="badge badge-pill badge-primary" id="Auditing">Auditing &nbsp;<i class="fa-regular fa-note-sticky" style="color: aliceblue;"></i></span>
                                        <span class="badge badge-pill badge-info">Website &nbsp; <i class="fa-solid fa-pager" style="color: aliceblue;"></i></span>    
                                        <span class="badge badge-pill badge-danger" id="logout_controller">Logout &nbsp; <i class="fa-solid fa-arrow-right-from-bracket" style="color: aliceblue;" ></i></span>    
                                         
                                        </div>
                                </div>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
