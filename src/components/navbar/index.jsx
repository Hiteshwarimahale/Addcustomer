import React from 'react'
import './index.css'
import upgradenow from '../image/upgrade now.png'
import photo1 from '../image/photo1.png'
import free from '../image/free.png'
import logout from '../image/logout.png'
import baseimg from '../image/baseimg.png'
import dashimg from '../image/dashimg.png'
import r1 from '../image/r1.png'
import r2 from '../image/r2.png'
import invoice from '../image/invoice.png'
import shedu from '../image/shedu.png'
import calender from '../image/calender.png'
import message from '../image/message.png'
import notification from '../image/notification.png'
import setting from '../image/setting.png'

const customerlist = [{

}]
const Navbar = () => {
    return (
        <div >
            <ul>
                <li>
                    <a id="base1" href="#"  > <img id='first' src={baseimg} height={40} width={40} /> Base
                    </a>

                    <div>

                        <a id='dashboard1' href="#"> <img id='dash' src={dashimg} /> Dashboard

                        </a>

                        <a id='analytics' href="#"> <img id='ana1' src={r1} /> < img id='ana2' src={r2} /> Analytics

                        </a>

                        <a href="#" id='invoice1' >  <img id='invo' src={invoice} height={24} width={24} /> Invoice

                        </a>

                        <a href="#" id='shedual1' >  <img id='shed' src={shedu} height={24} width={24} /> Shedual


                        </a>

                        <a href="#" id='calender1' > <img id='calen' src={calender} height={20} width={18} /> Calender


                        </a>

                        <a href="#" id='message1' > <img id='messag' src={message} height={24} width={24} /> < svg id='fournine' width="14" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16 8.07C4 8.07 3.87333 8.02667 3.78 7.94C3.68667 7.84667 3.64 7.72 3.64 7.56V6.57H0.96C0.793333 6.57 0.66 6.53333 0.56 6.46C0.46 6.38667 0.41 6.27667 0.41 6.13C0.41 6.03667 0.433333 5.94 0.48 5.84C0.526667 5.74 0.603333 5.61 0.71 5.45L3.62 1.22C3.69333 1.10667 3.77667 1.02333 3.87 0.97C3.96333 0.91 4.07 0.88 4.19 0.88C4.33 0.88 4.44333 0.923333 4.53 1.01C4.62333 1.09 4.67 1.21667 4.67 1.39V5.7H5.3C5.61333 5.7 5.77 5.84333 5.77 6.13C5.77 6.42333 5.61333 6.57 5.3 6.57H4.67V7.56C4.67 7.9 4.5 8.07 4.16 8.07ZM3.64 5.7V2.56L1.49 5.7H3.64ZM8.47609 8.09C8.18276 8.09 7.87609 8.03667 7.55609 7.93C7.24276 7.82333 6.95609 7.67 6.69609 7.47C6.58943 7.39 6.52943 7.29333 6.51609 7.18C6.50276 7.06667 6.52276 6.96333 6.57609 6.87C6.62943 6.77 6.70609 6.70333 6.80609 6.67C6.91276 6.63667 7.02943 6.66 7.15609 6.74C7.38276 6.90667 7.60609 7.02667 7.82609 7.1C8.05276 7.17333 8.27609 7.21 8.49609 7.21C9.11609 7.21 9.58943 6.98667 9.91609 6.54C10.2494 6.08667 10.4161 5.41333 10.4161 4.52V4.12C10.2828 4.52667 10.0494 4.84667 9.71609 5.08C9.38943 5.30667 9.00943 5.42 8.57609 5.42C8.16276 5.42 7.79609 5.32333 7.47609 5.13C7.16276 4.93667 6.91609 4.67333 6.73609 4.34C6.55609 4 6.46609 3.61333 6.46609 3.18C6.46609 2.72667 6.56276 2.32667 6.75609 1.98C6.94943 1.62667 7.21609 1.35333 7.55609 1.16C7.90276 0.96 8.29943 0.86 8.74609 0.86C9.59943 0.86 10.2561 1.16333 10.7161 1.77C11.1828 2.37667 11.4161 3.22667 11.4161 4.32C11.4161 5.52667 11.1561 6.45667 10.6361 7.11C10.1161 7.76333 9.39609 8.09 8.47609 8.09ZM8.81609 4.57C9.22276 4.57 9.55276 4.43667 9.80609 4.17C10.0594 3.90333 10.1861 3.55667 10.1861 3.13C10.1861 2.70333 10.0594 2.35667 9.80609 2.09C9.55276 1.82333 9.22276 1.69 8.81609 1.69C8.40943 1.69 8.07943 1.82333 7.82609 2.09C7.57276 2.35667 7.44609 2.70333 7.44609 3.13C7.44609 3.55667 7.57276 3.90333 7.82609 4.17C8.07943 4.43667 8.40943 4.57 8.81609 4.57Z" fill="#D11A2A" />
                        </svg>
                            Message


                        </a>

                        <a href="#" id='notification1' > <img id='noti' src={notification} height={24} width={24} /> Notification

                        </a>

                        <a href="#" id='setting1' > <img id='set' src={setting} height={24} width={24} /> Settings


                        </a>


                        <img id='upgrade' src={upgradenow} />



                        <img id='photo' src={photo1} />

                        <img id='free1' src={free} />

                        <img id='logout1' src={logout} />

                        <div  >
                            {customerlist.map(each => {
                                each.name
                            }

                            )}
                        </div>

                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Navbar