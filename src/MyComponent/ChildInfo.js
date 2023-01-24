import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';
import './ChildInfo.css';
import Dashboard from './Dashboard';
export const ChildInfo = () => {
  return (
    <div>
      {/* <br>
            </br>
            <br></br>
            Child Name : <input type="text"></input>
            <br></br>
            <br></br>

            Age : <input type="text"></input>
            <br></br>
            <br></br>

            Contact No : <input type="text"></input>
            <br></br>
            <br></br>

            Date Of Birth : <input type="date"></input>
            <br></br>
            <br></br>

            Gender :
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label className="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label className="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>
            <br>
            </br> */}

      <div className="card3">
      
        <form>
          <br></br>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Childname</label>
            <div class="col-sm-2">
              <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Child name"></input><br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Age</label>
            <div class="col-sm-2">
              <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Enter Child Age"></input><br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Contact No</label>
            <div class="col-sm-2">
              <input type="tel" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Enter Contact No" maxLength={10}></input><br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Date of Birth</label>
            <div class="col-sm-2">
              <input type="date" class="form-control form-control-sm" id="colFormLabelSm"></input><br></br>
            </div>
          </div>
          <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Gender</label>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>
          <br></br>
          <br></br>
          <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">BloodGroup</label>
          <div class="form-check form-check-inline">

            <div class="col-sm-12">
              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected></option>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">B+</option>
                <option value="4">B-</option>
                <option value="5">O+</option>
                <option value="6">O-</option>
                <option value="7">AB+</option>
                <option value="3">AB-</option>
              </select>
            </div>
          </div>
          <br></br>
          <br>
          </br>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Height in cm</label>
            <div class="col-sm-2">
              <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Height(cm)"></input><br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Weight in kg</label>
            <div class="col-sm-2">
              <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Weight(kg)"></input><br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="colFormLabelSm" class="col-sm-1 col-form-label col-form-label-sm">Hospital</label>
            <div class="col-sm-2">
              <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Hospital"></input><br></br>
            </div>
          </div>
          <input class="btn btn-primary" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse " data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      </ul>
  </div>
</nav> */}

