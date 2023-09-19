function getSum(numberArr,target){
    for(let i=0;i<numberArr.length;i++){
        for(let j=i+1;j<numberArr.length;j++){
            if(numberArr[i]+numberArr[j]===target){
                return([i,j])
            }
        }
    }
}

const numberArr = [0, 7, 11, 2];
const target = 7;
const result = getSum(numberArr, target);
console.log(result);