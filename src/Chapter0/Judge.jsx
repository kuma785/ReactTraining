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
    arr.forEach((numbers) => {
        const [number1, number2, number3] = numbers;
        if(data[number1] && data[number1] === data[number2] && data[number2] === data[number3]){
            judge();
        };
    });

    return null;
};