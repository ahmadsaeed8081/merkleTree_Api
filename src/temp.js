// var arr = [];
// while(arr.length < 5555){
//     var r = Math.floor(Math.random() * 5555) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
const fs = require("fs");
var i= 3;
// //const { CLIENT_RENEG_LIMIT } = require("tls");
for(var j=2;j<7777;j++)
{
  try{
    fs.renameSync("/Users/ahmadsaeed/Downloads/NodeMine-nft/assets/"+i+".webp", "/Users/ahmadsaeed/Downloads/NodeMine-nft/assets/"+j+".png");
  }
  catch(err){
console.log("hihih "+ err)
  }
    i++;

}
// if(j%2==0){
//   i++;
// }
// }

// for(var y=1;y<=5555;y++)
// {
// fs.readFile("C:/Users/Zayn Hamza/Downloads/hashlips_art_engine-1.1.2_patch_v1/build/json/"+y+".json", 'utf8' , async (err, data) => {
// console.log(y);
//   fs.appendFile('meta.json', data+",",async function (err) {
//     if (err) throw err;
//     console.log("Saved! ");
//   });
//  // console.log(data)
// });
// }

// const path = require('path');

// //joining path of directory 
// const directoryPath = path.join('C:/Users/Zayn Hamza/Downloads/hashlips_art_engine-1.1.2_patch_v1/build/json');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         fs.readFile("build/json/"+file, 'utf8' , (err, data) => {
//           //console.log(data)
//           if (err) {
//             console.error(err)
            
//           }
//           fs.appendFile('meta.json', data, function (err) {
//             if (err) throw err;
//             console.log("Saved! ");
//           });
//          // console.log(data)
//         });
        
//     });
// });


// const basePath = process.cwd();
// const { NETWORK } = require(`${basePath}/constants/network.js`);
// const fs = require("fs");
// const { CLIENT_RENEG_LIMIT } = require("tls");

// const {
//   baseUri,
//   description,
//   namePrefix,
//   network,
//   solanaMetadata,
// } = require(`${basePath}/src/config.js`);


// const symbol="symbol";
// let num=0;

// // read json data
// let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
// let data = JSON.parse(rawdata);
// let i=0;
// data.forEach((item) => {
//   i++;
//   if (network == NETWORK.sol) {
//     num++;
//     item[symbol]="seal";
//     item.image= num +".png";
//     item.properties.files[0].uri = num+".png";
//     item.properties.files[0].type="image/png"
//     // console.log("hello "+ item.symbol);
//     // item.name = `${namePrefix} #${item.edition}`;
//     // item.description = description;
//     // item.creators = solanaMetadata.creators;
//     // item.symbol = solanaMetadata.symbol;
//     console.log(    item.properties.files[0].uri );
//   } else {
//     item.name = `${namePrefix} #${item.edition}`;
//     // item.description = description;
//     // item.image = `${baseUri}/${item.edition}.jpg`;
//   }
//   fs.writeFileSync(
//     `${basePath}/build/json/${num}.json`,
//     JSON.stringify(item, null, 2)
    
    
//   );
// });

// fs.writeFileSync(
//   `${basePath}/build/json/_metadata.json`,
//   JSON.stringify(data, null, 2)
// );

// if (network == NETWORK.sol) {
//   console.log(`Updated description for images to ===> ${description}`);
//   console.log(`Updated name prefix for images to ===> ${namePrefix}`);
//   console.log(
//     `Updated creators for images to ===> ${JSON.stringify(
//       solanaMetadata.creators
//     )}`
//   );
// } else {
//   console.log(`Updated baseUri for images to ===> ${baseUri}`);
//   console.log(`Updated description for images to ===> ${description}`);
//   console.log(`Updated name prefix for images to ===> ${namePrefix}`);
// }