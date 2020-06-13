import React from 'react';
import Proce from './Proce';
import callApi from './../../utils/apicaler';
import {storage} from './../../utils/ConfigFirebase';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NavMeauBar from '.././pageManager/const_childer/nav_meau';
import  { Redirect } from 'react-router-dom'
import '.././puclic/scss/style.css';
import axios from 'axios';   
import {
  Link
} from "react-router-dom";

class CreatePage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                products:"",
                price:"",
                species:"",
                kho:"",
                describe:"",
                date:Date(),
                image: null,
                valueInput:"",
                imageName:"",
                progress:"",
                loader:"",
                heyConten:"",
                showMeau:"",
                active:true,
                progress:0,
                ERRimage:"",
                ERRproducts:"",
                ERRprice:"",
                ERRspecies:"",
                ERRdescribe:"",
                imgeFile:"",
                image1:"",
                image2:"",
                image3:"",
                image4:"",
                file: '',
                file1: '',
                file2: '',
                file3: '',
                file4: '',
                imagePreviewUrl: '',
                redirct:0,
                alertCustom:"",
                color1:"",
                color2:"",
                color3:"",
                color4:"",
                color5:"",
                conten:""
            }

            this.onChangeProducts = this.onChangeProducts.bind(this);
            this.onChangePrice = this.onChangePrice.bind(this);
            this.onChangeSpecies = this.onChangeSpecies.bind(this);
            this.onChangeKho = this.onChangeKho.bind(this);
            this.onChangeDescribe = this.onChangeDescribe.bind(this);
            this.onChangeDate = this.onChangeDescribe.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            // this.onChangeImage1 = this.onChangeImage1.bind(this);
            // this.onChangeImage2 = this.onChangeImage2.bind(this);
            // this.onChangeImage3 = this.onChangeImage3.bind(this);
            // this.onChangeImage4 = this.onChangeImage4.bind(this);
            this.onChangeColor1 = this.onChangeColor1.bind(this);
            this.onChangeColor2 = this.onChangeColor2.bind(this);
            this.onChangeColor3 = this.onChangeColor3.bind(this);
            this.onChangeColor4 = this.onChangeColor4.bind(this);
            this.onChangeColor5 = this.onChangeColor5.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        

    onChangeProducts(e){
        this.setState({
            products: e.target.value
        });
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
    onChangeSpecies(e){
          this.setState({
            species:e.target.value
          })
    }
    onChangeKho(e){
          this.setState({
            kho:e.target.value
          })
    }

    onChangeDescribe(e){
        this.setState({
            describe: e.target.value
        });
    }
    onChangeDate(e){
        this.setState({
            date: e.target.value
        });
    }
    onChangeColor1(e){
        this.setState({
            color1: e.target.value
        });
    }
    onChangeColor2(e){
        this.setState({
            color2: e.target.value
        });
    }
    onChangeColor3(e){
        this.setState({
            color3: e.target.value
        });
    }
    onChangeColor4(e){
        this.setState({
            color4: e.target.value
        });
    }
    onChangeColor5(e){
        this.setState({
            color5: e.target.value
        });
    }
    onChangeImage(e){
        let file = e.target.files[0];

          this.setState({
            file: file
          }); 
    }
    onChangeConten(e){
        this.setState({
            conten: e.target.value
        });
    }

    // onChangeImage1(e){
    //     let file1 = e.target.files[0];
    //     console.log(file1)
    //       this.setState({
    //         file1: file1
    //       }); 
        
    // }

    // onChangeImage2(e){
    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     reader.onloadend = () => {
    //       this.setState({
    //         file2: file,
    //         image2: reader.result
    //       });
    //     }

    //     reader.readAsDataURL(file)
        
    // }
    // onChangeImage3(e){
    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     reader.onloadend = () => {
    //       this.setState({
    //         file3: file,
    //         image3: reader.result
    //       });
    //     }

    //     reader.readAsDataURL(file)
        
    // }
    // onChangeImage4(e){
    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     reader.onloadend = () => {
    //       this.setState({
    //         file4: file,
    //         image4: reader.result
    //       });
    //     }

    //     reader.readAsDataURL(file)
        
    // }


    callApiFunc = () => {
        var {conten, products, price, species, describe,file, kho, date, color1, color2, color3, color4, color5} = this.state;

        const formData = new FormData();
        formData.append('imgeFile',file);
        formData.append('products',products);
        formData.append('price',price);
        formData.append('species',species);
        formData.append('describe',describe);
        formData.append('kho',kho);
        formData.append('date',date);
        formData.append('color1',color1);
        formData.append('color2',color2);
        formData.append('color3',color3);
        formData.append('color4',color4);
        formData.append('color5',color5);
        formData.append('conten',conten);

        callApi('create', 'POST', formData).then(res =>{
            this.setState({redirct : res.status})
        }) 
    }

    onSubmit(e){
        e.preventDefault();
        var { products, price, species, describe,file} = this.state;
        
        // if(!file){
        //   this.setState({ERRimage:"ERRimage"})
        //   return true;
        // }
        // if(!products){
        //   this.setState({ERRproducts:"ERRproducts"})
        //   return true;
        // }
        // if(!price){
        //   this.setState({ERRprice:"ERRprice"})
        //   return true;
        // }
        // if(!species){
        //   this.setState({ERRspecies:"ERRspecies"})
        //   return true;
        // }
        // if(!describe){
        //   this.setState({ERRdescribe:"ERRdescribe"})
        //   return true;
        // }
        this.setState({alertCustom : "alertCustom"})
        // {this.thenGetDownloadUrl()}
        {this.callApiFunc()}

        
          
    }

    // thenGetDownloadUrl = () =>{
    //   var {kho, products, price, species, describe, date, imgeFile, color1, color2, color3, color4, color5, image1, image2, image3, image4} = this.state;
    //   this.callApiFunc({
    //     products:products,
    //     price:price,
    //     species:species,
    //     kho:kho,
    //     describe:describe,
    //     date:date,
    //     imgeFile:imgeFile,
    //     color1:color1,
    //     color2:color2,
    //     color3:color3,
    //     color4:color4,
    //     color5:color5,
    //     image1:image1,
    //     image2:image2,
    //     image3:image3,
    //     image4:image4
    //   });
    // }

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
                    loader, heyConten, showMeau, imageName, progress,imgeFile,redirct,alertCustom
                    
                } = this.state
        return(
            <div>
               { loader === "loaders" ? "" : <div className="loader loader-black loader-1"></div>}
                
                <div className={`container-fluid custom-fluid ${loader}`}>
                    <div className="row custom_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">
                            <div className="wapper" >
                                <div className={`nav_bar ${showMeau}`}>
                                    <h3>elsoule</h3>
                                    <hr/>
                                    <div className="nav_meau">
                                            <NavMeauBar activeProduct={this.state.active} />
                                    </div>  
                                </div>
                                <div className={`conten ${heyConten}`}>
                                        { heyConten === "heyConten" ? <div className="meau_mobi" onClick={this.closeMeau}> <CloseIcon /> </div> : <div className="meau_mobi" onClick={this.showMeau}> <MenuIcon /> </div> }
                                    <h3>Thêm sảm phẩm</h3>
                                        <div className="row custom_row" id={alertCustom !== "" ? "alertCustom" : ""}>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 custom_col">
                                                <div className="card">
                                                  <div className="img_bia">
                                                  </div>
                                                  <div className="card-body">
                                                    
                                                    <h5 className="card-title">Bich cho</h5>
                                                    <p className="card-text">Ngu si</p>
                                                    <hr/>
                                                    <div className="send_mail">
                                                        <button type="button" style={{padding:"2px 10px"}}>Xem Them</button>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="card">
                                                {/*  <div className="box_upload">
                                                    
                                                    <h3 className="card-title">Img Product</h3>
                                                    { imgeFile ? <img src={imgeFile} /> : ""}
                                                  </div>*/}
                                                </div>

                                            </div>

              
                                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 custom_col">
                                                <form onSubmit={this.onSubmit} encType="multipart/form-data" action="/create" >
                        
                                                    {this.showTable()}
                                                
                                                    <button type="submit" 
                                                            className="btn btn-primary upload_button"
                                                    >
                                                    Upload
                                                    </button>
                                                </form>
                                                
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {alertCustom !== "" ? <div className=""><Proce /></div> : ""}         
                    {redirct === 200 ? <Redirect to='manager'  /> : ""}
                </div>     

            </div>              
                        
            )
    }
    showTable = () =>{
        const tables =[
            {
                input: <div><p>Date</p><input type="text" name="date" className="form-control date" disabled placeholder={Date()} value={Date()} onChange={this.onChangeDate}/></div>
            },
            {
                input: <div className="" >
                          <select style={{width:"20%", height:"50px", background:"#cce5ff96", border:"none"}} defaultValue={'DEFAULT'} className="form-control input-custom" id="inlineFormCustomSelect" onChange={this.onChangeConten} name="conten">
                            <option value="DEFAULT" disabled>Chọn mục</option>
                            <option defaultValue="1">Mỹ phẩm</option>
                            <option defaultValue="1">Thời trang</option>
                            <option defaultValue="2">Phụ kiện</option>
                            <option defaultValue="3">Lặt vặt</option>
                          </select>
                        </div>
            },
            {
                input:<div><p>Tên sản phẩm</p><input type="text" name="products" className={`form-control ${this.state.ERRproducts}`} placeholder="products" onChange={this.onChangeProducts}/></div>
            },
            {
                input:<div><p>Species</p><input type="text" name="species" className={`form-control species ${this.state.ERRspecies}`} placeholder="species" onChange={this.onChangeSpecies}/></div>
            },
            {
                input:<div><p>Kho</p><input type="text" name="kho" className={`form-control species`} placeholder="kho" onChange={this.onChangeKho}/></div>
            },
            {
                input:<div>
                        <p>Màu sản phẩm</p>
                        <input className="form-check-input" type="text" name="color1" id="inlineRadio1" onChange={this.onChangeColor1}/>
                         &nbsp;
                        <input className="form-check-input" type="text" name="color2" id="inlineRadio1" onChange={this.onChangeColor2}/>
                         &nbsp;
                        <input className="form-check-input" type="text" name="color3" id="inlineRadio1" onChange={this.onChangeColor3}/>
                         &nbsp;
                        <input className="form-check-input" type="text" name="color4" id="inlineRadio1" onChange={this.onChangeColor4}/>
                         &nbsp;
                        <input className="form-check-input" type="text" name="color5" id="inlineRadio1" onChange={this.onChangeColor5}/>
                         &nbsp;

                    </div>
            },
            {
                input:<div><p>Gía</p><input type="number" name="price" className={`form-control price ${this.state.ERRprice}`} placeholder="$" onChange={this.onChangePrice}/><b>.000 Vnd</b></div>
            },
            
            {
                input:<div><p>Hình ảnh</p><input name="imgeFile" className={`form-control file imageFile ${this.state.ERRimage}`} id="exampleFormControlFile1" type="file" onChange={this.onChangeImage} /></div>
            },
            {
                input:<div>
                        <p>Mô tả sản phẩm</p>
                        <textarea 
                            className={`form-control ${this.state.ERRdescribe}`} 
                            id="exampleFormControlTextarea1" rows="6" 
                            type="text" name="describe" 
                            placeholder="Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions." 
                            onChange={this.onChangeDescribe}
                        >
                        </textarea>
                     </div>
            }
        ]
        var result = null;
            result = tables.map((table, index)=>{
                return (
                    <div className="form-group" key={index}>
                        <label></label>
                        {table.input}
                    </div>
                )
            })
        

        return result;
    }

}

export default CreatePage;