import React,{useRef,useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { CloseModal } from '../utils/appSlice'
import { Blurhash } from 'react-blurhash'
import { instagram_url, twitter_url } from '../utils/constants'
const Modal = (props) => {
    const ImageUrl=props.data.urls.small;
    const UserImageUrl=props.data.user.profile_image.medium;
    const Firstname=props.data.user.first_name
    const Lastname=props.data.user.last_name
    const Username=props.data.user.username
    const Likes=props.data.likes
    const ImageDownload=props.data.links.download
    const BlurHash=props.data.blur_hash
    const Instagram_Username=props.data.user.social.instagram_username
    const Twitter_Username=props.data.user.social.twitter_username
    const imgWidth=props.data.width
    const imgHeight=props.data.height
    const divRef=useRef(null);
    const [width,setwidth]=useState()
    const [height,setheight]=useState()
    const [imageLoaded,setimageLoaded]=useState(false)
    useEffect(() => {
      setwidth(divRef.current.clientWidth);
      setheight((width*imgHeight)/imgWidth)
    
      const img=new Image()
      img.onload=()=>{
        setimageLoaded(true)
      }
      img.src=ImageUrl

      return () => {
        setimageLoaded(false)
      };

    }, [divRef.current,width,props.isVisible,ImageUrl]);
    const dispatch=useDispatch()
    const closeModal=()=>{

        dispatch(CloseModal())
    }
 
    
  return (
    <div className={`${props.isVisible ? "":"hidden" }`}>

<div className="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-[#000000c4]">
    <div ref={divRef} className="pt-16 relative w-auto max-w-2xl max-h-full">
  
        <div className="relative bg-white rounded-xl shadow dark:bg-[#141414]">
         
            <div className="flex flex-wrap absolute items-start justify-end w-full ">
               
                <button onClick={closeModal} type="button" className="text-gray-400 bg-gray-700/50 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-2 inline-flex justify-center items-center dark:hover:bg-gray-600/60 dark:hover:text-white my-[-10px] mr-[-10px]" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className=" ">
            <div className={`${imageLoaded?"hidden":"block"} rounded-t-xl`}>
        <Blurhash 
        hash={BlurHash}
        width={width}
        height={height}
        resolutionX={32}
        resolutionY={32}
        punch={1}
        />
        </div>
               <img className={`${!imageLoaded?"hidden":"block"} rounded-t-xl`} src={ImageUrl} alt="" />

               <div className='flex justify-between items-center px-3 w-full absolute -mt-10'>
                   
                    <div className="flex">
                        <a target='_blank' href={ImageDownload} className='rounded-full px-[0.45rem] py-[0.45rem] border-[1px] border-solid border-white/30 bg-black/10'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-download w-4 text-white/50" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
                        </a>
                    </div>
                   
                    <div className='flex items-center rounded-lg px-[0.25rem] py-[0.20rem] border-[1px] border-solid border-white/30 bg-black/10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-hand-thumbs-up w-3 text-white/50" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
<span className='mx-1 text-xs text-white/50'>{Likes}</span>

            </div>
              
               </div>
            </div>
           
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
               
                 <div className='flex flex-wrap justify-between w-full'>
            <div className='flex items-center'>
              <img className='rounded-full max-w-[40px] mr-3' src={UserImageUrl} alt="" />
              <div className=''>
                <p className='text-gray-900 dark:text-white text-sm'>{Firstname} {Lastname} </p>
                <p className='italic text-gray-700 dark:text-gray-400 text-sm'>@{Username} </p>

              </div>

            </div>
            <div className='flex items-center'>
              {Instagram_Username && 
               <a className='mx-1 my-2' target='_blank' href={`${instagram_url}${Instagram_Username}`}>
               <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-instagram w-6 text-gray-800 dark:text-gray-200" viewBox="0 0 16 16">
       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
     </svg>
               </a>
              }  
         

          {Twitter_Username && 
           <a className='mx-1 my-2' target='_blank' href={`${twitter_url}${Twitter_Username}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x  w-6 text-gray-800 dark:text-gray-200" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
</svg>
           </a>
          }


            </div>
        </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Modal