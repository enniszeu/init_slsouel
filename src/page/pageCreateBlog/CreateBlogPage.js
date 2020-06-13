import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  { Redirect } from 'react-router-dom';
import NavMeauBar from '.././pageManager/const_childer/nav_meau';
import '.././puclic/scss/style.css';   
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

class Editor extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                loader:"",
                heyConten:"",
                showMeau:"",
                active:true,
                editorHtml: '',
                theme: 'snow'
            }
            this.handleChange = this.handleChange.bind(this)

        }

      handleChange (html) {
        this.setState({ editorHtml: html });
        console.log(html)
        
      }
      

    showMeau = () =>{
        this.setState({
            showMeau:"showMeau",
            heyConten:"heyConten"
        })
    }
    closeMeau = () =>{
        this.setState({
            showMeau:"",
            heyConten:""
        })
    }


    render(){
        setInterval(() => {
            this.setState({ loader: "loaders" });
        }, 1000);
        const   {
                    loader, heyConten, showMeau
                    
                } = this.state
        return(
            <div>
                { loader === "loaders" ? "" :<div className="custom_loader"> <div className="loader"></div></div>}
                
                <div className={`container-fluid custom-fluid ${loader}`}>
                    <div className="row custom_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                            <div className="wapper" >
                                <div className={`nav_bar ${showMeau}`}>
                                    <h3>elsoule</h3>
                                    <hr/>
                                    <div className="nav_meau">
                                            <NavMeauBar activeBlog={this.state.active} />
                                    </div>
                                </div>
                                <div className={`conten ${heyConten}`}>
                                        { heyConten === "heyConten" ? <div className="meau_mobi" onClick={this.closeMeau}> <CloseIcon /> </div> : <div className="meau_mobi" onClick={this.showMeau}> <MenuIcon /> </div> }
                                    <h3>Dashboard</h3>
                                        <div style={{background:"#fff"}}>
                                            <ReactQuill 
                                              theme={this.state.theme}
                                              onChange={this.handleChange}
                                              value={this.state.editorHtml}
                                              modules={Editor.modules}
                                              formats={Editor.formats}
                                              bounds={'.app'}
                                              placeholder={this.props.placeholder}
                                             />
                                           </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
                        
            )
    }
        
}


Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */

export default Editor;


