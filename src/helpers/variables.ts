export class Variables {
    private primary: string = '#f0544d';
    private secondary: string = '#30bcad';
    private danger: string = '#ff5148';
    private light: string = '#9ddcf5';
    private dark: string = '#4e4e4e';
    private bp_yellow: string = '#ffc865';
    private bp_red: string = '#f0544d';
    private bp_blue: string = '#9ddcf5';
    private bp_green: string = '#30bcad';
    private bp_gray_dark: string = '#4e4e4e';
    private bp_gray_medium: string = '#cccccc';
    private bp_gray_clear: string = '#f3f3f3';
    private bp_white: string = '#ffffff';
    private bp_red_clear: string = '#ffaba9';

    constructor() { }

    public getColorByName(colorName) {
        let cName = colorName;
        
        while(cName.indexOf('-') >= 0) {
            cName = cName.replace('-', '_');
        }

        return this[cName];
    }
}