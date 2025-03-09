import React,{Component} from "react";


class Comp1 extends Component{
    constructor(props){
        super()
        this.fee=15000
        this.tr=props.teacher
    }
    render(){
        return(
            <div>
                <h1>
                   ...Welcome To React...
                </h1>
                <h3>{this.props.name}, {this.props.course}, {this.fee}, {this.tr}.</h3>
            </div>
        )
    }
}
export default Comp1;