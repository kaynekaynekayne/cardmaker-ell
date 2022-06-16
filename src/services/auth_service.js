import {
    getAuth, 
    GithubAuthProvider, 
    GoogleAuthProvider,
    signInWithPopup
    } from 'firebase/auth';
import { firebaseApp } from './firebase';//알아서 추가한 것

class AuthService{
    constructor(){ 
        //원래 firebase.js에서 했던걸 다 가져옴(auth 관련)
        this.firebaseAuth=getAuth(firebaseApp);
        this.googleProvider=new GoogleAuthProvider();
        this.githubProivder=new GithubAuthProvider();
    }

    login(providerName){
        const authProvider=this.getProvider(providerName);
        //최종적으로 const authProvider=new GoogleAuthProvider(); (구글일 때)
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return this.googleProvider;
            case 'Github':
                return this.githubProivder;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}


export default AuthService;