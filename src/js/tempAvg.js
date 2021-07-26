export const tempAvg = (data) => {
    let dayAvg = [];
    let dayTemp = 0;
    let loopNum = 0;
    for(let k = 0; k < 40; k++){
        dayTemp  = dayTemp + data.list[k].main.temp;
        loopNum ++;

        if(data.list[k].dt_txt.includes("00:00:00")){
            dayAvg.push(Math.round(dayTemp/loopNum));
            dayTemp = 0;
            loopNum = 0;
        }
    }
    dayAvg.push(Math.round(dayTemp/loopNum));
    console.log(dayAvg);
    return dayAvg;
}