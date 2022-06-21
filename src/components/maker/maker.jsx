import React, { useEffect,useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useNavigate, useLocation} from 'react-router-dom';

const Maker = ({authService,FileInput,cardRepository}) => {

    let navigate=useNavigate();
    const navigateState=useLocation().state;
    const [cards,setCards]=useState({});
    const [userId, setUserId]=useState(navigateState && navigateState.id);

    const onLogout=()=>{
        authService.logout();
    }

    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync=cardRepository.syncCards(userId, cards=>{
            setCards(cards);
        })
        return ()=>stopSync();
    },[userId]);

    useEffect(()=>{//로그인에 관련된 것
        authService.onAuthChange(user=>{
            if(user){
                setUserId(user.uid);
            } else{
                navigate("/");
            }
        });
    })


    const createOrUpdateCard=(card)=>{
        setCards(cards=>{
            const updated={...cards};
            updated[card.id]=card;
            return updated;
        });
        // const updated={...cards};
        // updated[card.id]=card;
        // setCards(updated);
        cardRepository.saveCard(userId, card);
    };

    const deleteCard=(card)=>{
        setCards(cards=>{
            const updated={...cards};
            delete updated[card.id];
            return updated;
        })
        cardRepository.removeCard(userId, card);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                    cards={cards} 
                    createOrUpdateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                    FileInput={FileInput} 
                    
                />
                <Preview cards={cards}/>
            </div>
            {/* <Footer /> */}
        </section>
    )
};

export default Maker;