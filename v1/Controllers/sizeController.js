function changePrice(o,price,priceBefore)
   {
       $('#'+o.parentElement.getAttribute("data-productidsold")).html(new Intl.NumberFormat().format(parseFloat(price)));
       if(priceBefore !='')       
       $('#'+o.parentElement.getAttribute("data-productidsold")+o.parentElement.getAttribute("data-productidsold")).html(new Intl.NumberFormat().format(parseFloat(priceBefore)));
   
    }

   function tempFunction(btnAddToCart,title,Description,image,qty,poldid)
   {
        var mainProduct = btnAddToCart.parentElement.parentElement;
        if($(mainProduct).find(".ec-pro-option").length > 0)
        {
            if($(mainProduct).find(".ec-pro-option").find(".active")[0] == undefined)
            {
                var options = {
                    autoClose: true,
                    progressBar: true,
                    enableSounds: true,
                    sounds: {
            
                        error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                    },
                };
                var toast = new Toasty(options);
                toast.configure(options);
            
                toast.error("Please choose a size!");
            
            }
                
            else
                {
                   var p_id = $(mainProduct).find(".ec-pro-option").find(".active")[0].getAttribute('data-ProductVariantID')
                   var retailprice = $(mainProduct).find(".ec-pro-option").find(".active")[0].getAttribute('data-retailprice')
                   var size = $(mainProduct).find(".ec-pro-option").find(".active")[0].getAttribute('data-Sizevariant')
                    Check(p_id,title,Description,retailprice,image,qty,poldid,size)
                    
                }
        }
       
   }



   function s_changePrice(o,p_id,price,priceBefore,Size)
   {
       $('#'+o.parentElement.getAttribute("data-productidsold")).html(new Intl.NumberFormat().format(parseFloat(price)));
       
       if(priceBefore !='')       
       $('#'+o.parentElement.getAttribute("data-productidsold")+o.parentElement.getAttribute("data-productidsold")).html(new Intl.NumberFormat().format(parseFloat(priceBefore)));
   
       productids=p_id;
       setsizeprice=price;
       setsize = Size;
   }

   function checkpriceset(newid,title,Description,retailprice,image,qty,poldid,setsize)
   {
    if(newid == null)
    {
        var options = {
            autoClose: true,
            progressBar: true,
            enableSounds: true,
            sounds: {
    
                error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
    
            },
        };
        var toast = new Toasty(options);
        toast.configure(options);
    
        toast.error("Please choose a size!");
    
    }
    else
    {
        Check(newid,title,Description,retailprice,image,qty,poldid,setsize)
    }
   }