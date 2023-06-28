import './card.styles.css'

const Card = ({feedback}) => {
  const {name,tag,review} = feedback
  return (
    <div className='box'>
      <div className="group">
        <div className="HeadC">{name}</div>
        <div className="tagC">{tag}</div>

        <div className='textC'>{review}</div>
      </div>
    </div>
  )
  // return (
  //   <div className="box">
  //     <div className="group-wrapper">
  //       <div className="group">
  //         <div className="div">
  //           <p className="basko-has-completely">
  //             <span className="text-wrapper">“</span>
  //             <span className="span">DoubtLess</span>
  //             <span className="text-wrapper-2">
  //               {" "}
  //               has completely revolutionized
  //               <br />
  //               the way I work. I used to waste so much <br />
  //               time on manual tasks, but now
  //               <br />
  //               everything is automated and <br />
  //               streamlined.”
  //             </span>
  //           </p>
  //               <div className="overlap-group">
  //                 <div className="text-wrapper-3">Daniele Watkins</div>
  //                 <div className="text-wrapper-4">@andysm</div>
  //             </div>
  //           </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Card