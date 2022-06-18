import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({card,createOrUpdateCard, deleteCard}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL
    }=card;

    
    const onChange=(e)=>{
        if(e.currentTarget==null){
            return;
        }
        e.preventDefault();
        console.log(e.currentTarget.value)
        createOrUpdateCard({
            ...card,
            [e.currentTarget.name]:e.currentTarget.value
        })
    };

    const onSubmit=()=>{
        deleteCard(card);
    }

    return(
        <form className={styles.form}>
            <input 
                className={styles.input}
                type="text" 
                name="name" 
                value={name}
                onChange={onChange}/>
            <input 
                className={styles.input}
                type="text"
                name="company" 
                value={company}
                onChange={onChange}/>
            <select
                className={styles.select}
                name="theme" 
                value={theme}
                onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input 
                className={styles.input}
                type="text" 
                name="title" 
                value={title}
                onChange={onChange}/>
            <input 
                className={styles.input}
                type="text" 
                name="email" 
                value={email}
                onChange={onChange}/>
            <textarea 
                className={styles.textarea}
                name="message" 
                value={message}
                onChange={onChange}></textarea>
            
            <div className={styles.fileInput}>
                <ImageFileInput name={fileName} />
            </div>
            <Button name="Delete" onClick={onSubmit}/>

        </form>
    )
};

export default CardEditForm;