import React from 'react'

const form = () => {
    return (
        <div>
           <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
        
                {/* <!-- Modal content--> */}
                <div class="modal-content">
                    <div class="modal-header text-center">
                        
                        <h4 class="col-11 modal-title text-center">Sign in</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Sign in to your account for free access.</p>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <div class="col-md-12 text-center">
                                <button type="button" class="btn btn-info btn-outline-primary2" data-dismiss="modal">Sign in</button>
                                <p class="signText">Don't have an account? <a href="#">Sign up</a></p>
                            </div>
                            
                        </form>
                    </div>
                    
                    
                </div>
        
            </div>
        </div>
        </div>
    );    
}

export default form;