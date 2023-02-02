import React, { useState } from "react";

const Table = (props) => {

    return (
        <div >
            <table>
                <tbody>
                    {
                        props.dataSource.map(el => {
                            return (
                                <tr>
                                    <td>{el.id}</td>
                                    <td>{el.label}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;