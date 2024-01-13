<div class="aside-menu flex-column-fluid">
    <!--begin::Aside Menu-->
    <div class="hover-scroll-overlay-y mx-3 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto">
        <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"id="#kt_aside_menu" data-kt-menu="true">
            <div data-kt-menu-trigger="click" class="menu-item here  menu-accordion">
                <span class="menu-link"><span class="menu-icon"></span><span class="menu-title">Dashboards</span><span
                        class="menu-arrow"></span></span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item"><!--begin:Menu link--><a class="menu-link active"
                            href="{{url('admin/dashboard')}}"><span class="menu-bullet"><span
                                    class="bullet bullet-dot"></span></span><span
                    class="menu-title">Default</span></a><!--end:Menu link--></div>
                </div>
            </div>
            <div class="menu-item pt-5"><div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">System</span></div> </div>
            <?php
                $groups = App\Models\MenuGroupModel::all();
            ?>
            @foreach ( $groups as $group)
                    <?php
                                $classs = '';
                                if(isset($_GET['group']) && $_GET['group'] == $group->code)  $classs = 'show';
                            ?>
                <div data-kt-menu-trigger="click" class="menu-item {{$classs}} menu-accordion"><span class="menu-link"><span class="menu-icon">{!!$group->icon!!}</span><span class="menu-title">{{$group->description}}</span><span class="menu-arrow"></span></span>
                    <?php
                        $menus = App\Models\MenuModel::where('menu_group_code',$group->code)->get();
                    ?>
                    @if($menus)
                        @foreach ($menus as $menu)
                        <div class="menu-sub menu-sub-accordion"><div class="menu-item">
                            <?php
                                $class = '';
                                if(isset($_GET['para']) && $_GET['para'] == $menu->code)  $class = 'active';
                            ?>
                            <a class="menu-link {{$class}} " href="{{url(".$menu->url?para=$menu->param")}}&group={{$menu->menu_group_code}}">
                                <span class="menu-bullet"><span class="bullet bullet-dot"></span></span>
                                <span class="menu-title">{{$menu->description}}</span></a></div>
                        </div>
                        @endforeach
                    @endif

                </div>
            @endforeach


        </div>
    </div>
</div>
