import { useEffect, useState } from 'react';

const MovieCreateForm = (props) => {
    const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
    const defaultData = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: ''
    }
    const formData = props.initialData ? {...props.initialData} : defaultData;
    const [form, setForm] = useState(formData);

    /* useEffect(() => {
        if(props.initialData) {
            setForm(props.initialData);
            setIsInitialDataLoaded(true);
        }
    }, [isInitialDataLoaded]); */

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        setForm({
            ...form,
            [name]: target.value
        })
    }
    const handleGenreChange = (event) => {
        const { options } = event.target;
        const optionsLength = options.length;
        let value = [];

        for(let i = 0; i < optionsLength; i++) {
            if(options[i].selected) {
                value.push(options[i].value);
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        })
    }
    const submitForm = () => {
        props.handleFormSubmit({...form})
    }

    return (
        <form>
            <div className="form-group modalColor">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Ex. Lord of the Rings" />
            </div>
            <div className="form-group modalColor">
                <label htmlFor="description">Description</label>
                <input 
                    value={form.description}
                    onChange={handleChange}
                    name="description"
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Ex. Somewhere in Middle-earth..." />
            </div>
            <div className="form-group modalColor">
                <label htmlFor="description">Rating</label>
                <input 
                 value={form.rating}
                 onChange={handleChange}
                 name="rating"
                 type="number" 
                 max="5" 
                 min="0" 
                 className="form-control" 
                 id="rating" 
                 placeholder="3" />
                <small 
                    id="emailHelp" 
                    className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group modalColor">
                <label htmlFor="image">Image</label>
                <input
                    value={form.image}
                    onChange={handleChange}
                    name="image"
                    type="text" 
                    className="form-control" 
                    id="image" 
                    placeholder="http://....." />
            </div>
            <div className="form-group modalColor">
                <label htmlFor="cover">Cover</label>
                <input
                    value={form.cover}
                    onChange={handleChange}
                    name="cover"
                    type="text" 
                    className="form-control" 
                    id="cover" 
                    placeholder="http://......" />
            </div>
            {/* <div className="form-group">
                <label for="longDesc">Long Description</label>
                <textarea c
                    lassName="form-control" 
                    id="longDesc" 
                    rows="3"></textarea>
            </div> */}
            <div className="form-group modalColor">
                <label htmlFor="genre">Genre</label>
                <select
                    onChange={handleGenreChange}
                    multiple 
                    className="form-control" 
                    id="genre">
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
            <button onClick={submitForm} type="button" className="btn btn-danger float-left">{props.submitButton || 'Create'}</button>
        </form>
    )
}

export default MovieCreateForm;