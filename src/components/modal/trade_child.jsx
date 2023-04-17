import "./trade.css";
import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import InfoIcon from '@mui/icons-material/Info';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';

export const Trade_child = (props) => {

    const [text, setText] = useState("");
    const [action, setAction] = useState("");
    const [buyin, setBuyIn] = useState("");
    const [orderType, setOrderType] = useState("");
    const [duration, setDuration] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div className="trade-panel">
            <div className="search-bar">
                <div className="close-btn">
                    <IconButton onClick={() =>props.tradeModal(false)}>
                        <CloseIcon style={{width:'24px', height:'24px', color:'white'}}/>
                    </IconButton>
                </div>
                <div>
                    <Button style={{color:'white', fontSize:'15px'}} onClick={() =>props.openChild_Modal(false)}>
                        {"< BACK"}
                    </Button>
                </div>
            </div>

            <div className="p-10">
                <div>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar style={{width:'80px', height:'80px', marginRight:'20px'}} alt="Profile Picture" src={props.item.img_url} />
                        </ListItemAvatar>
                        <ListItemText primary={<Typography style={{fontSize: '40px', textTransform: 'uppercase'}}> {props.item.Crypto_name}</Typography>} secondary={<Typography style={{fontSize:'20px', color: 'white'}}>{props.item.Crypto_Symbol}</Typography>} />
                        <ListItemText style={{textAlign:'right'}} primary={<Typography style={{fontSize: '20px'}}> $30428.48</Typography>} secondary={<Typography style={{color:'white'}}>-1.28%</Typography>} />
                    </ListItem>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'16px', paddingRight:'16px'}}>
                    <div>
                        <Typography style={{letterSpacing:'1px', fontWeight:'bold'}}>
                            ACCOUNT VALUE
                        </Typography>
                        <Typography style={{fontSize:'20px'}}>
                            ${props.account_value}
                        </Typography>
                    </div>

                    <div>
                        <Typography style={{letterSpacing:'1px', fontWeight:'bold'}}>
                            CASH
                        </Typography>
                        <Typography style={{fontSize:'20px'}}>
                            ${props.cash}
                        </Typography>
                    </div>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px'}}>
                    
                    <div style={{display:'flex'}}>
                        Action
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
                                        <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>Buy/Sell allow you to add/remove cryptos from your portfolio.</Typography>
                                    </Popover>
                                </div>
                                
                            )}
                        </PopupState>        
                    </div>
                 
                    <FormControl style={{marginTop:'10px', color:'white', border:'1px bold white'}} fullWidth>
                        <InputLabel style={{color:'white', fontSize:'15px', letterSpacing:'1px'}} id="demo-simple-select-label">Action</InputLabel>
                        <Select
                        // labelId="select-Action"
                        // id="select"
                        value={action}
                        label="Action"
                        onChange={(e) => setAction(e.target.value)}
                        style={{fontSize:'20px', color:'white'}}
                        >
                            <MenuItem style={{fontSize:'20px'}} value={"Buy"}>Buy</MenuItem>
                            <MenuItem style={{fontSize:'20px'}} value={"Sell"}>Sell</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px'}}>
                    
                    <div style={{display:'flex'}}>
                        Buy In
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
                                        <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>You can purchase crypto either in dollar amount or quantity. Fractional trades.</Typography>
                                    </Popover>
                                </div>
                                
                            )}
                        </PopupState>        
                    </div>
                 
                    <FormControl style={{marginTop:'10px', color:'white', border:'1px bold white'}} fullWidth>
                        <InputLabel style={{color:'white', fontSize:'15px', letterSpacing:'1px'}} id="demo-simple-select-label">Buy In</InputLabel>
                        <Select
                        // labelId="select-Action"
                        // id="select"
                        value={buyin}
                        label="Buy In"
                        onChange={(e) => setBuyIn(e.target.value)}
                        style={{fontSize:'20px', color:'white'}}
                        >
                            <MenuItem style={{fontSize:'20px'}} value={"USD"}>$USD</MenuItem>
                            <MenuItem style={{fontSize:'20px'}} value={"Quantity"}>Quantity</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px'}}>
                    
                    <div style={{display:'flex'}}>
                        Amount
                    </div>
                 
                    <FormControl style={{marginTop:'10px', color:'white', border:'1px bold white'}} fullWidth>
                        <TextField style = {{fontSize:'20px', color:'white'}} fullWidth id="fullWidth" type="number"  
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}                       
                        inputProps={{
                            startAdornment:(
                                <InputAdornment position = "start">
                                    $
                                </InputAdornment>
                            ),
                        }}/>
                    </FormControl>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px'}}>
                    
                    <div style={{display:'flex'}}>
                        Order Type
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
                                        <Typography style={{width:'240px', height:'98px', overflow:'auto', backgroundColor:'#121212', color:'white', fontSize:'15px'}} sx={{ p: 1 }}>
                                            How long the trade is open for. Most applicable to limit orders.   
                                            <Button style={{fontSize:'14px', color:'grey', display:'flex', justifyContent:'right'}} href="https://www.investopedia.com/terms/d/dayorder.asp">LEARN MORE</Button>
                                        </Typography>
                                    </Popover>
                                </div>
                                
                            )}
                        </PopupState>        
                    </div>
                 
                    <FormControl style={{marginTop:'10px', color:'white', border:'1px bold white'}} fullWidth>
                        <InputLabel style={{color:'white', fontSize:'15px', letterSpacing:'1px'}} id="demo-simple-select-label">Order Type</InputLabel>
                        <Select
                        // labelId="select-Action"
                        // id="select"
                        value={orderType}
                        label="Order Type"
                        onChange={(e) => setOrderType(e.target.value)}
                        style={{fontSize:'20px', color:'white'}}
                        >
                            <MenuItem style={{fontSize:'20px'}} value={"Market"}>Market</MenuItem>
                            <MenuItem style={{fontSize:'20px'}} value={"Limit"}>Limit</MenuItem>
                            <MenuItem style={{fontSize:'20px'}} value={"StopLimit"}>Stop Limit</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px'}}>
                    
                    <div style={{display:'flex'}}>
                        Duration
                    </div>
                 
                    <FormControl style={{marginTop:'10px', color:'white', border:'1px bold white'}} fullWidth>
                        <InputLabel style={{color:'white', fontSize:'15px', letterSpacing:'1px'}} id="demo-simple-select-label">Duration</InputLabel>
                        <Select
                        // labelId="select-Duration"
                        // id="select"
                        value={duration}
                        label="Duration"
                        onChange={(e) => setDuration(e.target.value)}
                        style={{fontSize:'20px', color:'white'}}
                        >
                            <MenuItem style={{fontSize:'20px'}} value={"24H"}>24 Hours</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{marginTop:'20px', paddingLeft:'16px', paddingRight:'16px', display:'flex', justifyContent:'space-between'}}>
                    <Button variant="outlined" style={{width:'48%', height:'48px', color:'white', fontSize:'15px'}}>CLEAR</Button>
                    <Button variant="outlined" style={{width:'48%', height:'48px', color:'white', fontSize:'15px'}}>PREVIEW ORDER {">"}</Button>
                </div>
            </div>
        </div>
    )
}