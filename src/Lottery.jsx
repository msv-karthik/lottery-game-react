import { useState } from "react";
import { genTicket,sum } from "./helper";

export default function Lottery(){
    let [ticket,setTicket] = useState(genTicket(3));
    

    let buyTicket = ()=>{
        setTicket(genTicket(3));
    }

    let isWin = sum(ticket)===15;

    return(
        <>
            <div className="lottery-container">
                <h1>Lottery Game!</h1>
                <div className="ticket">
                    <span>{ticket[0]}</span>
                    <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
                </div>
                <br />
                <button onClick={buyTicket}>Buy New Ticket</button>
                <h3><i>{isWin? "Congratulations 🎉🎉 !!!":"Try again"}</i></h3>
            </div>
        </>
    )
}