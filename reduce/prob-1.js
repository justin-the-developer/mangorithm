let array = [
    {id: 123, tags: ['TABLE']},
    {id: 456, tags: ['TABLE']},
    {id: 233, tags: ['DESK']}
];


const keyByTagNameReducer = (acc, element) => {
    if(acc[element.tags[0]] !== undefined ) return {...acc, [element.tags[0]]: [...acc[element.tags[0]], element]};

    return {...acc, [element.tags[0]]: [element]};
}

const TagNameSortedObj = array.reduce(keyByTagNameReducer, {});
