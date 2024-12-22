import React from "react";

export default function CreateBill(){
    return(
        <div id='create-new-bill-page-container'>
            <form id='create-new-bill-form'>
                <div class='create-new-bill-input-group'>
                    <label id='bill-name'>Bill Name: </label>
                    <input type="text" class='create-bill-form-input' placeholder='Enter bill/account name here'></input>
                </div>
                <div class='create-new-bill-input-group'>
                    <label id='bill-name'>Amount: </label>
                    <input type="number" class='create-bill-form-input' placeholder='Enter bill/account amount due'></input>
                </div>
            </form>
        </div>
    )
}