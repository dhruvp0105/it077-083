import React from 'react'

export const ChildInfo = () => {
    return (
        <div>ChildInfo
            <br>
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
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label class="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>
            <br>
            </br>

            

        </div>
        
    )
}

