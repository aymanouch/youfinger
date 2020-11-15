import React, {useEffect} from 'react';
import './Form.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import jump from 'jump.js';
function Form(props) {
    useEffect(()=> {
        jump('body');
    }, [])
    return (<div className="form-send">
               <div className="order-products">
                   <div className="content-image">
                       <img className="img-product" alt={props.info.name} src={props.info.src}/>
                   </div>
                   <div className="name-quantity">
                     <h3>{props.info.name}<br /> {props.info.price} MAD</h3>
                     <div className="qutity-input">
                         <input id="quntity-number" type="number" placeholder="quantity" defaultValue="1"/>
                     </div>
                   </div>
               </div>
               <div className="form--customer__info">
                   <form id="myForm">
                       <div className="fullname hokaro">
                           <label htmlFor='fullname'>Nom complet / اسم الكامل  :</label>
                           <input type="text" id="fullname" name="fullname"/>
                       </div>
                       <div className="number-phone hokaro">
                           <label htmlFor='number-phone'>Numero de telephone / هاتف : </label>
                           <input type="text" id="number-phone" name="numberphone"/>
                       </div>
                       <div className="address hokaro">
                           <label htmlFor='address'>address&amp; ville / عنوان ومدينة</label>
                           <input type="text" id="address" name="address"/>
                       </div>
                       <div className="quantity hide-input">
                           <label htmlFor='quantity'>quantity</label>
                           <input type="number" id="quantity" name="quantity"/>
                       </div>
                       <div className="productname hide-input">
                           <label htmlFor='productname'>quantity</label>
                           <input type="text" id="productname" name="productname" defaultValue={props.info.name}/>
                       </div>
                   </form>
                   <div className="btn-submit__container">
                       <button className="btn-submit__send" onClick={()=> {sendData()}}>
                         Commander
                       </button>
                       <Link to={`/${props.info.name}`}><button className="btn-submit__cancel" onClick={props.handleCancel}>
                           retour
                       </button></Link>
                   </div>
                   <div className="msg-confirment">
                   La commande est prête. Pour commander plus de produits, cliquez <Link to="/products" onClick={()=> {scrollToElement()}}>ici</Link>      
                   </div>
               </div>
           </div>);
}
function sendData() {
    //function send data to google sheets file
    var username = $("#fullname"),
    numberPhone = $("#number-phone"),
    address = $("#address");
    if(username.val().length > 3 && numberPhone.val().length >= 10 && address.val().length> 3) {
        username.siblings("label").css('color', 'black');
        numberPhone.siblings("label").css('color', 'black');
        address.siblings("label").css('color', 'black');
        $('#quantity').val($('#quntity-number').val());
        $.ajax({
            url:'https://api.apispreadsheets.com/data/3533/',
            type:'post',
            data:$("#myForm").serializeArray(),
            success: successFunction(username, numberPhone, address),
            error: function(){
            alert("There was an error :(")
            }
     });
    } else {
        if(username.val().length <= 3) {
            username.siblings("label").css('color', 'red');
        }else{
            username.siblings("label").css('color', 'black');
        }
        if(numberPhone.val().length < 10) {
            numberPhone.siblings("label").css('color', 'red');
        } else {
            numberPhone.siblings("label").css('color', 'black');
        }
        if(address.val().length <= 3) {
            address.siblings("label").css('color', 'red');
        } else {
            address.siblings("label").css('color', 'black');
        }
    }
}
function successFunction(username, numberPhone, address) {
    username.val('');
    numberPhone.val('');
    address.val('');
    $('.msg-confirment').animate({
        opacity:1
    },200)

}
function scrollToElement() {
    jump('body')
}
export default Form;