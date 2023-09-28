import "./Input.css";

function Input ({ name, title, onChange, type, error}) {
  
    return (
        <>
          {name !== 'profile' ?
          <label className="profile__laber">
          kfkfk
              <input
              className="profile__input"
              name="profileEmail"
              type="text"
           
              placeholder="lflf "
              minLength="2"
              maxLength="40"
              required
              />
              <span className='login__error'>{error}</span>
            </label>
            :
            <>
            <label className='profile__label'>
              <span className='profile__subtitle'>{title}</span>
              <input
                required
                type={type}
                name={name}
              //  minLength={minLength || ''}
                // className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invaid'}`}
              //  value={value || ''}
                onChange={onChange}
              />
            </label>
            <span className={`profile__error ${name === 'username' ? 'profile__error_type_name' : ''}`}>{error}</span>
            </>
          }
        </>
      )
    }
  export default Input;
  