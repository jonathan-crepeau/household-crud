console.log('homepage.js reporting for duty..');

const newIngredient = {
    name: "coco pebbles",
    creatureType: "grocery store"
};

fetch(`http://localhost:3100/api/v1/member`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newIngredient)
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));