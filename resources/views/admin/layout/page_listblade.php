<!DOCTYPE html>
<html lang="en">
<!--begin::Head-->
@include('admin.header')
<!--end::Head-->

<!--begin::Body-->

<body id="kt_body" class="aside-enabled">
    <!--begin::Theme mode setup on page load-->
    <script>
        var defaultThemeMode = "light";
        var themeMode;
        if (document.documentElement) {
            if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
                themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
            } else {
                if (localStorage.getItem("data-bs-theme") !== null) {
                    themeMode = localStorage.getItem("data-bs-theme");
                } else {
                    themeMode = defaultThemeMode;
                }
            }

            if (themeMode === "system") {
                themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }

            document.documentElement.setAttribute("data-bs-theme", themeMode);
        }
    </script>
    <!--end::Theme mode setup on page load-->
    <!--Begin::Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FS8GGP" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!--End::Google Tag Manager (noscript) -->

    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Aside-->
            <div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside"
                data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_aside_mobile_toggle">
                @include('admin.side_left')

                @include('admin.side_top')

            </div>
            <!--end::Aside-->

            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                <div id="kt_header" style="" class="header  align-items-stretch">
                    <!--begin::Brand-->
                    <div class="header-brand">
                        <!--begin::Logo-->
                        <a href="/metronic8/demo8/../demo8/index.html">
                            <img alt="Logo" src="/metronic8/demo8/assets/media/logos/default-dark.svg"
                                class="h-25px h-lg-25px" />
                        </a>
                        <!--end::Logo-->

                        <!--begin::Aside minimize-->
                        <div id="kt_aside_toggle"
                            class="
                    btn btn-icon w-auto px-0 btn-active-color-primary aside-minimize 
                                    "
                            data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
                            data-kt-toggle-name="aside-minimize">

                            <i class="ki-duotone ki-entrance-right fs-1 me-n1 minimize-default"><span
                                    class="path1"></span><span class="path2"></span></i>
                            <i class="ki-duotone ki-entrance-left fs-1 minimize-active"><span
                                    class="path1"></span><span class="path2"></span></i>
                        </div>
                        <!--end::Aside minimize-->

                        <!--begin::Aside toggle-->
                        <div class="d-flex align-items-center d-lg-none me-n2" title="Show aside menu">
                            <div class="btn btn-icon btn-active-color-primary w-30px h-30px"
                                id="kt_aside_mobile_toggle">
                                <i class="ki-duotone ki-abstract-14 fs-1"><span class="path1"></span><span
                                        class="path2"></span></i>
                            </div>
                        </div>
                        <!--end::Aside toggle-->
                    </div>
                    <!--end::Brand-->

                    <!--begin::Toolbar-->
                    <div class="toolbar d-flex align-items-stretch">
                        <!--begin::Toolbar container-->
                        <div
                            class=" container-xxl  py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between">
                            <!--begin::Page title-->
                            <div class="page-title d-flex justify-content-center flex-column me-5">
                                <!--begin::Title-->
                                <h1 class="d-flex flex-column text-gray-900 fw-bold fs-3 mb-0">
                                    Table </h1>
                                <!--end::Title-->

                                <!--begin::Breadcrumb-->
                                <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 pt-1">
                                    <!--begin::Item-->
                                    <li class="breadcrumb-item text-muted">
                                        <a href="/metronic8/demo8/../demo8/index.html"
                                            class="text-muted text-hover-primary">
                                            Home </a>
                                    </li>
                                    <!--end::Item-->
                                    <!--begin::Item-->
                                    <li class="breadcrumb-item">
                                        <span class="bullet bg-gray-300 w-5px h-2px"></span>
                                    </li>
                                    <!--end::Item-->

                                    <!--begin::Item-->
                                    <li class="breadcrumb-item text-muted">
                                        Dashboards </li>
                                    <!--end::Item-->
                                    <!--begin::Item-->
                                    <li class="breadcrumb-item">
                                        <span class="bullet bg-gray-300 w-5px h-2px"></span>
                                    </li>
                                    <!--end::Item-->

                                    <!--begin::Item-->
                                    <li class="breadcrumb-item text-gray-900">
                                        Default </li>
                                    <!--end::Item-->

                                </ul>
                                <!--end::Breadcrumb-->
                            </div>
                        </div>
                        <!--end::Toolbar container-->
                    </div>
                    <!--end::Toolbar-->
                </div>
                {{-- Content of Page --}}
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                    <div class="container-xxl">
                        <div class="card">
                            <div class="card-header border-0 pt-6">
                                <!--begin::Card title-->
                                <div class="card-title">
                                    <!--begin::Search-->
                                    <div class="d-flex align-items-center position-relative my-1">
                                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5"><span
                                                class="path1"></span><span class="path2"></span></i> <input
                                            type="text" data-kt-customer-table-filter="search"
                                            class="form-control form-control-solid w-250px ps-12"
                                            placeholder="Search Customers">
                                    </div>
                                    <!--end::Search-->
                                </div>
                                <!--begin::Card title-->

                                <!--begin::Card toolbar-->
                                <div class="card-toolbar">
                                    <!--begin::Toolbar-->
                                    <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                                        <!--begin::Filter-->
                                        <button type="button" class="btn btn-light-primary me-3"
                                            data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <i class="ki-duotone ki-filter fs-2"><span class="path1"></span><span
                                                    class="path2"></span></i> Filter
                                        </button>
                                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                                            data-bs-target="#kt_customers_export_modal">
                                            <i class="ki-duotone ki-exit-up fs-2"><span class="path1"></span><span
                                                    class="path2"></span></i> Export
                                        </button>
                                        <!--end::Export-->

                                        <!--begin::Add customer-->
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_add_customer">
                                            Add Customer
                                        </button>
                                        <!--end::Add customer-->
                                    </div>
                                    <!--end::Toolbar-->

                                    <!--begin::Group actions-->
                                    <div class="d-flex justify-content-end align-items-center d-none"
                                        data-kt-customer-table-toolbar="selected">
                                        <div class="fw-bold me-5">
                                            <span class="me-2" data-kt-customer-table-select="selected_count"></span>
                                            Selected
                                        </div>

                                        <button type="button" class="btn btn-danger"
                                            data-kt-customer-table-select="delete_selected">
                                            Delete Selected
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0">
                                <div id="kt_customers_table_wrapper"
                                    class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="table-responsive">
                                        <table
                                            class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                                            id="kt_customers_table">
                                            <thead>
                                                <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                                    <th class="w-10px pe-2 sorting_disabled" rowspan="1"
                                                        colspan="1" aria-label="" style="width: 29.8906px;">
                                                        <div
                                                            class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                data-kt-check="true"
                                                                data-kt-check-target="#kt_customers_table .form-check-input"
                                                                value="1">
                                                        </div>
                                                    </th>
                                                    <th class="min-w-125px sorting" tabindex="0"
                                                        aria-controls="kt_customers_table" rowspan="1"
                                                        colspan="1"
                                                        aria-label="Customer Name: activate to sort column ascending"
                                                        style="width: 171.984px;">Customer Name</th>
                                                    <th class="min-w-125px sorting" tabindex="0"
                                                        aria-controls="kt_customers_table" rowspan="1"
                                                        colspan="1"
                                                        aria-label="Email: activate to sort column ascending"
                                                        style="width: 212.797px;">Email</th>
                                                    <th class="min-w-125px sorting" tabindex="0"
                                                        aria-controls="kt_customers_table" rowspan="1"
                                                        colspan="1"
                                                        aria-label="Company: activate to sort column ascending"
                                                        style="width: 189.031px;">Company</th>
                                                    <th class="min-w-125px sorting" tabindex="0"
                                                        aria-controls="kt_customers_table" rowspan="1"
                                                        colspan="1"
                                                        aria-label="Payment Method: activate to sort column ascending"
                                                        style="width: 175.312px;">Payment Method</th>
                                                    <th class="min-w-125px sorting" tabindex="0"
                                                        aria-controls="kt_customers_table" rowspan="1"
                                                        colspan="1"
                                                        aria-label="Created Date: activate to sort column ascending"
                                                        style="width: 223.375px;">Created Date</th>
                                                    <th class="text-end min-w-70px sorting_disabled" rowspan="1"
                                                        colspan="1" aria-label="Actions"
                                                        style="width: 132.109px;">
                                                        Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody class="fw-semibold text-gray-600">
                                                <tr class="odd">
                                                    <td>
                                                        <div
                                                            class="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input class="form-check-input" type="checkbox"
                                                                value="1">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="/metronic8/demo8/../demo8/apps/customers/view.html"
                                                            class="text-gray-800 text-hover-primary mb-1">Emma
                                                            Smith</a>
                                                    </td>
                                                    <td>
                                                        <a href="#"
                                                            class="text-gray-600 text-hover-primary mb-1">smith@kpmg.com</a>
                                                    </td>
                                                    <td>
                                                        - </td>
                                                    <td data-filter="mastercard">
                                                        <img src="/metronic8/demo8/assets/media/svg/card-logos/mastercard.svg"
                                                            class="w-35px me-3" alt="">
                                                        **** 4443
                                                    </td>
                                                    <td data-order="2020-12-14T20:43:00+07:00">
                                                        14 Dec 2020, 8:43 pm </td>
                                                    <td class="text-end">
                                                        <a href="#"
                                                            class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                            data-kt-menu-trigger="click"
                                                            data-kt-menu-placement="bottom-end">
                                                            Actions
                                                            <i class="ki-duotone ki-down fs-5 ms-1"></i>
                                                        </a>
                                                        <!--begin::Menu-->
                                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                            data-kt-menu="true">
                                                            <!--begin::Menu item-->
                                                            <div class="menu-item px-3">
                                                                <a href="/metronic8/demo8/../demo8/apps/customers/view.html"
                                                                    class="menu-link px-3">
                                                                    View
                                                                </a>
                                                            </div>
                                                            <!--end::Menu item-->

                                                            <!--begin::Menu item-->
                                                            <div class="menu-item px-3">
                                                                <a href="#" class="menu-link px-3"
                                                                    data-kt-customer-table-filter="delete_row">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                            <!--end::Menu item-->
                                                        </div>
                                                        <!--end::Menu-->
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <!--end::Table-->
                            </div>
                            <!--end::Card body-->
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</body>
<!--end::Body-->
@include('admin.footer')

</html>
