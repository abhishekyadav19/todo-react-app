import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { Remove, Updated } from '../redux/actions/Action';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Todo = () => {

    const [filters, setFilters] = useState()

    const { User_Data } = useSelector((state) => state.todoreducers)
    const [show, setShow] = useState(false)
    const [update, setUpdate] = useState("")
    const [ind, setInd] = useState("")

    const handleShow = (ele) => {
        setShow(true)
        setUpdate(ele)
    }
    const handleClose = () => {
        setShow(false)
    }
    const remove = (id) => {
        dispatch(Remove(id))
    }
    const usertask_update = () => {
        dispatch(Updated(update, ind))
        handleClose()

    }
    const dispatch = useDispatch();


    return (
        <>
            <div className='todo_data'>
            {
                        User_Data.length > 0 && (
                            <>
                                <div className='todo mt-4 col-lg-5 mx-auto d-flex justify-content-end align-items-centre' >
                                    <div className='d-flex align-items-center'>
                                        <label style={{ width: '30%' }}> Search :</label>
                                        <input name='filters' value={filters} className='form-control' placeholder='Search and filter' onChange={(e) => setFilters(e.target.value)} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                {
                    User_Data.filter((val)=>{
                        if (filters===''){
                            return val
                        }else if (val.toLowerCase().includes(filters)){
                            return val 
                        }
                    })
                    .map((ele, i) => {
                        return (
                            <>                              
                                <div  className='todo_container col-lg-5 mx-auto mt-2 d-flex justify-content-between align-items-center px-2' key={i} style={{ background: "#dcdde1", borderRadius: "5px", height: "45px" }}>
                                    <li style={{ listStyle: "none" }} >
                                        {ele}
                                    </li>
                                    <div className='edit_del '>
                                        <EditIcon style={{ color: "#3c40c6", curser: "pointer" }} className="mx-2"
                                            onClick={() => {
                                                usertask_update()
                                            }} />
                                        <DeleteIcon style={{ color: "red", curser: "pointer" }} className="mx-2" onClick={() => remove(i)} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
        </>
    )
}

