//console.log('%c HI', 'color: firebrick')

//Challenge 1
document.addEventListener("DOMContentLoaded", function() {
//Fetch request    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl) 
     .then((data) => data.json())  
     .then((data) => displayAllImages(data))


     const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
  
     .then((data) => data.json())
  
     .then((data) => displayAllBreeds(data));
  
  });
  

  
  const displayAllImages = (images) => {
  const imageContainer = document.getElementById("dog-image-container");
  
//Iterating over the dog images array of objects
    images.message.forEach((image) => {
  
      const imageElement = document.createElement("img");
  
      imageElement.src = image;
  
      imageContainer.appendChild(imageElement);
  
    });
   
  };
  const displayAllBreeds = (breeds) => {
  
    const breedContainer = document.getElementById("dog-breeds");
  
  
    // Iterating over the array of dog breeds list
  
    for (const [key, value] of Object.entries(breeds.message)) {
  
      const breedElement = document.createElement("li");
  
      breedElement.textContent = key;

      breedElement.addEventListener("click",function(){
        this.style.color="red";
      })
  
      breedContainer.appendChild(breedElement);
  
  
      // Add sub-breeds if exist
  
      if (value.length > 0) {
  
        const subBreedElement = document.createElement("ul");
  
        breedElement.appendChild(subBreedElement);
  
        value.forEach((subBreed) => {
  
          const subBreedLiElement = document.createElement("li");
  
          subBreedLiElement.textContent = subBreed;
  
          subBreedElement.appendChild(subBreedLiElement);
  
        });
  
      }
  
    }
    const filterDropdown = document.getElementById("breed-dropdown");


    // Add event listener for 'change' event
    
    filterDropdown.addEventListener("change", () => {
    
      const selectedValue = filterDropdown.value;
    
      const breedLiElements = document.querySelectorAll("#dog-breeds li");
    
    
      breedLiElements.forEach((li) => {
    
        if (selectedValue === "" || li.textContent.startsWith(selectedValue)) {
    
          li.style.display = "";
    
        } else {
    
          li.style.display = "none";
    
        }
    
      });
    
    });
    
    
    // Call the 'change' event handler initially to display the breeds
    
    filterDropdown.dispatchEvent(new Event("change"));

  };

  