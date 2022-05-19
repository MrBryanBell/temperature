import { interpolateHsl } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';

class Calc {

    static getSmallNum(num: number, max: number) {
        const x = scaleLinear()
            .domain([0, max])
            .range([0, 1]);

        return x(num);
    }


    static Color({value, max}: {value: number, max: number}) {
        const x = interpolateHsl('#A8FF20', '#FF1F20');
        const smallNum = Calc.getSmallNum(value, max);

        return x(smallNum);
    }


    static Squares(num: number) {
        const x = scaleLinear()
            .domain([0, 100])
            .range([0, 50]);
        
        const rounded = Math.round(x(num));
        
        return rounded;
    }
}





export {
    Calc,
}