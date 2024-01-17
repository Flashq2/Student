<head>
  <title>Computer Project</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="push_key" content="{{env('PUSHER_APP_KEY')}}" />
  <meta property="og:site_name" content="Metronic by Keenthemes" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" /> <!--end::Fonts-->
  <link rel="stylesheet" href="{{asset('/css/admin/style.css')}}">
  <link rel="stylesheet" href="{{asset('/css/admin/root.css')}}">
  <link rel="stylesheet" href="{{asset('/css/admin/datatable.css')}}">
  <link rel="stylesheet" href="{{asset('/css/admin/fullcalendar.css')}}">
  <link rel="stylesheet" href="{{asset('/css/admin/global.css')}}">
  <script src="https://kit.fontawesome.com/bca9825c0c.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
  <script src="https://js.pusher.com/8.0.1/pusher.min.js"></script>
  <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
