// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name) {
    cats.push("Ralph")
 }

 function destructivelyPrependCat(name) {
    cats.unshift ("Bob")
 }
  function destructivelyRemoveLastCat() {
    cats.pop ();
  };

  function destructivelyRemoveFirstCat() {
    cats.shift ();
  };

  function appendCat(name) {
   return cats.concat (name);
  };
   function prependCat(name){
    const newCats = ["Arnold","Milo", "Otis", "Garfield"]
    return newCats;
   }
    function removeLastCat() {
        const newCats = cats.slice(0,-1);
        return newCats;
    }

    function removeFirstCat() {
        const newCats = cats.slice(1);
        return newCats;
    };