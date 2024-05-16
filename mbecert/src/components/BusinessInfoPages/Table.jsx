import React from 'react';

const Table: React.FC = () => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>202__
                        (Most Recent fiscal Year )</th>
                    <th>202__
                        (Immediately Preceding Year)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Total  Revenue of FOC</td>
                    <td>5</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Total U.S. Revenue of FOC</td>
                    <td>2</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Percentage of total FOC revenue that is generated
                        outside the U.S.</td>
                    <td>0</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>Total Revenue of Applicant</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Total U.S.  Revenue of Applicant</td>
                    <td>3</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>
                        Percentage of total Applicant revenue that is
                            generated outside the U.S.
                    </td>
                    <td>10</td>
                    <td>15</td>
                </tr>
                </tbody>
            </table>
            <style>
                {`
          body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 20px;
            color: #333333;
          }

          table, th, td {
            border: solid 1px #000;
            padding: 10px;
          } 
          
          th {
          background-color: #EDF9FF;
          }

          table {
            border-collapse:collapse;
            caption-side:bottom;
          }

          caption {
            font-size: 16px;
            font-weight: bold;
            padding-top: 5px;
          }
        `}
            </style>
        </div>
    );
};

export default Table;
