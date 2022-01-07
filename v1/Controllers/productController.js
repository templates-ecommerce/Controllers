try{

if(pagesnames == 'product')
{
  var pagenames = null;
var toprice = 0;
function Check(id, title, dec, price, img,qty,old_id,size) {

  const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  const idToUse = id;
  const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === ueres_id);
  if (existingItem) {
    Object.assign(existingItem, {
      'name': decodeURIComponent(title).replaceAll('+',' '),
      'quantity': existingItem.quantity + qty,
      'price': price,
      'dec': decodeURIComponent(dec).replaceAll('+',' '),
      'img': img,
      'user_id': ueres_id,
      'old_id': old_id,
      'size':size,
    })
  } else {
    const newItem = {
      'id': idToUse,
      'name': decodeURIComponent(title).replaceAll('+',' '),
      'quantity': qty,
      'price': price,
      'dec': decodeURIComponent(dec).replaceAll('+',' '),
      'img': img,
      'user_id': ueres_id,
      'old_id': old_id,
      'size':size,
    };
    oldItems.push(newItem);
  }

  localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  var options = {
    autoClose: true,
    progressBar: true,
    enableSounds: true,
    sounds: {

      success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",

    },
  };
  var toast = new Toasty(options);
  toast.configure(options);

  toast.success("New item(s) have been added to your cart");

  cardload();
  


}
}
} catch (error) {
  console.log(error)
}