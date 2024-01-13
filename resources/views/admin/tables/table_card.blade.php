
  <div class="modal fade" id="m-table" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Table </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="form">
            <div class="row">
                <div class="col-lg-6"><div class="form-floating mb-7">
                    <input type="number" class="form-control form-control-solid" id="table_id" placeholder="09700" maxlength="5" name="table_id"/>
                    <label for="table_id">Table ID</label>
                </div></div>
                <div class="col-lg-6">
                    <div class="">
                        <select class="form-select" data-control="select2" data-placeholder="Select an option" name="table_name">
                            <option></option>
                            @foreach ($tables as $table)
                            <option value="{{$table->Tables_in_student}}">{{$table->Tables_in_student}}</option>
                            @endforeach
                        </select>
                </div></div>
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary m-table-submit">Submit</button>
        </div>
      </div>
    </div>
  </div>