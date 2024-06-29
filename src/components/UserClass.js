import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          Userinfo :{},
    };
}
   async componentDidMount() {
      const data = await fetch ("https://api.github.com/users/justSWAYAM");
      const json = await data.json();  
    

    this.setState({
        Userinfo:json,
        
    });
}

     render() {
        
        const {name ,login,avatar_url} = this.state.Userinfo;
        

        return (
            <div className="user-info">
                <div className="flex justify-center">
            <div className="user-card-class  justify-center shadow-2xl w-[260px]  text-black text-xl">
               <h1 className="flex justify-center p-3 m-3 font-bold">Name : {name}</h1>  
               <h3  className="flex justify-center p-3 m-3 font-bold">Login :{login}</h3>
               <div className="github-profile-container flex justify-center p-3 m-3">
               <img  className = "github-profile w-[280px] rounded-xl" src={avatar_url} alt="avatar" />
               </div>
               </div>
               
            </div>
            </div>
        );
     }
    }

export default UserClass;
