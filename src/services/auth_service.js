import {
    getAuth, 
    GithubAuthProvider, 
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
    } from 'firebase/auth';
import { firebaseApp } from './firebase';//알아서 추가한 것

class AuthService{
    constructor(){ 
        //원래 firebase.js에서 했던걸 다 가져옴(auth 관련)
        this.firebaseAuth=getAuth(firebaseApp);//엘리는 빈칸! !
        this.googleProvider=new GoogleAuthProvider();
        this.githubProivder=new GithubAuthProvider();
    }

    login(providerName){
        const authProvider=this.getProvider(providerName);
        //최종적으로 const authProvider=new GoogleAuthProvider(); (구글일 때)
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    logout(){
        // signOut(this.firebaseAuth);
        this.firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged){ //사용자가 바뀌었을 때 원하는 기능 수행하는 함수
        // onAuthStateChanged(this.firebaseAuth,(user)=>{
        //     onUserChanged(user);
        // })

        this.firebaseAuth.onAuthStateChanged(user=>{
            onUserChanged(user);
        })
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