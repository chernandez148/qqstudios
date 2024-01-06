import React from 'react';
import './styles.css';

function Highlights({ highlights }) {

    return (
        <section className='slider'>
            <div class="slide-track">
                {highlights.map((highlight) => (
                    <div className='slide'>
                        <img src={highlight.altUrl} height={100} width={250} />
                        <img src={highlight.url} height={100} width={250} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlights;
