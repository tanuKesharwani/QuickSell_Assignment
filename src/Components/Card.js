import React from 'react'
import options from '../icons';
function Card(props) {

  return (
    <div>
        <div className='cardMain'>
            {/* this dive for camname and profiel */}
            <div className='cardSectionOne'>
                <div style={{fontSize:"18px"}}><h4>{props.id}</h4></div>
                <div className='cardProfile'>
                    <img alt='Profile' width={35} height={35} className='cardProfleImage'         src='https://images.unsplash.com/photo-1698763953556-355a0d5708d6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
/>
                    <div className='cardProfileStatus'></div>    
                </div>
            </div>
            {/* this div is for titel */}
            <div style={{marginTop:'-30px',display:'flex',flexDirection:'row',gap:'15px',alignItems:'center'}}>
                {options.get(props.status)}
                <p>{props.title}</p></div>
            {/* this dive for featuresction */}
            <div className='cardSectionThird'>
           <div className='cardPriorityStatus'>{options.get(props.priority)}</div> 
                {/* this is for feature one value */}
                <div className='tag'>
                    <div className='tage2'>
                        {props.tag}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card