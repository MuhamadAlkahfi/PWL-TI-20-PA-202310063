import React, {Component} from "react"
import Layout from "./Layout"

class Widget1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "Pem WEB Lanjut My Apps",
      };
    }
  
    input = (value) => {
      this.setState({ title: value });
    };
    // const [title, setTitle]= useState ("My Apps");
    render(){
    return (
        <Layout title={this.state.title}>
         <form method="post" autoComplete="off" className="form w-100">
            <div className="text-center mb-10">
                <h1 className=" text-dark mb-3"> Widget One</h1>
                <div className="text-muted fw-bold fs-5">
                    Please fill up this form with correcty
                </div>
            </div>

            <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="form-label fs-6 fw-bolder text-dark">Type the title of this web</label>
                <input type="text" name="title" className="form-control form-control-lg form-control-solid text-muted" defaultValue={this.state.title}
                            onChange={(a)=>this.input(a.target.value)}/>
            </div>

            <div className="text-center">
                <button type="button" className="btn btn-lg btn-primary w-100 b-5 mt-3">submit</button>
            </div>
         </form>
        </Layout>
    )
    }
}
export default Widget1;