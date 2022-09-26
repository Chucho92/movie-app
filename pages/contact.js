

const Contact = () => {
    return (
        <div className="row justify-content-center">
            <form>
                <br />
                <div className="form-row">
                    <div className="col-md-4 mb-3 fontColor">
                    <label htmlFor="validationDefault01">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Jesus" required />
                    </div>
                    <div className="col-md-4 mb-3 fontColor">
                    <label htmlFor="validationDefault02">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Lopez" required />
                    </div>
                    <div className="col-md-4 mb-3 fontColor">
                    <label htmlFor="validationDefaultUsername">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>
                        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                    </div>
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="col-md-6 mb-3 fontColor">
                    <label htmlFor="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
                    </div>
                    <div className="col-md-3 mb-3 fontColor">
                    <label htmlFor="validationDefault04">State</label>
                    <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
                    </div>
                    <div className="col-md-3 mb-3 fontColor">
                    <label htmlFor="validationDefault05">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="col-md-6 mb-3 fontColor">
                        <label htmlFor="validationDefault03">Phone</label>
                        <input type="text" className="form-control" id="validationDefault03" placeholder="Phone" required />
                    </div>
                    <div className="col-md-6 mb-3 fontColor">
                        <label htmlFor="validationDefault03">E-mail</label>
                        <input type="text" className="form-control" id="validationDefault03" placeholder="E-mail" required />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label fontColor" htmlFor="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <button className="btn btn-danger" type="submit">Submit form</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </form>
            
        </div>
        
    )
}

export default Contact;