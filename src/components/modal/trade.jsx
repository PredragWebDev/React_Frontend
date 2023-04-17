import "./trade.css";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import initialData from "../../data/data.json";
import { useEffect } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {Trade_child}  from "./trade_child";
export const Trade = (props) => {

    const [initial_data, setInitailData] = useState(initialData)
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const [curIndex, setIdex] = useState(0);
    useEffect(() => {
        setInitailData(initialData);
    }, []);

    const handleSearchBtn = () => {
        alert(text);
    }

    const onChange = evt => setText(evt.target.value);
    
    const openChild_Modal = (state, index) => {
        setOpen(state);
        setIdex(index);
        console.log(initial_data.Symbol[index]);
    };
    // const tradeClose = () => {
    //     setOpen(false);
    // }

    return (
        <div className="trade-panel">
            <div className="search-bar">
                <div className="close-btn">
                    <IconButton onClick={() =>props.tradeModal(false)}>
                        <CloseIcon style={{width:'24px', height:'24px', color:'white'}}/>
                    </IconButton>
                </div>
                <div className="symbol-search-bar">
                    <span>Symbol</span>
                    <div className="search-component">
                        <div className='input-wrap'>
                            {/* <input className="p-10"
                            type="text"
                            name="symbol-search"
                            id = "symbol-search"
                            placeholder="Look up Symbol/Company Name"
                            value={text}
                            onChange={onChange}
                            /> */}

                            <Autocomplete
                                style={{width:'100%', fontSize:'20px', color:'white'}}
                                id="CryptoSymbolSearch"
                                freeSolo
                                options={initial_data.Symbol.map((item) => item.Crypto_name)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <a onClick={handleSearchBtn}>
                                <SearchIcon fontSize="large"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-10">

                <div>
                    <ListSubheader sx={{ bgcolor: '#313131', fontSize:'15px', color:'white' }}>
                    POPULAR CRYPTOS
                    </ListSubheader>
                    {initial_data.Symbol.length > 0 && initial_data.Symbol.map((item, index) => (
                        <>
                            <ListItem button key={index} onClick={ () => openChild_Modal(true,index)}>
                                <ListItemAvatar>
                                <Avatar style={{width:'60px', height:'60px'}} alt="Profile Picture" src={item.img_url} />
                                </ListItemAvatar>
                                <ListItemText primary={<Typography style={{fontSize: '20px'}}> {item.Crypto_name}</Typography>} secondary={<Typography style={{fontSize:'15px', color: 'white'}}>{item.Crypto_Symbol}</Typography>} />
                                <ListItemText style={{textAlign:'right'}} primary={<Typography style={{fontSize: '20px'}}> $30428.48</Typography>} secondary={<Typography style={{color:'white'}}>-1.28%</Typography>} />
                            </ListItem>

                        </>

                    ))}

                            <Modal
                            open={open}
                            style={{position: 'fixed', top:'50px', alignItems:'center', justifyContent:'center'}}
                            onClose={() =>openChild_Modal(false)}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                            >
                                <Trade_child  tradeModal = {props.tradeModal} openChild_Modal = {openChild_Modal} item = {initial_data.Symbol[curIndex]} account_value = {props.account_value} cash = {props.cash}/>
                            </Modal>
            
                </div>
            </div>
        </div>
    )
}