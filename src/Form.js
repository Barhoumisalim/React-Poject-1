import React from "react";
export const FormComponent = () => {
    return (
        < div className = "row d-flex text-primary justify-content-center align-items-center h-100 " >

            <form className = " col-6 form-group m-3 border border-primary rounded-3  border-5" >
                <div className = "row align-items-center pt-4 pb-3 mt-2" >
                        <div className = "col-md-3 ps-5" >

                            <h6 className = "mb-0" > Username < /h6>

                        </div>
                        <div className = "col-md-9 pe-5" >
                            <input type = "text" 
                            className = "form-control mb-3 col-6"
                            placeholder = "Enter username" / >
                        </div>
                </div >
                        <div className = "row align-items-center pt-4 pb-3" >
                        <div className = "col-md-3 ps-5" >

                            <h6 className = "mb-0" > Email address < /h6>

                        </div>
                        <div className = "col-md-9 pe-5" >
                            <input type = "email" 
                            className = "form-control mb-3 col-6"
                            placeholder = "Enter Email" / >
                        </div>
                </div >
                <div className = "row align-items-center pt-4 pb-3" >
                    <div className = "col-md-3 ps-5" >

                        <h6 className = "mb-0" > Password < /h6>

                    </div>
                    <div className = "col-md-9 pe-5" >
                        <input type = "Password" 
                        className = "form-control mb-3 col-6"
                        placeholder = "Enter Password" / >
                    </div>
                </div >
                <div className = "row align-items-center pt-4 pb-3" >
                    <div className = "col-md-3 ps-5" >

                        <h6 className = "mb-0" >  Confirm Password < /h6>

                    </div>
                    <div className = "col-md-9 pe-5" >
                        <input type = "Password" 
                        className = "form-control mb-3 col-6"
                        placeholder = "Enter Password" / >
                    </div>
                </div >
                

                <div className = "col-md-9 pe-5 mb-5 mx-auto" >
                    <button className = "btn btn-primary  col-6 mx-auto"
                    type = "submit" > Register
                    < /button>
                </div > 
            </form >
        </div >
    )
}