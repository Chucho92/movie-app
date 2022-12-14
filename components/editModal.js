import React from "react";

class EditModal extends React.Component {
    constructor(props) {
        super(props)
        this.closeButton = null;
    }
    closeModal = () => {
        this.closeButton.click();
    }
    submitModal = () => {
        this.closeModal();
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-warning btn-lg mr-1" data-toggle="modal" data-target="#exampleModal">
                Edit
                </button>
    
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Movie</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button ref={ele => this.closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;
