

export const randomElements = (array, n) =>  {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, n);
}

export const randomArray = (array_size,n_elements=10) => {
    let arr = [];
    do{
        let randValue = Math.floor(Math.random() * array_size + 1);
        if (!arr.includes(randValue))
            arr.push(randValue.toString())
    }
    while (arr.length < n_elements);
    return arr;
}