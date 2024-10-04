import React, { useReducer} from 'react';
// import ThemeContext from './ThemeContext';
const initialState = {
  fields: [{ value: '' }]
};

function reducer(state, action) {
  switch (action.type) {
    case 'addField':
      return { fields: [...state.fields, { value: '' }] };
    case 'removeField':
      return { fields: state.fields.filter((_, index) => index !== action.index) };
    case 'updateField':
      const updatedFields = state.fields.map((field, index) =>
        index === action.index ? { value: action.value } : field
      );
      return { fields: updatedFields };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const {bgColor}=useContext(ThemeContext);

  return (
    <div className='reducer flex'>
        <div>
            <h1>useReducer</h1>
        {state.fields.map((field, index) => (
        <div key={index}>
          <input className='hrjinput'
            type="text"
            value={field.value}
            onChange={(e) => dispatch({ type: 'updateField', index, value: e.target.value })}
          />
          <button className='hrjbtn' onClick={() => dispatch({ type: 'removeField', index })}>Remove</button>
        </div>
      ))}
        </div>
      <div>
      <button className='hrjbtn' onClick={() => dispatch({ type: 'addField' })}>Add Field</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}


export default UseReducer;