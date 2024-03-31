export default function Judge ({data, judge}) {
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    arr.map((number) => {
        if(data[number[0]] && data[number[0]] === data[number[1]] && data[number[1]] === data[number[2]]){
            judge();
        };
    });

    return null;
};