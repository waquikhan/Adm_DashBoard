import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notifications, UserProfile } from ".";
import { useStateContext } from '../Contexts/ContextProvider';


const NavButton = ({ title, customFunc, icon, color, dotColor}) =>(
  <TooltipComponent content={title}>
    <button type="button" onClick={customFunc}
      style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-light-grey"
    >
      <span style={{background: dotColor}}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {

  const {  setActiveMenu, isClicked, handleCLick, screenSize, setScreenSize } =  useStateContext();

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
  
    window.addEventListener('resize', handleResize);
  
    handleResize();
  
    return()=>window.removeEventListener('resize', handleResize)
   },[])


   useEffect(()=>{
      if(screenSize<=800){
        setActiveMenu(false)
      } else{
        setActiveMenu(true)
      }
   },[screenSize])
   
  return (
    <div className='flex justify-between p-2 md:mx-6 relative' >
      <NavButton title="Menu" 
      customFunc={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />}/>
        <div className='flex'>
        <NavButton title="Cart" customFunc={()=> handleCLick('cart')}  color="blue" icon={<FiShoppingCart />}/>
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={()=> handleCLick('chat')}  color="blue" icon={<BsChatLeft />}/>
        <NavButton title="Notifications" dotColor="#03C9D7" customFunc={()=> handleCLick('notifications')}  color="blue" icon={<RiNotification3Fill />}/>
        <TooltipComponent
          content="Profile" position="BottomCenter"
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={()=> handleCLick('userProfile')}
          >
            <img src={avatar} alt="" className='rounded-full w-8 h-8' />
            <span className=' text-gray-400 text-14'>Hi,</span>
            <span className='text-grey-400 font-bld ml-1 text-14'>Waqui</span>
            <MdKeyboardArrowDown  className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notifications && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
        </div>
    </div>
  )
}

export default Navbar
 