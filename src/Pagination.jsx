import React from 'react'

function Pagination({ totalBtn, getContent }) {
    const totalPage = totalBtn;
    // console.log(totalPage);

    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>

                    <li className="page-item"><a className="page-link " onClick={getContent}>1</a></li>
                    <li className="page-item"><a className="page-link" onClick={getContent}>2</a></li>
                    <li className="page-item"><a className="page-link" onClick={getContent}>3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
