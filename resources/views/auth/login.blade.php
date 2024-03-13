 


<!DOCTYPE html>

<html lang="en" class="light-style   layout-menu-fixed     customizer-hide" dir="ltr" data-theme="theme-default"
    data-assets-path="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/"
    data-base-url="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1"
    data-framework="laravel" data-template="blank-menu-theme-default-light">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Login</title>
    <link rel="icon" type="image/x-icon"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/img/favicon/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/vendor/css/rtl/core.css?id=55b2a9dfaa009c41df62ca8d16e913a8"
        class="template-customizer-core-css" />
    <link rel="stylesheet"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-default.css?id=9182924a7b965439eca5e189ba43eba1"
        class="template-customizer-theme-css" />
    <link rel="stylesheet"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/css/demo.css?id=69dfc5e48fce5a4ff55ff7b593cdf93d" />
    <link rel="stylesheet"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/vendor/libs/@form-validation/umd/styles/index.min.css" />


    <!-- Page Styles -->
    <!-- Page -->
    <link rel="stylesheet"
        href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/vendor/css/pages/page-auth.css">
</head>

<body>
<div class="authentication-wrapper authentication-cover">
  <div class="authentication-inner row m-0">
    <!-- /Left Text -->
    <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center p-5">
      <div class="w-100 d-flex justify-content-center">
        {{-- <img src="https://www.setecu.com/images/sampledata/icetheme/logo.png" class="img-fluid" alt="Login image" width="700" data-app-dark-img="illustrations/boy-with-rocket-dark.png" data-app-light-img="illustrations/boy-with-rocket-light.png"> --}}
      </div>
    </div>
    <!-- /Left Text -->
    <?php
    $password = bcrypt('123456789');
    // dd($password);
    
    ?>
    <!-- Login -->
    <div class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
      <div class="w-px-400 mx-auto">
        <!-- /Logo -->
        {{-- <h4 class="mb-2">Hello ! Again.</h4> --}}
        {{-- <img src="https://www.setecu.com/images/sampledata/icetheme/logo.png" class="img-fluid" alt="Login image" width="700" data-app-dark-img="illustrations/boy-with-rocket-dark.png" data-app-light-img="illustrations/boy-with-rocket-light.png"> --}}
<br><br>
        {{-- <p class="mb-4">Please sign-in to your account and start the adventure</p> --}}
        <br>
        <form id="formAuthentication" class="mb-3" method="POST" action="{{ route('login') }}" >
            @csrf
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email or username" autofocus>
          </div>
          <div class="mb-3 form-password-toggle">
            <div class="d-flex justify-content-between">
              <label class="form-label" for="password">Password</label>
            </div>
            <div class="input-group input-group-merge">
              <input type="password" id="password" class="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
            </div>
          </div>
          <button class="btn btn-primary d-grid w-100" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
    <!-- /Login -->
  </div>
</div>
<script
    src="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/vendor/js/bootstrap.js?id=4648227467e3fd3f4cf976cfb0e43aea">
</script>
<script src="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/js/pages-auth.js">
</script>
<!-- END: Page JS-->

</body>

</html>
