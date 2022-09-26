import React from 'react';
import Router from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm';
import { updateMovie } from '../../../actions';

class EditMovie extends React.Component {
    constructor(props) {
        super(props)
        this.closeButton = null;
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`)
            this.closeModal();
        })
    }
    closeModal = () => {
        this.closeButton.click();
    }

    render() {
        const { movie } = this.props;
        
        if (!movie) {
            return <div>Loading...</div>
        }

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
                                <MovieCreateForm
                                    submitButton="Update"
                                    initialData={{...movie}} 
                                    handleFormSubmit={this.handleUpdateMovie}
                                />
                            </div>
                            <div className="modal-footer">
                                <button ref={ele => this.closeButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditMovie;