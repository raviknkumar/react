import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles={
    "dot": {
        backgroundColor: "black",
        borderRadius: "50%",
        display: "inline-block",
        border: "solid 2px white"
    },
    "container": {
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "0 auto"
    },

    "slidecontainer": {
        width: "80%",
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        margin:'auto'
    },
    "slider": {
        WebkitAppearance: "none",
        appearance: "none",
        width: "75%",
        height: "5px",
        background: "#d3d3d3",
        // outline: "none",
        opacity: "1",
        WebkitTransition: ".2s",
        transition: "opacity .2s",
        display: "block",
        margin: "0 auto",
        // marginTop:'5%',
        position: "relative",
        borderRadius: 5,
        '&::-webkit-slider-thumb': {
            WebkitAppearance: "none",
            appearance: "none",
            background: '#F05B00',
            outline: 'none',
            opacity: '1',
            width:20,
            height: 20,
            border: 'solid 2px white',
            borderRadius: 10
        }
    },
    collapsible: {
        backgroundColor: '#555658',
        color: 'white',
        cursor: 'pointer',
        padding: 18,
        width: '100%',
        border: 'solid 1px #393A3D',
        textAlign: 'center',
        outline: 'none',
        fontSize: 15,
        marginBottom: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        lineHeight:'200%',
        color:'black',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        fontFamily:'Gotham Book',
        fontSize:14,
        marginBottom: '10%'
    }
}

const minStep=5;
const maxStep=25;
class RingSizeContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            steps: 20,
            currentStep: 5,
            screenMeasure: "block",
            rulerMeasure:"none",
            ringSizer:"none"
        };
        this.sizeTable = {
            5: {circumference:"44.90",diameter:"14.30"}, //54.04px
            6: {circumference:"45.90",diameter:"14.62"},
            7: {circumference:"47.10",diameter:"15.00"},
            8: {circumference:"48.10",diameter:"15.32"},
            9: {circumference:"49.00",diameter:"15.61"},
            10: {circumference:"50.00",diameter:"15.92"},
            11: {circumference:"50.90",diameter:"16.21"},
            12: {circumference:"51.80",diameter:"16.50"},
            13: {circumference:"52.80",diameter:"16.82"},
            14: {circumference:"54.00",diameter:"17.20"},
            15: {circumference:"55.00",diameter:"17.52"},
            16: {circumference:"55.90",diameter:"17.80"},
            17: {circumference:"56.90",diameter:"18.12"},
            18: {circumference:"57.80",diameter:"18.41"},
            19: {circumference:"59.10",diameter:"18.82"},
            20: {circumference:"60.00",diameter:"19.11"},
            21: {circumference:"60.90",diameter:"19.39"},
            22: {circumference:"61.90",diameter:"19.71"},
            23: {circumference:"62.80",diameter:"20.00"},
            24: {circumference:"63.80",diameter:"20.32"},
            25: {circumference:"64.70",diameter:"20.61"}, //77.89px
        };

    }

    //mm to px, for 100 mm
    // cm = (100mm / 10)
    // px = cm * (96 / 2.54)

    resize = (event) =>{
        console.log(event.target.value);
        this.setState({currentStep: event.target.value});
    }


    render() {

        const {classes} = this.props;
        const {sizeTable} = this;
        const { currentStep } = this.state;



        return(
            <Fragment>
                <div className={classes.container}>
                    {/*This is the circle div. check this*/}
                    <div
                        className={classes.dot}
                        style={{
                            width: `${sizeTable[currentStep].diameter}mm`,
                            height: `${sizeTable[currentStep].diameter}mm`,
                            transition: "all 0.1s linear",
                        }} />
                </div>
                <div className={classes.slidecontainer}>
                    <input type="range" min="5" max="25" value={this.state.currentStep}
                           onChange={this.resize} className={classes.slider} step="1" id="myRange"
                    />
                </div>
                <div className={classes.text}>
                    <p>Ring Size {currentStep}</p>
                    <p>Diameter: {sizeTable[currentStep].diameter+'mm'}</p>
                    <p>Circumference: {sizeTable[currentStep].circumference+'mm'}</p>
                    <p style={{fontSize:10}}><span style={{color:'#E94402'}}>Note:</span> This circle should not extend past the inside of the ring</p>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(RingSizeContainer);


//
// <div className={classes.container}>
//     <div
//         className={classes.dot}
//         style={{
//             width: `${sizeTable[currentStep]}mm`,
//             height: `${sizeTable[currentStep]}mm`,
//             transition: "all 0.1s linear",
//         }} />
// </div>
// <div className={classes.slidecontainer}>
//     {/*<Slider*/}
// {/*    defaultValue={this.state.currentStep}*/}
// {/*    // getAriaValueText={valuetext}*/}
// {/*    aria-labelledby="discrete-slider"*/}
// {/*    valueLabelDisplay="auto"*/}
// {/*    step={1}*/}
// {/*    min={5}*/}
// {/*    max={25}*/}
// {/*    onChange={this.resize}*/}
// {/*/>*/}
//
// {/*<input type="range" min="1" max="20" value="1" className={classes.slider} step="1" id="myRange"*/}
// {/*       onInput={this.resize(value)}/>*/}
// </div>
