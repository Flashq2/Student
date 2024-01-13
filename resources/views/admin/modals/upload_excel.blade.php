<div class="modal fade" id="excel_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Proccess Upload Excel</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <h3>Do you wan to perform this action ?</h3>
           <form action="" enctype="multipart/form-data" id="form_excel">
              <input type="file" class="form-control" name="file_excel" id="file_excel">
          </form><br>
          <b style="color:red">Note :</b> <span>If record is already exist in table , System will overwrite data .  </span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary process_upload" data-code="{{$prefix?? ' '}}">Process</button>
        </div>
      </div>
    </div>
</div>