import { auth } from "../firebase";
import { formatDate } from "../helpers";

const Message = ({ message }) => {

    let newStyle = 'message';
    if(auth.currentUser){
        const user = auth.currentUser.uid;
        const newUSer = message.uid;
        newStyle = user === newUSer ? 'my-message' : 'message';
    }

    return (
        <article className={newStyle}>
            <div>
                <div className="text-message"> 
                    <p className="text"> {message.text} </p> 
                </div>
                <p className="time"> {formatDate(message.timestamp)} </p>
            </div>
            <img src={message.photo} alt="user photo" referrerPolicy="no-referrer" />
        </article>
    )
};

export default Message;
