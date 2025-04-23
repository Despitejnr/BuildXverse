import React from "react";
import './Developer.css';
import manfoto from '../../assets/profile-man1.jpeg';
import manfoto12 from '../../assets/profile-man12.jpeg';
import manfoto3 from '../../assets/profile-man3.jpeg';
import ladyintech from '../../assets/ladyintech.jpeg';

function Developer(){
    return(
        <section>
            <div className="devs">
            <h1>What developers are saying</h1>
            </div>

            <div className="devs-container">
                
                <div className="dev-conti">

                <div className="devs-card">
                    <div className="fotox">
                    <img src={manfoto} alt="Developer 1" className="devs-img" />
                    </div>
                    
                    <div className="names">
                        <h4 className="devs-name">John Doe, Blockchain Developer</h4> 
                    </div>

                    <div className="devs-text">
                        <p className="devs-para">" BuildXverse's fast finality and low</p>
                        <p>fees make it an ideal</p>
                        <p>platform for decentralized applications. "</p>
                    </div>
                </div>

                {/* ============== second below ================= */}
                
                <div className="devs-card">
                    <div className="fotox">
                    <img src={manfoto12} alt="Developer 1" className="devs-img" />
                    </div>
                    
                    <div className="names">
                        <h4 className="devs-name">Jack, DApp Developer</h4> 
                    </div>

                    <div className="devs-text">
                        <p>
                        <p>" As a developer, I </p>
                        <p>appreciate the fact that</p> 
                        <p>BuildXverse is EVM compatible. "</p>
                        </p>
                    </div>
                </div>
    
                    {/* ============== third below ================= */}
                
                <div className="devs-card">
                    <div className="fotox">
                    <img src={manfoto3} alt="Developer 2" className="devs-img" />
                    </div>
                    
                    <div className="names">
                        <h4 className="devs-name">Jane Smith, Frontend Developer</h4> 
                    </div>

                    <div className="devs-text">
                        <p>" The platform's developer-</p>
                        <p>friendly environment has</p>
                        <p>made it easy for me to </p>
                        <p>deploy existing contracts. "</p>
                    </div>
                </div>

                {/* ================= fourth below =====================  */}
                
                <div className="devs-card">
                    <div className="fotox">
                    <img src={ladyintech} alt="Developer 3" className="devs-img" />
                    </div>
                    
                    <div className="names">
                        <h4 className="devs-name">Alice, Backend Developer</h4> 
                    </div>

                    <div className="devs-text">
                        <p>" The support and resources</p>
                        <p>available for developers are</p>
                        <p>unmatched, making it a great</p>
                        <p>choice for building applications. "</p>
                    </div>
                </div>

                </div>

            </div>
        </section>
    );
}

export default Developer;