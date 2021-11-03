import React from 'react';

import './App.css';
import Header from './components/Header';
import { useForm, SubmitHandler } from "react-hook-form";
import { recommendationAlgorithm, socialMediaCountGenerator, stockPriceGenerator } from './services/recommendations';


interface FormData {
  stocksymbol: string;
  socialmedia: string;
  timewindow: number;
}

function App() {

  const { register, handleSubmit } = useForm<FormData>();

  const [result, setResult] = React.useState<any>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    setResult(data);
};

  return (
    <div className="App">
      <Header />
      
      <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                  <label>Stock Symbol:</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter stock symbol" 
                      {...register("stocksymbol", {required: true})} />

                  <label>Social Media:</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter a social media name" 
                      {...register("socialmedia", {required: true})} />

                  <label>Time Window:</label>
                  <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Enter a time window" 
                      {...register("timewindow", {required: true, min: 1})} />
              </div>
              <input type="submit" />
          </form>
        </div>

        <div className="container-result">
          {result && <div>
            <h3>Result</h3>
            <table className="table">
              <th className="table-header">Stock Symbol</th>
              <th>Social Media</th>
              <th>Social Media Posts</th>
              <th>Stock Price</th>
              <th>Recommendation</th>
              <tr>
                <td>{result.stocksymbol}</td>
                <td>{result.socialmedia}</td>
                <td>{socialMediaCountGenerator(result.stocksymbol, result.socialmedia)}</td>
                <td>${stockPriceGenerator(result.stocksymbol, '2021-09-09')}</td>
                <td>{recommendationAlgorithm(Number(stockPriceGenerator(result.stocksymbol, '2021-09-09')), socialMediaCountGenerator(result.stocksymbol, result.socialmedia))}</td>
              </tr>
            </table>
          </div>}
        </div>


    </div>
  );
}

export default App;
