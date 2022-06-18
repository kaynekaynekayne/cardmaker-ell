import React, { useEffect,useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useNavigate } from 'react-router-dom';

const Maker = ({authService}) => {

    const [cards,setCards]=useState({
        '1':{
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
        '2':{
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
        '3':{
            id:'3',
            name:'btssssd',
            company:'hybe',
            theme:'light',
            title:'engineer',
            email:'werw@nvaer.com',
            message:'go for it',
            fileName:'ellei',
            fileURL:null    
        }
    });

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


    const createOrUpdateCard=(card)=>{
        setCards(cards=>{
            const updated={...cards};
            updated[card.id]=card;
            return updated;
        })
        // const updated={...cards};
        // updated[card.id]=card;
        // setCards(updated);
    }

    const deleteCard=(card)=>{
        setCards(cards=>{
            const updated={...cards};
            delete updated[card.id];
            return updated;
        })
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                    cards={cards} 
                    createOrUpdateCard={createOrUpdateCard}
                    deleteCard={deleteCard}    
                />
                <Preview cards={cards}/>
            </div>
            {/* <Footer /> */}
        </section>
    )
};

export default Maker;