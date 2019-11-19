import React from "react";

export function NonprofitList({ nonprofits }) {
    return (
        <ul className="list-group">{nonprofits.map(item => {
            return (<NonprofitListItem item={item} key={item.id} />)
        })
        }</ul>
    );
};

export function NonprofitListItem({
    item
}) {
    if (!item) {
        return null;        
    }
    const { id,
        orgName,
        city,
        state,
        zip,
        orgFocus,
        url,
        clickEvent,
        saved
    } = item;
    return (
        <li className="list-group-item m-2">

            <div className="float-right">
                {!saved ? (
                    <button
                        className="btn btn-success"
                        onClick={event => clickEvent(event, id, orgName, city, state, orgFocus, url)}>Save
                    </button>
                ) : (
                        <button
                            className="btn btn-danger"
                            onClick={event => clickEvent(event, id)}>Unsave
                    </button>
                    )
                }
                <button id="donate" className="btn btn-primary ml-2 mr-2" href="/donate" target="_blank" rel="noopener noreferrer">Donate</button>
            </div>

            <h4 className="font-weight-bold">{orgName}</h4>

            <h5>Org Focus: {orgFocus}</h5>

            <h5>{city}, {state.toUpperCase()} {zip}</h5>

            {url ? <a href={url} className="btn btn-success" rel="noopener noreferrer" target="_blank">Link to Organization</a> : null}

        </li>

    )
}