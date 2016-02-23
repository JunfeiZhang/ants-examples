//click deploy and remove

class game{
  constructor(){
    this._remove = false;
    //...
  }
  
  clickedRemoveButton(){
    this._remove = true;
  }
  
  placeClick(position){
    if(this._remove) remove(position);
    else deploy(position);
  }
  
  remove(position){
    //...
  }
  
  deploy(position){
    //...
  }
}
