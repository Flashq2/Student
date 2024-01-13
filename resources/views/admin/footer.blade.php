<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
<script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
<script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
<script src="https://cdn.amcharts.com/lib/5/map.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script>
<script src="{{ asset('/js/admin/search.js') }}"></script>
<script src="{{ asset('/js/admin/chat.js') }}"></script>
<script src="{{ asset('/js/admin/datatable.js') }}"></script>
<script src="{{ asset('/js/admin/fullcalendar.js') }}"></script>
<script src="{{ asset('/js/admin/jquery.js') }}"></script>
<script src="{{ asset('/js/admin/root.js') }}"></script>
<script src="{{ asset('/js/admin/widgit.js') }}"></script>
<script src="{{ asset('/js/admin/custome.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
<script>
    var notyf = new Notyf({
        duration: 3000,
    });
    $(document).ready(function() {
        $('.global_laoder').hide();

        // $('#item_no').select2();
        var config = {
            select2: function(url, element) {
                $(`#${element}`).select2({
                    dropdownParent: $(`#${element}`).parent(),
                    ajax: {
                        url: url,
                        dataType: 'json',
                        delay: 250,
                        processResults: function(data) {
                            return {
                                results: $.map(data, function(item) {
                                    return {
                                        text: `[${item.no}] ${item.description}`,
                                        id: item.edit_code
                                    }
                                })
                            };
                        },
                        cache: true,
                    },
                    placeholder: 'Search for a Item',
                    minimumInputLength: 1,
                });

                function formatState(state) {
                    if (!state.id) {
                        return state.text;
                    }

                    var $state = $(
                        '<span>' + state.text + '</span>'
                    );
                    return $state;
                }
            }

        }

        function reniUli() {
            config.select2('/system/search/search-item', 'search-item');
            config.select2('/system/search/search-menu', 'search-menu');
        }
        config.select2('/system/search/search-item', 'search-item');
        config.select2('/system/search/search-menu', 'search-menu');


        $(document).on('click', '.btn-audit-m', function(e) {
            $('#audit').modal('show');
            let modal = $(this).data('modald');
            $.ajax({
                type: "GET",
                url: "/system/changelog",
                data: {
                    modal: modal
                },
                success: function(response) {
                    $('.audit_class_body').html("");
                    $('.audit_class_body').html(response.view);

                }
            });
        })
        $(document).on('click', '.md_close', function(e) {
            $('#audit').modal('hide');
        })
        $(document).on('change', '.custome_select2-live', function() {
            let link = $(this).val();
            window.location.replace(link);
        })
        // Global Search Function
        $(document).on('click', '.btn-adSearch', function() {
            let page = $(this).attr('data-page');
            let data = $('.advance_search').serialize();
            $.ajax({
                type: "GET",
                url: `/system/search_table/${page}`,
                data: data,
                success: function (response) {
                    if(response.status == 'success'){
                        $('.control-table').html("");
                        $('.control-table').html(response.view);
                    } 
                }
            });
        });

        // Logout Function
        $(document).on('click','#logout_controller',function(){
            $.ajax({
                type: "POST",
                url: "/system/logout",
                success: function (response) {
                        if(response.status == 'success'){
                            window.location.replace('/login');
                        }
                }
            });
        })


        // Global Export Excell 
        $(document).on('click','.export_excel',function(e){
        let data = $('.advance_search').serialize();
        let table = $(this).attr('data-table');
        $.ajax({
            type: "GET",
            url: `/system/export/${table}`,
            data: data,
            beforeSend: function() {
                    $('.global_laoder').show();
            },
            success: function (response) {
                $('.global_laoder').hide();
                if (response.status == 'success'){
                    location.href = response.path;
                    notyf.success(response.msg);
                }
            }
        });
      });
    // Global Import Excell 
      $(document).on('click','.import_excell',function(e){
        $('#excel_modal').modal('show');
      });


      $(document).on('click','.process_upload',function(e){
           let table = $(this).attr('data-code');
           var formData = new FormData(form_excel);
           console.log(formData);
            // var uploadFiles = document.getElementById('file_excel').files;
            // this.formData.append("MyKey", uploadFiles[0]);
        $.ajax({
            type: "POST",
            url: `/system/import/${table}`,
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {
                    $('.global_laoder').show();
            },
            success: function (response) {
                $('.global_laoder').hide();  
                if (response.status == 'success'){
                     
                }
            }
        });
      });


      $(document).on('click','#Auditing',function(e){
        $.ajax({
            type: "GET",
            url: `/system/process_telegram`,
            beforeSend: function() {
                    $('.global_laoder').show();
            },
            success: function (response) {
                $('.global_laoder').hide();  
            }
        });
      });
   




    });
</script>
