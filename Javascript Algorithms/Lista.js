class Nodo {
 constructor(value){
  this.value=value;
  this.prev=null;
 }
}

class Lista{
 constructor(){
  this.tail=null;
 }

 add(value){
  if(!this.tail){
    let n = new Nodo(value);
    this.tail=n;
    return this;
   }
 
   
   let n = new Nodo(value);
   n.prev = this.tail;
   this.tail= n;
   return this;
  }
  
  print(){
   let n = this.tail;
   while(n){
    console.log(n.value)
    n=n.prev;
   }
  }
}

gr=new Lista();
gr.add(4).add(5).add(6).add(9).print()
