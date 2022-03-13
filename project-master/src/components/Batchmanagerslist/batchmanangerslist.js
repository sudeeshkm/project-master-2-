import React from "react";
import "./batchmanagerslist.css"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery';


$(document).on("click", ".edit", function(){		
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });		
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
});


$(document).on("click", ".delete", function(){
    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
});

function Batchmanagerslist(props) {

    
            
            

    return (
        <div className='batchM'>

            
        <div>
        <p id="batchMheading">Batch Managers</p>
<div className="container-lg">
        <div className="tablew">
            <div className="table">
                <div className="row">
                    {/* <div className="col-sm-12">
                        <button type="button" className="btn btn-info add-batchmanager"> Add BatchManager</button>
                    </div> */}
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>BATCH</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bruno Fernandes</td>
                        <td></td>              
                        <td>
                            {/* <a className="add" title="Add" >Add</a> */}
                            {/* <a className="edit" title="Edit" >Edit</a> */}
                            <a className="delete" title="Delete">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jadon Sancho</td>
                        <td></td>                     
                        <td>
                        {/* <a className="add" title="Add" >Add</a> */}
                            {/* <a className="edit" title="Edit" >Edit</a> */}
                            <a className="delete" title="Delete">Delete</a>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>Marcus Rashford</td>
                        <td></td>                  
                    <td>
                        {/* <a className="add" title="Add" >Add</a> */}
                            {/* <a className="edit" title="Edit" >Edit</a> */}
                            {/* <a className="delete" title="Delete">Delete</a>
                        </td>
                    </tr>       */} 
                </tbody>
            </table>
        </div>
    </div>
</div>     
    
    
    </div>
    );
}



export default Batchmanagerslist ;