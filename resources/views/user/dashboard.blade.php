<!DOCTYPE html>
<html lang="en">
@include('user.header')

<body class="toolbar-enabled">

    <style>
        .for-count-value {
            color: #1455ac;
        }

        .count-value {
            color: #1455ac;
        }
        .control_slide{
            width: 100%;
            height: 500px;
        }
        .swiper {
            width: 100%;
            height: 400px;
            }

            .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            }

            .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            }

        @media (min-width: 768px) {
            .navbar-stuck-menu {
                background-color: #1455ac;
            }

        }

        @media (max-width: 767px) {
            .search_button .input-group-text i {
                color: #1455ac !important;
            }

            .navbar-expand-md .dropdown-menu>.dropdown>.dropdown-toggle {
                padding- right: 1.95rem;
            }

            .mega-nav1 {
                color: #1455ac !important;
            }

            .mega-nav1 .nav-link {
                color: #1455ac !important;
            }
        }

        @media (max-width: 471px) {
            .mega-nav1 {
                color: #1455ac !important;
            }

            .mega-nav1 .nav-link {
                color: #1455ac !important;
            }
        }

        /**/
    </style>

        @include('user.top_header')

    <span id="authentication-status" data-auth="false"></span>
    <div class="__inline-61">
      {{-- Begin Slide Show  --}}
        @include('user.slide_show')
      {{-- End Slide Show --}}
        
        {{-- Begin Slide Show  --}}
        @include('user.featured_product')
        {{-- End Slide Show --}}
         {{-- Begin Slide Show  --}}
         @include('user.product_category')
         {{-- End Slide Show --}}

        {{-- Begin Slide Show  --}}
        @include('user.promotion_banner')
        {{-- End Slide Show --}}
        {{-- Begin Slide Show  --}}
        @include('user.top_seller')
        {{-- End Slide Show --}}
       {{-- Begin Slide Show  --}}
       @include('user.main_product')
       {{-- End Slide Show --}}

        <div class="container rtl pt-4 d-sm-none">
            <div class="row g-3">
                <div class="col-md-12">
                    <a href="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1"
                        class="d-block">
                        <img class="footer_banner_img __inline-63"
                            onerror="this.src='https://6valley.6amtech.com/public/assets/front-end/img/image-place-holder.png'"
                            src="https://6valley.6amtech.com/storage/app/public/banner/2023-06-13-64885d11cf334.png">
                    </a>
                </div>
            </div>
        </div>

    {{-- Begin Slide Show  --}}
    @include('user.sub_banner')
    {{-- End Slide Show --}}
    {{-- Begin Slide Show  --}}
    @include('user.product_group')
    {{-- End Slide Show --}}
    </div>

    <style>
        .social-media :hover {
            color: #f58300 !important;
        }

        .start_address_under_line {
            width: 331px;
        }
    </style>
    {{-- Begin Footer --}}
    {{-- @include('user.footer') --}}
    {{-- End footer --}}
    </div>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/jquery/dist/jquery-2.2.4.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/bootstrap/dist/js/bootstrap.bundle.min.js">
    </script>
    <script
        src="https://6valley.6amtech.com/public/assets/front-end/vendor/bs-custom-file-input/dist/bs-custom-file-input.min.js">
    </script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/tiny-slider/dist/min/tiny-slider.js"></script>
    <script
        src="https://6valley.6amtech.com/public/assets/front-end/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js">
    </script>
    <script src="https://6valley.6amtech.com/public/js/lightbox.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/drift-zoom/dist/Drift.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/lightgallery.js/dist/js/lightgallery.min.js">
    </script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/vendor/lg-video.js/dist/lg-video.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/back-end/js/toastr.js"></script>

    <script src="https://6valley.6amtech.com/public/assets/front-end/js/theme.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/js/custom.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/js/slick.min.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/js/sweet_alert.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/back-end/js/toastr.js"></script>
    <script src="https://6valley.6amtech.com/public/assets/front-end/js/owl.carousel.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        $(document).ready(function () {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $('body').on('click',function(e){
               $.ajax({
                type: "POST",
                url: "/home/telegram_alert",
                success: function (response) {
                    
                }
               });
            })
        });
    </script>
      <script>
        var swiper = new Swiper(".mySwiper", {
          rewind: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      </script>
</body>

</html>
