const keccak256 = require('keccak256')
var fs = require("fs");
const { MerkleTree } = require('merkletreejs')
const express = require("express");
const cors = require('cors');
var bodyParser = require('body-parser'); 


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());


function merk1(_add)
{
    let addresses=[];
    const data=fs.readFileSync('src/backend/WL1.txt', 'utf8');

    data.split(/\r?\n/).forEach(line =>  {
        addresses.push(line.trim());
           });    
    const leaves = addresses.map(x => keccak256(x))
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    const buf2hex = x => '0x' + x.toString('hex')
    
    console.log(buf2hex(tree.getRoot()))
    
    const leaf = keccak256(_add) 
    const proof = tree.getProof(leaf).map(x => buf2hex(x.data))
    console.log(proof);
    console.log(buf2hex(leaf));

}


function merk2(_add)
{   
    let addresses=[];
    const data=fs.readFileSync('src/backend/WL2.txt', 'utf8');

    data.split(/\r?\n/).forEach(line =>  {
        addresses.push(line.trim());
           }); 
    // console.log("here it is "+addresses.length);

    const leaves = addresses.map(x => keccak256(x))
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    const buf2hex = x => '0x' + x.toString('hex')
    
    console.log(buf2hex(tree.getRoot()))
    
    const leaf = keccak256(_add) 
    const proof = tree.getProof(leaf).map(x => buf2hex(x.data))
    console.log(proof);
}

merk1();
merk2();

app.get("/proof1", async(req,res)=>{

    const result = merk1(req.query.userAddress);
    res.send(result);

})

app.listen(port, () => {
        console.log("connection is live"+ port);
});