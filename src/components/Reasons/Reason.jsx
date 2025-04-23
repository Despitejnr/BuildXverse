
import React from 'react';
import './Reason.css';
import foto from '../../assets/metaverse.jpeg';
import foto1 from '../../assets/connecting.jpeg';
import foto2 from '../../assets/layeblockchain.jpeg';
import developer from '../../assets/developer.jpeg';
import ethereum from '../../assets/ethereum.jpeg';

function Reason(){
    
    return (
        <section>
            <div className="caption">
                <h1>Why build with BuildXverse?</h1>
                <p>Our mission is to make the blockchain experience seamless and scalable. Here's what you</p>
                <p>can expect when you choose to build with BuildXverse.</p>
            </div>

            <div className="grid-container">

            <div className="reasons">
                <div className="reason-grid">
                    <div className="fotos">
                    <img src={foto1} alt="Description of image" />
                    </div>
                    
                    <div className="text">
                    <h4>Fast finalaity</h4>
                    <p>Finalize tansaction in seconds</p>
                    </div>
                </div>
                
            </div>

            {/* ================== second below ================== */}

            <div className="reasons">
                <div className="reason-grid">
                    <div className="fotos">
                    <img src={foto2} alt="Description of image" />
                    </div>
                    
                    <div className="text">
                    <h4>Low fees</h4>
                    <p>Pay for transactions with ease</p>
                    </div>
                </div>
                
            </div>

            {/* ========================== third below ======================= */}

            <div className="reasons">
                <div className="reason-grid">
                    <div className="fotos">
                    <img src={developer} alt="Description of image" />
                    </div>
                    
                    <div className="text">
                    <h4>Developer fiendly</h4>
                    <p>Use familiar tools and languages</p>
                    </div>
                </div>
                
            </div>

            {/* ======================== fourth below ============================ */}

            <div className="reasons">
                <div className="reason-grid">
                    <div className="fotos">
                    <img src={ethereum} alt="Description of image" />
                    </div>
                    
                    <div className="text">
                    <h4>EVM compatible</h4>
                    <p>Deploy exixting contracts and DApps</p>
                    </div>
                </div>
                
            </div>

            </div>
        </section>
    );
}

export default Reason;