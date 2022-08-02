import React from "react";
import "./Card.css"
import Info from "./Info"
import Top from "./Top"
import Footer from "./Footer"
import avatar from "../images/avatar.png";

export default function Card(){
    return (
        <div className="container">
            <div className="card">
                <img className="avatar" src={avatar} />

                <div className="content-container">
                    <Top />
                    <Info />
                </div>
                <Footer />
            </div>
        </div>
    )
}