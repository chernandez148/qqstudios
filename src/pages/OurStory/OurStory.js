import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

function OurStory() {
    return (
        <div>
            <Link to="/"><IoIosArrowRoundBack /> Back</Link>
        </div>
    )
}

export default OurStory