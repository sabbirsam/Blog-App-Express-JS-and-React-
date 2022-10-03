import React from 'react'
import Menu from "../components/Menu";
import {Link} from 'react-router-dom'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"

function Single() {
  return (
    <div className='single'>
      <div className="content">
          <img src="https://images.pexels.com/photos/13771245/pexels-photo-13771245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="user">
            <img src="https://images.pexels.com/photos/13461809/pexels-photo-13461809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="info">
              <span>John Doe</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
             <Link to={`/write?edit=2`}>
             <img src={Edit} alt="" />
             </Link>
             <img src={Delete} alt="" />
            </div>
          </div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt assumenda eum ullam nihil soluta et? Eos asperiores officia distinctio laborum perspiciatis dolorum animi obcaecati aperiam earum laboriosam, perferendis reprehenderit omnis, iusto sequi, repellendus quod ducimus aut odio! Reiciendis qui laborum asperiores exercitationem, consequatur placeat pariatur voluptas facere dignissimos natus quas, nostrum quis excepturi maiores dolores ab porro praesentium incidunt veritatis soluta commodi! Quis delectus pariatur nostrum itaque commodi, ex ab dolor, ea neque molestiae minima nulla omnis quia iure repellendus odit? Error, tenetur natus! Vitae, earum dolore distinctio, nihil adipisci laudantium porro id aliquid fugit explicabo officiis alias. Totam, suscipit.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
