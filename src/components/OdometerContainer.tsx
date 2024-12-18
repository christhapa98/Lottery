import Odometer from 'react-odometerjs';

//
type OdometerProptype = {
  values: Array<number>
}
const OdometerContainer = ({values}: OdometerProptype) => {
    return(
        <>
            <div className='counter' style={{ padding: "20px", background: "rgba(255,255,255,0.5)"}}>
              {
                values.map((value, index) => (
                  <Odometer
                    key={index}
                    format="dddd-ddd-ddd"
                    duration={2000}
                    value={value}
                  />
                ))
              }
            </div>
        </>
    );
}

export default OdometerContainer;