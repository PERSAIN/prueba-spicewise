import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Utils from "./utils/Utils";

// Utils.createMatrix(2, 3) --> [[99,90,43],[63,81,8]]

function App() {

  const [state, setState]= useState([]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    var matrix = Utils.createMatrix(data.rows,data.columns);
    console.log(matrix);
    setState(matrix)
  };

  var higherodd = 0;
  var lowereven = NaN;
  var promodd = 0;
  var promeven = 0; 
  var sumaTotalPares = 0;
  var sumaTotalImpares = 0;
  var totalPares = 0;
  var totalImpares = 0;

  state.map((element) => 
    {
      element.map((elementinside) =>
        {
          // Calcular promedio de numeros pares
          if (elementinside%2 == 0){
            sumaTotalPares = sumaTotalPares + elementinside;
            totalPares = totalPares + 1
          
            // Verify the higher odd number
            if (elementinside > higherodd){
              higherodd = elementinside
            }
          }

          // Calcular promedio de numeros impares
          if (elementinside%2 != 0){
            sumaTotalImpares = sumaTotalImpares + elementinside;
            totalImpares = totalImpares + 1

            // Verify the lower even number
            if (isNaN(lowereven))
              lowereven = elementinside

            if (elementinside < lowereven){
              lowereven = elementinside
            }
          }
        }
      )
    }
  )

  promodd = sumaTotalPares/totalPares;
  promeven = sumaTotalImpares/totalImpares;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="rows" ref={register({ required: true })} />
        {errors.rows && <span>This field is required</span>}
        <input name="columns" ref={register({ required: true })} />
        {errors.columns && <span>This field is required</span>} 
        <input type="submit" />
      </form>

      <div className="tabla">
        {state.map((element)=>
          <p>{element.map((elementinside)=>
            <a>{elementinside} </a> 
          )}</p>
        )}
      </div>

      <div className="tabla">
        {state.map((element)=>
          <p>{element.map((elementinside)=>
            <a className={elementinside%2 == 0 ? "par" : "impar"}>{elementinside} </a> 
          )}</p>
        )}
      </div>

      {state[0] ? 
         <div>
          <p>El número par más grande es {higherodd}</p>
          <p>El número impar más pequeño es {lowereven}</p>
          <p>El promedio de numeros pares es {promodd}</p>
          <p>El promedio de numeros impares es {promeven}</p>
         </div>
       : ""}
    </div>
  )
}

export default App;
