import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
        <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
            <i className='bi bi-chat-left-text'></i>
            <span className='badge bg-primary badge-number'>3</span>
        </a>
        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-errow messages'>
            <li className='dropdown-header'>
                You have 4 new notifications
                <a href="#">
                    <span className=' badge rounded-pill bg-primary p-2 ms-2'>
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='message-item'>
                <a href="#">
                    <img src="" alt="img" className='rounded-circle'/>
                    <div>
                        <h4>maria hudson</h4>
                            <p>hsudhf dsfiojsd sdfijsodf dsfjosdf</p>
                        <p>4 hrs. ago</p>
                    </div>
                </a>
            </li>

            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='message-item'>
                <a href="#">
                    <img src="" alt="img" className='rounded-circle'/>
                    <div>
                        <h4>maria hudson</h4>
                            <p>hsudhf dsfiojsd sdfijsodf dsfjosdf</p>
                        <p>4 hrs. ago</p>
                    </div>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='message-item'>
                <a href="#">
                    <img src="" alt="img" className='rounded-circle'/>
                    <div>
                        <h4>maria hudson</h4>
                            <p>hsudhf dsfiojsd sdfijsodf dsfjosdf</p>
                        <p>4 hrs. ago</p>
                    </div>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>

            <li className='message-item'>
                <a href="#">
                    <img src="" alt="img" className='rounded-circle'/>
                    <div>
                        <h4>maria hudson</h4>
                            <p>hsudhf dsfiojsd sdfijsodf dsfjosdf</p>
                        <p>4 hrs. ago</p>
                    </div>
                </a>
            </li>
            <li>
                <hr className='dropdown-divider'/>
            </li>
            <li className='dropdown-footer'>
                <a href="#"> Show all notifications</a>

            </li>
        </ul>
    </li>
  )
}

export default NavMessage