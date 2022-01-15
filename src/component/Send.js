import React from 'react'
import './Send.css'

const Send = () => {
    return (
        <div className='send-box'>
            <h1>Product details</h1>
            <div className='product-info'>
                <div className='box-input'>
                    <p>Name of product</p>
                    <input type="text"  placeholder='Name of product' required/>
                </div>
                <div className='box-input'>
                    <p>Serie</p>
                    <input type="text"  placeholder='Serie' required/>
                </div>
                <div className='box-input'>
                    <p>Defect information</p>
                    <input type="text"  placeholder='Defect information' required/>
                </div>
                <div className='box-input'>
                    <p>Type of warranty</p>
                    <select className='select-box' required = 'required'>
                        <option value=''> -- Select -- </option>
                        <option value="WARRANTY">WARRANTY</option>
                        <option value="extended warranty">Extended warranty</option>
                        <option value="Extended warranty and equipment insurance">Extended warranty and equipment insurance</option>
                        <option value="postwarranty">Postwarranty</option>
                    </select>
                </div>
            </div>

            <h1>Personal data</h1>
            <div className='product-info'>
                <div className='box-input'>
                    <p>First and last name</p>
                    <input type="text"  placeholder='Name' required/>
                </div>
                <div className='box-input'>
                    <p>Email</p>
                    <input type="text"  placeholder='Email' required/>
                </div>
                <div className='box-input'>
                    <p>Phone number</p>
                    <input type="text"  placeholder='Phone' required/>
                </div>
                <div className='box-input'>
                    <p>Company</p>
                    <input type="text"  placeholder='Company' />
                </div>
                <div className='box-input'>
                    <p>City</p>
                    <input type="text"  placeholder='City' required/>
                </div>
                <div className='box-input'>
                    <p>County</p>
                    <input type="text"  placeholder='County' required/>
                </div>
                <div className='box-input-full'>
                    <p>Address</p>
                    <input type="text"  placeholder='County' required/>
                </div>
                <button>Submit</button>
            </div>



        </div>
    )
}

export default Send
