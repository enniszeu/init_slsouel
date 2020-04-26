import React from 'react';



class AddChiTiet extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                products:[],
                redirct:0
            }



        }
        // componentDidMount(){
        //         var {match} = this.props;
        //         var {qty} = this.state

        //         if(match){
        //             var id = match.params.id;
        //             callApi(`product/${id}`, 'GET', null).then(res =>{
        //                 this.setState({
        //                     redirct : res.status,
        //                     products : res.data
        //                 })
                      
        //             })
        //         }

        
    render(){
        return(
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form action="" method="POST" class="form-inline" role="form">
                            
                                <div class="form-group">
                                    <label class="sr-only" for="">label</label>
                                    <input type="file" class="form-control" id="" placeholder="Input field"/>
                                </div>
                            
                                
                            
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>              
                        
            )
    }
}
        

export default AddChiTiet;