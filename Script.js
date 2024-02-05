function myfunction(){
    var From_value=document.getElementById("From").value;
    console.log(From_value)
    var To_value=document.getElementById("To").value
    var text_field=document.getElementById("text-field").value;
    if(text_field===""){
   alert("Enter Value in textfield")
    }
    else{
        text_field=parseInt(text_field);
        const India_object={
            "INR":1,
            "USD":0.012,
            "PKR":3.37,
            "AFN":0.91,
            "ALL":1.15,
            "DZD":1.62,
            "EUR":0.011,
            "AZN":0.020,
            "IDR":189.53,
            "BTN":1.00,
            "SGD":0.016,
            "JPY":1.79,
            "NPR":1.61,
            "IQD":15.78,
            "CNY":0.086,
            "BRL":0.060,
            "CAD":0.016,
            "BGN":0.022,
            "DKK":0.083,
            "HUF":4.29
        }
        const Pak_object={
            "INR":0.30,
            "USD":0.0036 ,
            "PKR":1,
            "AFN":0.27,
            "ALL":0.35,
            "DZD":0.49,
            "EUR":0.0033,
            "AZN":0.0061,
            "IDR":56.81 ,
            "BTN":0.30,
            "SGD":0.0049,
            "JPY":0.54,
            "NPR":0.48,
            "IQD":4.73,
            "CNY":0.026,
            "BRL":0.018,
            "CAD":0.0049,
            "BGN":0.0065,
            "DKK":0.025,
            "HUF":1.29
        }
        const USA_object={
            "INR":82.993039,
            "USD":1,
            "PKR":279.05000,
            "AFN":75.25,
            "ALL":95.65,
            "DZD":134.52,
            "EUR":0.93,
            "AZN":1.70,
            "IDR":15731.20,
            "BTN":82.91,
            "SGD":1.34,
            "JPY":148.38,
            "NPR":133.56,
            "IQD":1310,
            "CNY":7.12,
            "BRL":4.97,
            "CAD":1.35,
            "BGN":1.81,
            "DKK":6.91,
            "HUF":356.01
        }
        const Afghanistan_object={
            "INR":82.993039,
            "USD":1,
            "PKR":3.81,
            "AFN":1,
            "ALL":1.30,
            "DZD":1.83,
            "EUR":0.013,
            "AZN":0.023,
            "IDR":214.12,
            "BTN":1.13,
            "SGD":0.018,
            "JPY":2.02,
            "NPR":1.82,
            "IQD":17.83,
            "CNY":0.097,
            "BRL":0.068,
            "CAD":0.018,
            "BGN":0.025,
            "DKK":0.094,
            "HUF":4.85
        }
        const Albania_object={
            "INR":0.87,
            "USD":0.010,
            "PKR":2.92,
            "AFN":0.79,
            "ALL":1,
            "DZD":1.41,
            "EUR":0.0097,
            "AZN":0.018,
            "IDR":164.41,
            "BTN":0.87,
            "SGD":0.014,
            "JPY":1.55,
            "NPR":1.40,
            "IQD":13.69,
            "CNY":0.074,
            "BRL":0.052,
            "CAD":0.014,
            "BGN":0.019,
            "DKK":0.072,
            "HUF":3.72
        }
        const Algeria_object={
            "INR":0.62,
            "USD":0.0074,
            "PKR":2.08,
            "AFN":0.56,
            "ALL":0.71,
            "DZD":1,
            "EUR":0.0069,
            "AZN":0.013,
            "IDR":116.94,
            "BTN":0.62,
            "SGD":0.0100,
            "JPY":1.10,
            "NPR":0.99,
            "IQD":9.74,
            "CNY":0.053,
            "BRL":0.037,
            "CAD":0.010,
            "BGN":0.013,
            "DKK":0.051,
            "HUF":2.65
        }
        const Austria_object={
            "INR":0.62,
            "USD":0.0074,
            "PKR":2.08,
            "AFN":0.56,
            "ALL":0.71,
            "DZD":1,
            "EUR":0.0069,
            "AZN":0.013,
            "IDR":116.94,
            "BTN":0.62,
            "SGD":0.0100,
            "JPY":1.10,
            "NPR":0.99,
            "IQD":9.74,
            "CNY":0.053,
            "BRL":0.037,
            "CAD":0.010,
            "BGN":0.013,
            "DKK":0.051,
            "HUF":2.65
        }
        const Azerbaijan_object={
            "INR":0.87,
            "USD":0.010,
            "PKR":2.92,
            "AFN":0.79,
            "ALL":1,
            "DZD":1.41,
            "EUR":0.0097,
            "AZN":0.018,
            "IDR":164.41,
            "BTN":0.87,
            "SGD":0.014,
            "JPY":1.55,
            "NPR":1.40,
            "IQD":13.69,
            "CNY":0.074,
            "BRL":0.052,
            "CAD":0.014,
            "BGN":0.019,
            "DKK":0.072,
            "HUF":3.72
        }
        const Idonesia_object={
            "INR":0.87,
            "USD":0.010,
            "PKR":2.92,
            "AFN":0.79,
            "ALL":1,
            "DZD":1.41,
            "EUR":0.0097,
            "AZN":0.018,
            "IDR":164.41,
            "BTN":0.87,
            "SGD":0.014,
            "JPY":1.55,
            "NPR":1.40,
            "IQD":13.69,
            "CNY":0.074,
            "BRL":0.052,
            "CAD":0.014,
            "BGN":0.019,
            "DKK":0.072,
            "HUF":3.72
        }
        const Bhutan_object={
            "INR":0.87,
            "USD":0.010,
            "PKR":2.92,
            "AFN":0.79,
            "ALL":1,
            "DZD":1.41,
            "EUR":0.0097,
            "AZN":0.018,
            "IDR":164.41,
            "BTN":0.87,
            "SGD":0.014,
            "JPY":1.55,
            "NPR":1.40,
            "IQD":13.69,
            "CNY":0.074,
            "BRL":0.052,
            "CAD":0.014,
            "BGN":0.019,
            "DKK":0.072,
            "HUF":3.72
        }
        const Singapore_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const JAPAN_object={
            "INR":0.87,
            "USD":0.010,
            "PKR":2.92,
            "AFN":0.79,
            "ALL":1,
            "DZD":1.41,
            "EUR":0.0097,
            "AZN":0.018,
            "IDR":164.41,
            "BTN":0.87,
            "SGD":0.014,
            "JPY":1.55,
            "NPR":1.40,
            "IQD":13.69,
            "CNY":0.074,
            "BRL":0.052,
            "CAD":0.014,
            "BGN":0.019,
            "DKK":0.072,
            "HUF":3.72
        }
        const Nepal_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const Iraq_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const China_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const Brazil_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const Canada_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const Bulgaria_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const Denmark_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
        const HUngary_object={
            "INR":82.993039,
            "USD":1,
            "PKR":208.057434,
            "AFN":55.98787,
            "ALL":71.162859,
            "DZD":100.08035,
            "EUR":0.68845,
            "AZN":1.264787 ,
            "IDR":11703,
            "BTN":61.68,
            "SGD":1,
            "JPY":110.39,
            "NPR":99.37,
            "IQD":974.63,
            "CNY":5.30,
            "BRL":3.70,
            "CAD":1.00,
            "BGN":1.35,
            "DKK":5.14,
            "HUF":264.87
        }
       if(From_value==="INR"){
        for(let x in India_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"INR= "+India_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="USD"){
        for(let x in USA_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"USD= "+USA_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="PKR"){
        for(let x in Pak_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"PKR= "+Pak_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="AFN"){
        for(let x in Afghanistan_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"AFN= "+Afghanistan_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="ALL"){
        for(let x in Albania_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"ALL= "+Albania_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="DZD"){
        for(let x in Algeria_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"DZD= "+Algeria_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="EUR"){
        for(let x in Austria_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"INR= "+Austria_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="AZN"){
        for(let x in Azerbaijan_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"AZN= "+Azerbaijan_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="IDR"){
        for(let x in Idonesia_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"IDR= "+Idonesia_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="BTN"){
        for(let x in Bhutan_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"BTN= "+Bhutan_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="SGD"){
        for(let x in Singapore_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"SGD= "+Singapore_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="JPY"){
        for(let x in JAPAN_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"JPY= "+JAPAN_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="NPR"){
        for(let x in Nepal_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"NPR= "+Nepal_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="IQD"){
        for(let x in Iraq_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"IQD= "+Iraq_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="CNY"){
        for(let x in China_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"CNY= "+China_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="BRL"){
        for(let x in Brazil_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"BRL= "+Brazil_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="CAD"){
        for(let x in Canada_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"CAD= "+India_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="BGN"){
        for(let x in Bulgaria_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"BGN= "+Bulgaria_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="DKK"){
        for(let x in Denmark_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"DKK= "+Denmark_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else if(From_value==="HUF"){
        for(let x in HUngary_object)
        { 
            if(To_value===x){
                document.getElementById("Result").value=text_field+"HUF= "+HUngary_object[x]*text_field+To_value;
                return;
            }
           

        }

       }
       else{
        alert("Input error")
       }
       
  
    }
}
function flag_change1(){
    var flag_value1=document.getElementById("From").value;
    if(flag_value1==="USD"){
        document.getElementById("flag").src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
       
    }
    else if(flag_value1==="PKR"){
        document.getElementById("flag").src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
    }
    else if(flag_value1==="INR"){
        document.getElementById("flag").src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
    }
    else if(flag_value1==="AFN"){
        document.getElementById("flag").src="https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1-scaled.jpg"
    }
    else if(flag_value1==="ALL"){
        document.getElementById("flag").src="https://cdn.britannica.com/00/6200-004-42B7690E/Flag-Albania.jpg"
    }
    else if(flag_value1==="DZD"){
        document.getElementById("flag").src="https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-3-scaled.jpg"    }
    else if(flag_value1==="EUR"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png"    }
    else if(flag_value1==="AZN"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png"    }
    else if(flag_value1==="IDR"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Indonesia.png"    }
    else if(flag_value1==="BTN"){
        document.getElementById("flag").src="https://cdn11.bigcommerce.com/s-e2nupsxogj/products/1962/images/46484/r9r0jiszzuobs5nxegay__98843.1694734798.386.513.jpg?c=1"    }
    else if(flag_value1==="SGD"){
        document.getElementById("flag").src="https://cdn11.bigcommerce.com/s-e2nupsxogj/products/1962/images/46484/r9r0jiszzuobs5nxegay__98843.1694734798.386.513.jpg?c=1"    }
    else if(flag_value1==="JPY"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"    }
    else if(flag_value1==="NPR"){
        document.getElementById("flag").src="https://static.vecteezy.com/system/resources/previews/022/102/666/original/nepal-flag-png.png"    }
    else if(flag_value1==="IQD"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png"    }
    else if(flag_value1==="CNY"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"    }
    else if(flag_value1==="BRL"){
        document.getElementById("flag").src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg"    }
    else if(flag_value1==="CAD"){
        document.getElementById("flag").src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"    }
    else if(flag_value1==="BGN"){
        document.getElementById("flag").src="https://cdn.britannica.com/04/6204-004-DC5CFE4F/Flag-Bulgaria.jpg"
    }
    else if(flag_value1==="DKK"){
        document.getElementById("flag").src="https://cdn.britannica.com/07/8007-050-D4170843/Flag-Denmark.jpg"
    }
    else if(flag_value1==="HUF"){
        document.getElementById("flag").src="https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg"
    }
    else{

    }
 
   }
   function flag_change2(){
    var flag_value2=document.getElementById("To").value;

    if(flag_value2==="USD"){
        document.getElementById("flag2").src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
    }
    else if(flag_value2==="PKR"){
        document.getElementById("flag2").src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
    }
    else if(flag_value2==="INR"){
        document.getElementById("flag2").src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
    }
    else if(flag_value2==="AFN"){
        document.getElementById("flag2").src="https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1-scaled.jpg"
    }
    else if(flag_value2==="ALL"){
        document.getElementById("flag2").src="https://cdn.britannica.com/00/6200-004-42B7690E/Flag-Albania.jpg"
    }
    else if(flag_value2==="DZD"){
        document.getElementById("flag2").src="https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-3-scaled.jpg"    }
    else if(flag_value2==="EUR"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png"    }
    else if(flag_value2==="AZN"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1200px-Flag_of_Azerbaijan.svg.png"    }
    else if(flag_value2==="IDR"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Indonesia.png"    }
    else if(flag_value2==="BTN"){
        document.getElementById("flag2").src="https://cdn11.bigcommerce.com/s-e2nupsxogj/products/1962/images/46484/r9r0jiszzuobs5nxegay__98843.1694734798.386.513.jpg?c=1"    }
    else if(flag_value2==="SGD"){
        document.getElementById("flag2").src="https://cdn11.bigcommerce.com/s-e2nupsxogj/products/1962/images/46484/r9r0jiszzuobs5nxegay__98843.1694734798.386.513.jpg?c=1"    }
    else if(flag_value2==="JPY"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"    }
    else if(flag_value2==="NPR"){
        document.getElementById("flag2").src="https://static.vecteezy.com/system/resources/previews/022/102/666/original/nepal-flag-png.png"    }
    else if(flag_value2==="IQD"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png"    }
    else if(flag_value2==="CNY"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"    }
    else if(flag_value2==="BRL"){
        document.getElementById("flag2").src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg"    }
    else if(flag_value2==="CAD"){
        document.getElementById("flag2").src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"    }
    else if(flag_value2==="BGN"){
        document.getElementById("flag2").src="https://cdn.britannica.com/04/6204-004-DC5CFE4F/Flag-Bulgaria.jpg"
    }
    else if(flag_value2==="DKK"){
        document.getElementById("flag2").src="https://cdn.britannica.com/07/8007-050-D4170843/Flag-Denmark.jpg"
    }
    else if(flag_value2==="HUF"){
        document.getElementById("flag2").src="https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg"
    }
    else{

    }

 
   }
 function clearResult(){

        document.getElementById("Result").value=""
        document.getElementById("text-field").value="";
      
        
 }