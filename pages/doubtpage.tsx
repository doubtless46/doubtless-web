import Link from "next/link";


function toggling(e:any) {

    if (e.target.classList.contains("like")) {
        e.target.classList.add("darkliked");
        e.target.classList.remove("like");
    }
    else {
        e.target.classList.remove("darkliked");
        e.target.classList.add("like")
    }
};
function toggling2(e:any) {
    if (e.target.classList.contains("dislike")) {
        e.target.classList.add("darkdisliked");
        e.target.classList.remove("dislike");
    }
    else {
        e.target.classList.remove("darkdisliked");
        e.target.classList.add("dislike")
    }
};
export default function Home() {
    return (
        <>
            <div className="container">
                <div >
                    <div >
                        <div className="maincomp">
                            <div className="inside">
                                <div className="topcomp">
                                    <span className='user'></span>
                                    {/* <img src="./user.png" alt="like" className='user' /> */}
                                    <span className='name'>mridul saggi</span>
                                    <span className="college"> msit</span>
                                    <div className='like' onClick={toggling}>

                                    </div>
                                    <div className='dislike' onClick={toggling2}>

                                    </div>
                                    {/* <img src={like} alt="like" className='like' id="like" onClick={toggling}/>
          <img src={like} alt="dislike" className='dislike' onClick={toggling} /> */}

                                </div>
                                <div className="container text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque, repellendus quos, explicabo odit voluptas deleniti magnam vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas vel quisquam omnis repudiandae, illum temporibus tempora alias laborum doloribus ullam placeat asperiores repellat debitis sed. Ut maiores magni in!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est quaerat aperiam qui sequi itaque impedit ab magnam hic rem accusantium, pariatur iusto provident facere numquam laboriosam enim ratione porro?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est quaerat aperiam qui sequi itaque impedit ab magnam hic rem accusantium, pariatur iusto provident facere numquam laboriosam enim ratione porro?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div >
                    <div >
                        <div className="maincomp">
                            <div className="inside">
                                <div className="topcomp">
                                    <span className='user'></span>
                                    <span className='name'>mridul saggi</span>
                                    <span className="college"> msit</span>
                                    <div className='like' onClick={toggling}>

                                    </div>
                                    <div className='dislike' onClick={toggling2}>

                                    </div>
                                    {/* <img src={like} alt="like" className='like' id="like" onClick={toggling}/>
          <img src={like} alt="dislike" className='dislike' onClick={toggling} /> */}

                                </div>
                                <div className="container text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque, repellendus quos, explicabo odit voluptas deleniti magnam vero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus similique vero, pariatur esse possimus animi commodi dicta veritatis reiciendis, sit natus praesentium quae amet dolor deserunt saepe ipsum, harum illum?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, tempora officia natus voluptatibus animi adipisci velit accusantium aspernatur consequuntur hic sequi ea, reiciendis quis culpa eligendi cumque? Quas, commodi cupiditate!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, tempora officia natus voluptatibus animi adipisci velit accusantium aspernatur consequuntur hic sequi ea, reiciendis quis culpa eligendi cumque? Quas, commodi cupiditate!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div >
                    <div >
                        <div className="maincomp">
                            <div className="inside">
                                <div className="topcomp">
                                    <span className='user'></span>
                                    <span className='name'>mridul saggi</span>
                                    <span className="college"> msit</span>
                                    <div className='like' onClick={toggling}>

                                    </div>
                                    <div className='dislike' onClick={toggling2}>

                                    </div>
                                    {/* <img src={like} alt="like" className='like' id="like" onClick={toggling}/>
          <img src={like} alt="dislike" className='dislike' onClick={toggling} /> */}

                                </div>
                                <div className="container text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque, repellendus quos, explicabo odit voluptas deleniti magnam vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse fugit cupiditate, dignissimos laboriosam eum qui odit aspernatur error perspiciatis! Molestiae ut error praesentium nam, aliquid ipsam numquam rem eligendi?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum corrupti at cumque voluptates et consectetur vero, rem perspiciatis unde? Architecto, odio. Quos, quod similique esse deleniti numquam iste natus.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae, tempora error veritatis numquam libero Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum corrupti at cumque voluptates et consectetur vero, rem perspiciatis unde? Architecto, odio. Quos, quod similique esse deleniti numquam iste natus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}