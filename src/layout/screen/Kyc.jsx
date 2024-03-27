import React from 'react'
import './Kyc.css'

const Kyc = () => {
    return (
        <>
            <div className='kycbody'>
                <div className="kycinpbg">
                    <div className="kycheader">
                        <div className="kyctext">
                            <h1>Complete your KYC</h1>
                            <p>Tagline here</p>
                        </div>
                        <div className='kycinpfield'>
                            <div className='inp'>
                                <h1>Enter Gov Id</h1>
                                <input type="text" name="" placeholder='eg. License' />
                            </div>
                            <div className='uploaddiv'>
                                <h1>Upload File</h1>
                                <div className='uploadinp' >
                                    <input type="text" name="" placeholder='Maximum 4MB' />
                                    <a href="#"><button>Upload</button></a>
                                </div>
                            </div>
                            <div className='inp'>
                                <h1>Bank Account Number</h1>
                                <input type="text" name="" placeholder='Type your Account Number' />
                            </div>
                            <div className='maximumdiv'>
                                <div >
                                    <h1>Bank Name</h1>
                                    <input type="text" name="" placeholder='eg. HSBC ' />
                                </div>

                                <div >
                                    <h1>Account Name</h1>
                                    <input type="text" name="" placeholder='eg. John' />
                                </div>
                            </div>
                            <div className='inp'>
                                <h1>Branch Code</h1>
                                <input type="text" name="" placeholder='Jeg. HSBC00258' />
                            </div>
                        </div>
                    </div>
                    <div className="kycbottomsection">
                        <a href="#"><button>Submit</button></a>
                        <a href="#"><h1>Skip Now</h1></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Kyc
