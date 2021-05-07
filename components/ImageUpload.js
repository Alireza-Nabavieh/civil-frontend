
import {useState} from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'


export default function ImageUpload({evtId, imageUploaded,token}) {
    const [image,setImage]=useState(null)

    const [loading, setLoading]=useState(false)

    const handleSubmit=async (e)=>{
        
        e.preventDefault()
        setLoading(true)

        const formData=new FormData()
        formData.append('files',image)
        formData.append('ref', 'events')
        formData.append('refId', evtId)
        formData.append('field', 'image')

        const res=await fetch(`${API_URL}/upload`,{
            method:'POST',
            headers:{
                Authorization:`Bearer ${token}`
            },
            body: formData
        })

        if(res.ok){
            setLoading(false)
            imageUploaded()
        }
        else if(!res.ok){
            setLoading(false)
        }
    }

    const handleFileChaneg= (e)=>{
        setImage(e.target.files[0])
    }
    
    return (
        <div className={styles.form}>
           <h1>آپلود تصویر</h1>
           <form onSubmit={handleSubmit}>
               <div className={styles.file}>
                   <input type="file" onChange={handleFileChaneg} />
               </div>

                  {
                       !loading ? (
                        <input type="submit" value="آپلود" className="btn" />
                       ) : 
                       (
                        <button style={{width:'100%', opacity:'0.6'}} disabled type='submit'  className='btn' >
                            <span
                            className="spinner-border spinner-border-sm"
                            ></span>
                        </button>
                       )
                   }

             
           </form>
        </div>
    )
}
