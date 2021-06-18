
        var obj = 
        [{ person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },];
//for in loop//
        for (var i in obj) 
        {for (var j in obj[i]) 
          {console.log(j + ':'+obj[i][j]);
        }
      }
// forloop//
        for(let i=0;i<obj.length;i++){
          const ele=obj[i];
          console.log(ele);
        }
//for of loop//
        for (const ind of obj)
        {
          console.log(ind);
        }

// for each loop//
obj.forEach(function(elements)
{
  console.log(elements);
})