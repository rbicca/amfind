import db from '../../util/firebase.config';
import { useState, useEffect } from 'react';
import classes from './Producao.module.css';

const Producao = () =>{
    const [regs,setRegs]=useState([]);

    const fetchProds = async () =>{

        const resp = db.collection('OPERATIONS').orderBy('createdAt', 'desc');
        const data=await resp.get();
        var ret = [];
        data.forEach(item=>{
            console.log(item.data());
            ret.push( {id: item.id,  ...item.data()});
           });
        
        setRegs(ret);
    };

    useEffect(() => {
        fetchProds();
      }, []);


    const itens = regs.map( r => {
        return(
        <li key={r.id}>    
            <div>
                {r.data } - {r.hora} - {r.operacao}
            </div>
            <div>
                <img src={r.foto} alt = 'imagem do equipamento' className={classes.imagem}/>
            </div>    
        </li>
        );
    });

    return (
        <div>
            <h2>Produção</h2>  
            <hr />
            <p>oi</p>     
            <ul>
                {itens}
            </ul>
        </div>
        
    );
}

export default Producao;