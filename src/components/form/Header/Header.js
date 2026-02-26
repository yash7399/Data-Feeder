import "./Header.css"

function Header({title}) {

    return (
        <>
            <div className="form-header">
                
                <h4 className="form-title">{title}</h4>
            </div>

            <div className="note">

             <p >Note: All fields marked * are mandatory.</p>
            </div>

        </>
    )
}

export default Header;