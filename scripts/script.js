var card = document.querySelector('tbody')
var oneMore1 = document.getElementById('text1')
var oneMore2 = document.getElementById('text2')
var oneMore3 = document.getElementById('text3')
var oneMore4 = document.getElementById('text4')
var oneMore5 = document.getElementById('text5')
var oneMore6 = document.getElementById('text6')
var trWrapper = document.getElementById('trWrapper')

$.get(
    'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products',
    function (data,status) { 
        
        console.log(data)
        data.map((item)=>{
          oneMore1.innerHTML = item.id
        })
        // for(var i=0; i< data.length; i++){
        // var eleText1 = 
        // var eleText2 = 
        // var eleText3 = 
        // var eleText4 = document.createTextNode(data[i].expiryDate)
        // var eleText5 = 
        // var eleText6 = 
        //  oneMore1.innerHTML = data[i].id 
        // oneMore1.appendChild(document.createTextNode(data[i].id))
        // oneMore2.appendChild(document.createTextNode(data[i].medicineName))
        // oneMore3.appendChild(document.createTextNode(data[i].medicineBrand))
        // oneMore4.appendChild(document.createTextNode(data[i].expiryDate))
        // oneMore5.appendChild(document.createTextNode("$ " + data[i].unitPrice))
        // oneMore6.appendChild(document.createTextNode(data[i].stock))
        // console.log(oneMore1)
        //console.log(oneMore4)
        //console.log(oneMore4.appendChild(eleText4))
        //console.log(oneMore4)
        
        // var wrapperEle = document.createElement('tr')

        // wrapperEle.appendChild(oneMore1)
        // wrapperEle.appendChild(oneMore2)
        // wrapperEle.appendChild(oneMore3)
        // wrapperEle.appendChild(oneMore4)
        // wrapperEle.appendChild(oneMore5)
        // wrapperEle.appendChild(oneMore6)
        // wrapperEle.classList.add('ProductListingPage_TableRow')  
        // wrapperEle.classList.add('ProductListingPage_ExpiredRow')
        
        //trWrapper.appendChild(wrapperEle)
        //console.log(wrapperEle)
        //console.log(wrapperEle)


        //card.appendChild
    // }
        
     }
  );

//   <tr class="ProductListingPage_TableRow ProductListingPage_ExpiredRow">
//                   <td class="ProductListingPage_SecondaryText">56104-020</td>
//                   <td class="ProductListingPage_PrimaryText">Miconazole Nitrate</td>
//                   <td class="ProductListingPage_SecondaryText">Premier Brands of America Inc.</td>
//                   <td class="ProductListingPage_PrimaryText">14 Aug, 2012</td>
//                   <td class="ProductListingPage_SecondaryText">$993.01</td>
//                   <td class="ProductListingPage_SecondaryText">725</td>
//                 </tr>