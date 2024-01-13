
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Table</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form > 
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                      <h5 class="card-header">Select2</h5>
                      <div class="card-body">
                        <div class="row">
                          <!-- Basic -->
                       
                          <!-- Multiple -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Multiple" class="form-label">Multiple</label>
                            <select id="select2Multiple" class="select2 form-select" multiple>
                              <optgroup label="Alaskan/Hawaiian Time Zone">
                                <option value="AK">Alaska</option>
                                <option value="HI">Hawaii</option>
                              </optgroup>
                              <optgroup label="Pacific Time Zone">
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                              </optgroup>
                              <optgroup label="Mountain Time Zone">
                                <option value="AZ">Arizona</option>
                                <option value="CO" selected>Colorado</option>
                                <option value="ID">Idaho</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NM">New Mexico</option>
                                <option value="ND">North Dakota</option>
                                <option value="UT">Utah</option>
                                <option value="WY">Wyoming</option>
                              </optgroup>
                              <optgroup label="Central Time Zone">
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="IL">Illinois</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="OK">Oklahoma</option>
                                <option value="SD">South Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="TN">Tennessee</option>
                                <option value="WI">Wisconsin</option>
                              </optgroup>
                              <optgroup label="Eastern Time Zone">
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL" selected>Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="IN">Indiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="OH">Ohio</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WV">West Virginia</option>
                              </optgroup>
                            </select>
                          </div>
                          <!-- Disabled -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Disabled" class="form-label">Disabled</label>
                            <select id="select2Disabled" class="select2 form-select" disabled>
                              <option value="1">Option1</option>
                              <option value="2" selected>Option2</option>
                              <option value="3">Option3</option>
                              <option value="4">Option4</option>
                            </select>
                          </div>
                          <!-- Icons -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Icons" class="form-label">Icons</label>
                            <select id="select2Icons" class="select2-icons form-select">
                              <optgroup label="Services">
                                <option value="wordpress2" data-icon="bx bxl-wordpress" selected>WordPress</option>
                                <option value="codepen" data-icon="bx bxl-codepen">Codepen</option>
                                <option value="drupal" data-icon="bx bxl-drupal">Drupal</option>
                                <option value="pinterest2" data-icon="bx bxl-css3">CSS3</option>
                                <option value="html5" data-icon="bx bxl-html5">HTML5</option>
                              </optgroup>
                              <optgroup label="File types">
                                <option value="pdf" data-icon="bx bxs-file-pdf">PDF</option>
                                <option value="word" data-icon="bx bxs-file-doc">Word</option>
                                <option value="excel" data-icon="bx bxs-file-json">JSON</option>
                                <option value="facebook" data-icon="bx bxl-facebook">Facebook</option>
                              </optgroup>
                              <optgroup label="Browsers">
                                <option value="chrome" data-icon="bx bxl-chrome">Chrome</option>
                                <option value="firefox" data-icon="bx bxl-firefox">Firefox</option>
                                <option value="safari" data-icon="bx bxl-edge">Edge</option>
                                <option value="opera" data-icon="bx bxl-opera">Opera</option>
                                <option value="IE" data-icon="bx bxl-internet-explorer">IE</option>
                              </optgroup>
                            </select>
                          </div>
                          <!-- Colors -->
                          <!-- Primary -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Primary" class="form-label">Primary</label>
                            <div class="select2-primary">
                              <select id="select2Primary" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                          <!-- Success -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Success" class="form-label">Success</label>
                            <div class="select2-success">
                              <select id="select2Success" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                          <!-- Info -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Info" class="form-label">Info</label>
                            <div class="select2-info">
                              <select id="select2Info" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                          <!-- Warning -->
                          <div class="col-md-6 mb-4">
                            <label for="select2Warning" class="form-label">Warning</label>
                            <div class="select2-warning">
                              <select id="select2Warning" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                          <!-- Danger -->
                          <div class="col-md-6 mb-4 mb-md-0">
                            <label for="select2Danger" class="form-label">Danger</label>
                            <div class="select2-danger">
                              <select id="select2Danger" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                          <!-- Dark -->
                          <div class="col-md-6 ">
                            <label for="select2Dark" class="form-label">Dark</label>
                            <div class="select2-dark">
                              <select id="select2Dark" class="select2 form-select" multiple>
                                <option value="1" selected>Option1</option>
                                <option value="2" selected>Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Select2 -->
                
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>