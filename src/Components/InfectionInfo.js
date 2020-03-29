import React from 'react'

import Info from './InfoDetail';
import logo from './Logo.png'

const infectionInfo = (props) => {
  // console.log(props);

  return (
    <div className="info">
      <img src={logo} alt="Logo" className="preloader--img" />
      <div>
        <h1>WYNIK</h1>
        <h3 className="color--primary">
          Mogłe(a)ś mieć kontakt z zakażonym (podlegającym kwarantannie)
        </h3>
      </div>
      <div className="info-detail">
        <p className="color--secondary">Szczegóły kontaktu:</p>
      </div>
      <div className="info-list">
        {props.list.activities ? (
          <div>
            {props.list.activities.map(activity => {
              return <Info key={activity.id} data={activity} />;
            })}
          </div>
        ) : (
          <p> Ładuję dane ... </p>
        )}
      </div>
    </div>
  );
}

export default infectionInfo