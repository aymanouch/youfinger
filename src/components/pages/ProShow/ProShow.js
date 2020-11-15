import jump from 'jump.js';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './proshow.css';
function ProShow ({name, price, prevPrice, id, type, img}) {
    const [afcForm, setAfcForm] = useState(false);
    useEffect(() => {
          jump('.proshow-container',{offset:-100});
    }, [])
    return (
        <>
       <div className="proshow-container">
          <div className="container">
          <div className="proshow-flex-container">
          <div className="box-left">
          <div className="cicle-one"></div>
          <div className="img-flower__flower1"><img alt="flower" src="./images/design-images/flower02.png" /></div>
            <div className="container-image">
                <div className="product-image__proshow"></div>
                <img alt={name} src={img} />
            </div>
           </div>
           <div className="box-right">
               <div className="name-product"><h1>{name}</h1></div>
               <div className="img-flower__flower2"><img alt="flower" src="./images/design-images/flower.png" /></div>
               <div className="cicle-tow"></div>
               <div className="start-review"></div>
               <div className="descri-product">
                   <p>
                    {name} est un parfum merveilleux, beau et merveilleux qui ressemble à un champ de fleurs exquises et variées
                    Ce parfum est merveilleux et ajoute un beau parfum à votre apparence
                    Un parfum qui dure le plus longtemps qu'un autre parfum peut durer
                    Cela laisse une bonne impression aux gens autour et vous donne la confiance d'agir librement
                    Vous êtes sûr que ce parfum fera tomber tout le monde amoureux de votre parfum, ce {type}
                   </p>
               </div>
               <div className="payment-info">
                   <div className="price-product">{price} MAD</div>
                   <Link to={`/demmande-${name}`}><button>demmander</button></Link>
                   {/* <button onClick={()=> {setAfcForm(!afcForm)}}>demmander</button> */}
               </div>
           </div>
          </div>
          {/* <ScorllBox /> */}
       </div>
       </div>
       <div className="form-container">
                    {/* {afcForm&&<Form info={{name:name, src:img, price:price}} handleCancel={() => {setAfcForm(!afcForm)}}/>} */}
          </div>
       </>
    );
};
export default ProShow;