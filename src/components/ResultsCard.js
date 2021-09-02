import React from 'react'

export const ResultsCard = ({ textFill, numberFill }) => {
    return (
        <div className="resultsCardWrapper">
            <div className="resultsDesc">
                {`${textFill}`}<br /> <div className="greySubText">/ person</div>
            </div>

            <div className="resultsAmount">${(numberFill).toFixed(2)}</div>
        </div>
    )
}
