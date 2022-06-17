import React, { useEffect,useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useNavigate } from 'react-router-dom';

const Maker = ({authService}) => {
    const [cards,setCards]=useState([
        {
            id:'1',
            name:'ellie',
            company:'jyp',
            theme:'light',
            title:'engineer',
            email:'werw@nvaer.com',
            message:'go for it',
            fileName:'ellei',
            fileURL:null,
        },
        {
            id:'2',
            name:'dii',
            company:'sm',
            theme:'light',
            title:'engineer',
            email:'werw@nvaer.com',
            message:'go for it',
            fileName:'ellei',
            fileURL:'ellie.png'
        },
        {
            id:'3',
            name:'btssssd',
            company:'hybe',
            theme:'light',
            title:'engineer',
            email:'werw@nvaer.com',
            message:'go for it',
            fileName:'ellei',
            fileURL:null
        },
    ]);

    let navigate=useNavigate();
    const onLogout=()=>{
        authService.logout();
    }

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                navigate("/");
            }
        });
    })

    const addCard=(card)=>{
        const updated=[...cards, card];
        setCards(updated);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}/>
                <Preview cards={cards}/>
            </div>
            {/* <Footer /> */}
        </section>
    )
};

export default Maker;