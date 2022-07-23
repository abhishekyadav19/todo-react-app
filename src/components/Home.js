import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Todo } from './Todo';
import { Add } from '../redux/actions/Action';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const { User_Data } = useSelector((state) => state.todoreducers)

    const [data, setData] = useState("")

    const dispatch = useDispatch();
    const adddata = () => {
        dispatch(Add(data))
        setData("")
    }
    const keyHandler = (e) => {
        if (e.key == "Enter") {
            adddata()
        }
    }
    return (
        <>
            <div className='container'>
                <section className='text-center mt-3'>
                    <div className='d-flex justify-content-between col-lg-5 mx-auto'>
                        <h5>ADD YOUR PRODUCT</h5>

                    </div>
                    <div className='todo  col-lg-5 mx-auto d-flex justify-content-end' >
                        <input name='Prouct' placeholder='Add Your Product' value={data} className='form-control me-2' onChange={(e) => setData(e.target.value)} onKeyDown={keyHandler} />
                        <Button varient='contained' onClick={() => adddata(dispatch)}
                            style={{ background: "#ee5253", color: "white" }}><AddIcon /></Button>
                    </div>
                   

                    <Todo />
                </section>

            </div>
        </>
    )
}
