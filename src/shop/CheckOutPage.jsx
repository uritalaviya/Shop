
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa")
    

    
    // handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }
    
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    
    // direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    
    
    const handleOrderConfirm = () => {
        alert("Your Order is Place successfully!")
        localStorage.removeItem("cart")
        navigate(from , {replace:true})
    }

    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Procced to CheckOut </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} href="#visa" id='visa-tab' data-toggle="tab" role='tab' aria-controls='visa' aria-selected={activeTab === "visa"} onClick={() => handleTabChange("visa")}>
                                            <img src="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/02/visa-logo-png-2026-1.png" alt="" width="80" />
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} href="#paypal" id='paypal-tab' data-toggle="tab" role='tab' aria-controls='paypal' aria-selected={activeTab === "paypal"} onClick={() => handleTabChange("paypal")}>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuGJxGMYOCNAkdPSB71vHg4PvsbbC7_lOPrki--ugJA&s" alt="" width="80" />
                                        </a>
                                    </li>

                                </ul>

                                {/* content */}

                                <div className="tab-content" id='myTabContent'>
                                    {/* visa content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}


                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id="name" className='form-controls' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="number" name='number' min="1" max="999" id="number" className='form-controls' required />
                                                    <span>Card Number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="number" name='number' min="1" max="999" id="number" className='form-controls' required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="number" name='number' min="1" max="999" id="number" className='form-controls' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id="name" className='form-controls' required />
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="number" name='number' min="1" max="999" id="number" className='form-controls' required />
                                                    <span>Your Name</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="number" name='number' min="1" max="999" id="number" className='form-controls' required />
                                                        <span>Extra info</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* payment desclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer</em>In no event shall payment pr partical payment by Owner  for any material or service.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal >
        </div >
    )
}

export default CheckOutPage
