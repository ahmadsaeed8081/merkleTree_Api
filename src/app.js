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
    // console.log(proof);
    return proof
    // console.log(buf2hex(leaf));

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
    return proof;
}

// merk1("0x14475F3B886634dcD501EBc0Fd555660946F52B8");
// // merk2("0x14475F3B886634dcD501EBc0Fd555660946F52B8");

app.get("/proof1", async(req,res)=>{

    const result = merk1(req.query.userAddress);
    const proof2=["0xfb58768b20b7891b1ad92c712462a77ef523d3a6e8bbee853463e90db626d338","0xac1853597350349b2f42210b85975d652a9b51fb0a26eadb0423bc2ec1c63abb","0x709863e51f8120d049df588df324d3437a5acff5ce3d33c969a3562397dc4a97","0xfb23ea6ccb39f20b024ebb55b843c364491ee3ea2fe48c828117ddd74643ad87","0x2a6251735bfbd18873de6b5e9463a8effd2ca45558f3a8f02cc97ea0d14005ca","0xd0b24ce611d61fa975f775010dc1ea19a1a043ccdb8e49908e10df49c8fc989e","0xff6e0187b462813c33c15227e05556480827cda72240c2b7f16e721e4204a68d","0x4ae157ea220d249ad55d00857ef107c0d425c1418ebf22713ec62cde42e20116","0xb489ba9473de8dd4a8684639e626a1a13d2084b47d9effbc2cc3941d5919d5d5"];

    res.send(proof2);

})
app.get("/proof2", async(req,res)=>{

    const result = merk2(req.query.userAddress);
    res.send(result);

})

app.listen(port, () => {
        console.log("connection is live"+ port);
});