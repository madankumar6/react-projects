import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({userInput}) {
    const results = calculateInvestmentResults(userInput);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results);

    return (<table id='result'>
        <thead>
            <tr>
                <th>year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map((resultItem) => {
                const totalInterest = resultItem.valueEndOfYear - resultItem.annualInvestment * resultItem.year - initialInvestment;
                const totalAmountInvested = resultItem.valueEndOfYear - totalInterest;
                 
                return (
                <tr key={resultItem.year}>
                    <td>{resultItem.year}</td>
                    <td>{formatter.format(resultItem.valueEndOfYear)}</td>
                    <td>{formatter.format(resultItem.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>);
            })}
        </tbody>
    </table>);
}