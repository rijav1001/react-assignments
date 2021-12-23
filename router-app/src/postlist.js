import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons"
// import { faShare } from "@fortawesome/free-regular-svg-icons"

function Postlist(props) {
    const dd = new Date(parseInt(props.date));
    const mm = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = dd.getDate() + " " + mm[dd.getMonth()] + " " + dd.getFullYear();

    return (
        <>
        <div className='post-list'>
            <div className='post-head'>
                <div className='username'>
                    <h1>{props.name}</h1>
                    <h2>{props.location}</h2>
                </div>
                <FontAwesomeIcon icon={faEllipsisH} size='1.5x'/>
            </div>
            <img src={props.PostImage} alt='Retry'/>
            <div className='post-details'>
                <div className='post-details-sub'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHeart} size='1.5x'/>
                        <FontAwesomeIcon icon={faComment} size='1.5x' style={{"paddingLeft": "1vw"}}/>
                        {/* <FontAwesomeIcon icon={faShare} size='1.5x' style={{"paddingLeft": "2vw"}}/> */}
                        <h3>{props.likes} likes</h3>
                    </div>
                    <h3>{date}</h3>
                </div>
                <h2>{props.description}</h2>
            </div>
        </div>
        </>
    )
}

export default Postlist
