/// var obj = {
//   meals: [{}, {}, {}]
//}


function searchRecipe() {
    var search = document.getElementById('search');
    console.log(search.value)
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
        .then(res => res.json())
        .then(function (data) {

            // Your code for handling the data you get from the API
            console.log(data.meals);
            const recipesArr = data.meals;
            var row = document.getElementById('row')
            for (let i = 0; i < recipesArr.length; i++) {
                let box = document.createElement('div')
                box.setAttribute('class', 'box')
                var images = document.createElement('img')
                images.setAttribute('class', 'box')
                images.setAttribute('src', recipesArr[i].strMealThumb)
                box.append(images)
                row.appendChild(images)
                console.log("hey", recipesArr[i].strMealThumb)
                console.log('title', recipesArr[i].strMeal)
                var text = document.createTextNode(recipesArr[i].strMeal)
                console.log(text)
            }





        })



        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error)
        });
    search.value = '';
}

function searchRandom() {
    var api = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(api)
        .then(res => res.json())
        .then(function (data) {
            console.log(data)
            var recipeSingle = data.meals;
            var row = document.getElementById('row')
            // for (let i = 0; i < recipeSingle.length; i++) {
            let box = document.createElement('div')
            // var div = document.createElement('div')
            // div.setAttribute('class', 'box')
            var images = document.createElement('img')
            images.setAttribute('class', 'box')
            images.setAttribute('src', recipeSingle[0].strMealThumb)
            box.append(images)
            row.appendChild(images)
            // var texting = document.createElement('h1')
            // texting.setAttribute('class', 'box')
            // texting.setAttribute('src', recipeSingle[i].strMeal)
            // box.append(texting)
            // row.appendChild(texting)
            // console.log('title', recipeSingle[0].strMeal)
            // console.log(text)
            // row.appendChild(div)



        })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error)
        });
    search.value = '';
}
