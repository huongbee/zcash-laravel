const express = require('express')
const app = express()
const request = require('request');
const Zcash = require('zcash');

const rpc = new Zcash({
    username: "zcash",
    password: "SB0CRsuM8alwpeSU/0hsPJFliVazQK/KYnqUiL/4CB4="
});

 
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3001,()=>{
    console.log('connect to port 3001')
})

/* ================= Accounting ======================*/

app.get('/gettotalbalance', (req, res) => {
    
    rpc.z_gettotalbalance().then(total => {
        res.send( {
            total: total
        });
    });
});

app.get('/getbalance/:taddr', (req, res) => {
    
    //console.log(req.params.taddr);

    rpc.z_getbalance(req.params.taddr).then(balance => {
        res.send( {
            balance: balance
        });
    });
});
/* =============== end accounting ===================== */



/* ================= Addresses ========== ===========*/
app.get('/listaddress', (req, res) => {
    
    rpc.z_listaddresses().then(addresses => {
        res.send( {
            addresses: addresses
        });
    });
});

app.get('/newaddress', (req, res) => {
    
    rpc.z_getnewaddress().then(addresses => {
        res.send( {
            addresses: addresses
        });
    });
}); 
/*
app.get('/validateaddress/:zaddr', (req, res) => {
    
    rpc.z_validateaddress(req.params.zaddr).then(result => {
        res.send( {
            result: result
        });
    });
});*/
/* ================== end address ==================*/


/* =================payment ==========================*/

    app.get('/listreceivedbyaddress/:zaddr', (req, res) => {
        rpc.z_listreceivedbyaddress(req.params.zaddr)
        .then(amounts => {
            res.send( {
                amounts: amounts
            });
        })
        .catch(err=>console.log(err));
    });
     
    app.get('/sendmany/:from/:to/:amount', (req, res) => {
        //console.log(req.params)
        let amounts = [{
            "address":req.params.to,
            "amount":req.params.amount
        }]
        rpc.z_sendmany(req.params.from, amounts)
        .then(operationid => {
            // console.log(operationid)
            res.send( {
                operationid: operationid
            });
        })
        .catch(err=>console.log(err));
    });

/*================= end payment ====================*/



/* ============= key management ====================*/

    /*app.get('/exportkey', (req, res) => {
        rpc.z_exportkey().then(key => {
            res.send( {
                key: key
            });
        });
    }); 

    app.get('/importkey/:zkey', (req, res) => {
        rpc.z_importkey(req.params.zkey).then(key => {
            res.send( {
                key: key
            });
        });
    }); 

    app.get('/exportwallet/:filename', (req, res) => {
        rpc.z_exportwallet(req.params.filename).then(key => {
            res.send( {
                result: true
            });
        });
    }); */

/* ============= end key managerment ================*/

/**/
/*rpc.z_getoperationresult().then(addresses => {
    console.log(addresses);
});*/
/*
var fromAddress = 't1aZFMAHWiVTXoUcfkffSCbnmm4HzuuCAEA';
var data =[{
    "address":'zceohEFdX4GKYu4DQAiQmskaSWpirLf7PwweksfTkNx75p1fz2xcDnZPpQ67e1TbdaCsek52Lr7DBUmEV3wkWRfio5W4Gcy',
    "amount":1}];

rpc.z_sendmany(fromAddress,data)
.then(operationid => {
    console.log(operationid)
    res.send( {
        operationid: operationid
    });
})
.catch(err=>console.log(err));
*/
