import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/material/Modal';
import { IconButton, Table } from "@mui/material";

import { Trade } from '../components/modal/trade';

import { useState, useEffect, useRef } from "react";
export const MainPage = () => {
    
    const select_options = [
        {value:'beginner', label:'Beginners'},
        {value:'investopdia-trading-game', label:'investopedia tradin game'}
    ]
    const [isShown, setIsShown] = useState(false)
    const popupRef = useRef()
    const documentClickHandler = useRef()
    const [acc_value, setAcc_Value] = useState(100202.36);
    const [open, setOpen] = useState(false);
    const tradeModal = (state) => {        
        setOpen(state);
    };
    
    return (
        <div className="bg-white mainboard !border-none">
            <div className="top-nav">
                <div className="container-nav">
                    <div className="logo-image">
                        <h1>
                            <img src="./img/logo.PNG" alt="" className="nav-logo"/>
                            TrandingPlace
                        </h1> 
                        <a href = "/logout" id="get_started_btn" className="logout-btn">Log out</a>
                    </div>
                </div>
            </div>

            <div className="split-line">
            </div>
            <div className="mainpage-content">

                <div className="div-heigh-3">
                    <div className="overview">OVERVIEW</div>
                    
                    <div className="overview-show">
                        <div className="overview-content">
                            <div className="overview-item">
                                <div className="text-overline">
                                    account value
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                    {(popupState) => (
                                        <div>
                                            <IconButton style={{width:'20px', height:'20px', marginLeft:'4px'}} {...bindTrigger(popupState)}>
                                                <InfoIcon style={{color:'white', width: '20px', height:'20px'}}/>
                                            </IconButton>
                                            <Popover
                                                {...bindPopover(popupState)}
                                                anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                                }}
                                            >
                                                <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>Displays the total current value of your portfolio, which is updated daily.</Typography>
                                            </Popover>
                                        </div>
                                        
                                    )}
                                    </PopupState>
                                </div>
                                <div className="text-h4 acc_val">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item">
                                <div className="text-overline">
                                        24 hours chance
                                        <PopupState variant="popover" popupId="demo-popup-popover">
                                            {(popupState) => (
                                                <div>
                                                    <IconButton style={{width:'20px', height:'20px', marginLeft:'4px'}} {...bindTrigger(popupState)}>
                                                        <InfoIcon style={{color:'white', width: '20px', height:'20px'}}/>
                                                    </IconButton>
                                                    <Popover
                                                        {...bindPopover(popupState)}
                                                        anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                        }}
                                                        transformOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                        }}
                                                    >
                                                        <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>Your account's gains/losses over the past 24 hours.</Typography>
                                                    </Popover>
                                                </div>
                                                
                                            )}
                                        </PopupState>
                                </div>
                                <div className="hours_chance text-h4 ">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item">
                                <div className="text-overline">
                                    cash
                                    <PopupState variant="popover" popupId="demo-popup-popover">
                                        {(popupState) => (
                                            <div>
                                                <IconButton style={{width:'20px', height:'20px', marginLeft:'4px'}} {...bindTrigger(popupState)}>
                                                    <InfoIcon style={{color:'white', width: '20px', height:'20px'}}/>
                                                </IconButton>
                                                <Popover
                                                    {...bindPopover(popupState)}
                                                    anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                    }}
                                                >
                                                    <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>Total amount of cash available for making trades.</Typography>
                                                </Popover>
                                            </div>
                                            
                                        )}
                                    </PopupState>                                   

                                </div>
                                <div className="text-h4 acc_val">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item popup-menu-container">
                                <button onClick={() => tradeModal(true)} style={{width:'160px', height:'48px', alignItems:'center', backgroundColor:'#c5dcff', color:'black', display:'flex', justifyContent:'center'}}>
                                    <AddCircleOutlineIcon style={{width:'20px', height:'20px', marginRight:'10px'}}/>
                                    TRADE
                                </button>

                                <Modal
                                    open={open}
                                    style={{position: 'fixed', top:'50px', alignItems:'center', justifyContent:'center'}}
                                    onClose={() =>tradeModal(false)}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Trade  tradeModal = {tradeModal} account_value = {acc_value} cash = {acc_value} />
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="overview">PERFORMANCE</div>
                    
                    <div className="performance-show">
                        <div className="performance-content">
                            <div className="overview-item">
                                <div className="text-overline">
                                    account value
                                </div>
                                <div className="text-h4 acc_val">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item">
                                <div className="text-overline">
                                        24 hours chance
                                        <button data-v-568e2a39="" type="button" data-cy="tooltip-icon" role="button" aria-haspopup="true" aria-expanded="false" class="v-icon notranslate ml-1 v-icon--link theme--dark primary--text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg></button>
                                </div>
                                <div className="hours_chance text-h4 ">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item">
                                <div className="text-overline">
                                    cash
                                    <button data-v-568e2a39="" type="button" data-cy="tooltip-icon" role="button" aria-haspopup="true" aria-expanded="false" class="v-icon notranslate ml-1 v-icon--link theme--dark primary--text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg></button>
                                    

                                </div>
                                <div className="text-h4 acc_val">
                                    ${acc_value}
                                </div>
                            </div>

                            <div className="overview-item popup-menu-container">
                                
                            </div>
                        </div>
                    </div>

                    <div className="overview">HOLDINGS</div>
                    
                    <div className="performance-show">
                        <Table>
                            <thead>
                                <th>Symbol</th>
                                <th>Description</th>
                                <th>Current Price</th>
                                <th>24 Hour Change</th>
                                <th>Purchase Price</th>
                                <th>QTY</th>
                                <th>Total Value</th>
                                <th>Total Gain/Loss</th>
                                <th>Trade Actions</th>
                            </thead>

                        </Table>
                    </div>
                </div>
            </div>

            <div className="mainpage-footer">

            </div>
        </div>
    )
}